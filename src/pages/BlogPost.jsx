import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { posts } from '../data/posts'
import './BlogPost.css'

function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <article className="blog-post">
      <div className="terminal-bio blog-post-terminal">
        <div className="terminal-bar">
          <span className="terminal-dot dot-red" />
          <span className="terminal-dot dot-yellow" />
          <span className="terminal-dot dot-green" />
          <span className="terminal-title">agustin@lopezberg: ~/posts</span>
        </div>
        <div className="terminal-body">
          <div className="terminal-line">
            <span className="t-prompt">agustin@lopezberg</span>
            <span className="t-colon">:</span>
            <span className="t-path">~/posts</span>
            <span className="t-shell">$ cat {post.slug}.md</span>
          </div>
          <div className="blog-post-header-meta">
            <span className="blog-post-header-info">
              {post.displayDate}
              {post.tags.map(tag => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
              <span className="blog-readtime">{post.readTime}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="post-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <div className="blog-post-footer">
        <Link to="/blog" className="back-link">← back to blog</Link>
      </div>
    </article>
  )
}

export default BlogPost