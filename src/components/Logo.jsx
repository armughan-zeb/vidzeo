import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  const color = light ? '#fff' : 'var(--text)'
  return (
    <Link to="/" className="nav-logo" aria-label="Vidzeo home">
      <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6C2BD9" />
            <stop offset="1" stopColor="#00D4FF" />
          </linearGradient>
        </defs>
        <rect x="6" y="6" width="52" height="52" rx="14" fill="url(#logoGrad)" />
        <path d="M26 22 L44 32 L26 42 Z" fill="#fff" />
      </svg>
      <span style={{ color }}>Vidzeo</span>
    </Link>
  )
}
