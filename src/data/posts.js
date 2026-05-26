export const posts = [
  {
    slug: 'bringing-iam-into-terraform',
    title: 'Bringing IAM Into Terraform: A War Story',
    date: '2026-05-18',
    displayDate: 'May 2026',
    tags: ['aws', 'terraform', 'iam'],
    readTime: '5 min read',
    excerpt:
      'How a chicken-and-egg IAM problem blocked my Terraform pipeline - and how I debugged my way out of it.',
    content: `# Bringing IAM Into Terraform: A War Story

Shipped React Router, multi-stage Docker build, full CI/CD pipeline: build, push to ECR, deploy via SSM. Everything live at lopezberg.dev.

Then I broke the Terraform pipeline.

## What Broke

I had been managing \`github-actions-terraform-role\` and \`github-actions-terraform-policy\` manually in the console. These are what allow GitHub Actions to authenticate with AWS and run Terraform.

When I started importing them into state, the pipeline started failing with \`AccessDenied\`. The role didn't have permission to read its own policy.

## Chicken and Egg

To add permissions, Terraform needs to run. Terraform can't run without the permissions.

Manual console update to unblock it, then let Terraform take over.

## IAM Policy Scoping

The policy was scoped to \`portfolio-*\` only. Least privilege, correct. But Terraform was trying to read \`github-actions-portfolio-deploy\`, which doesn't match \`portfolio-*\`, so it got blocked.

Fix: add \`github-actions-*\` to the resource list. Took a few failed runs to land on it.

Same issue with OIDC. \`iam:GetOpenIDConnectProvider\` was in the policy but scoped to \`arn:aws:iam::...:role/portfolio-*\`. An OIDC provider ARN is completely different, so it needed its own statement pointing to \`arn:aws:iam::...:oidc-provider/*\`.

## Importing Into State

Once unblocked, I imported the resources so Terraform would fully manage them.

Same process for each:

1. Write the resource block in \`.tf\`
2. \`terraform import\` to register it in state
3. \`terraform plan\` to confirm no destructive changes

Used \`aws_iam_policy_document\` instead of raw JSON. Validates at plan time, no hardcoded ARNs.

\`\`\`hcl
data "aws_iam_policy_document" "github_actions_terraform_policy" {
  statement {
    sid     = "OIDC"
    effect  = "Allow"
    actions = ["iam:GetOpenIDConnectProvider", "..."]
    resources = ["arn:aws:iam::<account-id>:oidc-provider/*"]
  }
}

resource "aws_iam_policy" "github_actions_terraform_policy" {
  name   = "github-actions-terraform-policy"
  policy = data.aws_iam_policy_document.github_actions_terraform_policy.json
}
\`\`\`

Import commands:

\`\`\`bash
terraform import aws_iam_role.github_actions_terraform_role github-actions-terraform-role
terraform import aws_iam_policy.github_actions_terraform_policy arn:aws:iam::<account-id>:policy/github-actions-terraform-policy
terraform import aws_iam_role_policy_attachment.github_actions_terraform_policy_attachment \\
  github-actions-terraform-role/arn:aws:iam::<account-id>:policy/github-actions-terraform-policy
\`\`\`

Attachment format is \`role-name/policy-arn\` with a literal slash.

## Permission Gaps

First apply hit more \`AccessDenied\` errors:

- \`iam:TagPolicy\` - Terraform tags everything it manages, policies included
- \`iam:GetPolicy\` - needed during plan
- \`ec2:DescribeAccountAttributes\`, \`ec2:DescribeVpcAttribute\` - AWS provider init
- \`s3:GetEncryptionConfiguration\`, \`s3:GetBucketPublicAccessBlock\` - S3 state refresh
- \`ssm:DescribeMaintenanceWindows\` - maintenance window refresh

Each one: manual console fix, then update \`main.tf\`. When scoping IAM for Terraform, CRUD isn't enough. It also reads tags, describes metadata, enumerates resources.

## End State

Terraform fully manages \`github-actions-terraform-role\`, \`github-actions-terraform-policy\`, and the attachment.

No manual console changes. \`terraform plan\` is clean. Pipeline is green.`,
  },
]