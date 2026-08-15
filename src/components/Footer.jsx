import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'

const socials = [
  { name: 'YouTube', icon: 'youtube', href: '#' },
  { name: 'X / Twitter', icon: 'twitter', href: '#' },
  { name: 'Discord', icon: 'discord', href: '#' },
  { name: 'LinkedIn', icon: 'linkedin', href: '#' }
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand"><Logo light /></div>
            <p className="about">
              Vidzeo turns any script into a fully edited long-form video — saving
              creators hours of editing time at a fraction of the cost.
            </p>
            <div className="footer-newsletter">
              <p>Stay in the loop — get product updates and tips.</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="you@email.com" aria-label="Email for newsletter" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div>
            <h4>Product</h4>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/download">Download</Link>
            <Link to="/products">Other Products</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/products">Services</Link>
            <a href="mailto:hello@vidzeo.app">Contact</a>
            <a href="mailto:support@vidzeo.app">Support</a>
          </div>
          <div>
            <h4>Connect</h4>
            <div className="footer-socials">
              {socials.map((s) => (
                <a key={s.name} href={s.href} aria-label={s.name} className="social-link">
                  <Icon name={s.icon} size={18} />
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Vidzeo. All rights reserved.</span>
          <span>Built for creators who ship.</span>
        </div>
      </div>
    </footer>
  )
}