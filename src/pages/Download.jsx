import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

const platforms = [
  { ico: 'windows', os: 'Windows', meta: 'Windows 10 / 11 · 64-bit', btn: 'Download .exe', size: '148 MB', version: 'v1.4.2' },
  { ico: 'apple', os: 'macOS', meta: 'macOS 12+ · Apple & Intel', btn: 'Download .dmg', size: '162 MB', version: 'v1.4.2' },
  { ico: 'linux', os: 'Linux', meta: 'Ubuntu 20.04+ · AppImage', btn: 'Download .AppImage', size: '156 MB', version: 'v1.4.2' }
]

const notes = [
  'Free to download and use for personal projects (watermark on free exports).',
  'No account required to try — sign in only when you upgrade a plan.',
  'Need an older OS or a custom build? Email support@vidzeo.app.'
]

export default function Download() {
  return (
    <section className="section page-top">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Download</div>
          <h2>Get Vidzeo for your desktop</h2>
          <p>Available for Windows, macOS, and Linux. Pick your platform and start creating.</p>
        </div>

        <div className="dl-grid">
          {platforms.map((p, i) => (
            <div className={`card dl-card reveal reveal-delay-${i}`} key={p.os}>
              <div className="os-icon"><Icon name={p.ico} size={34} /></div>
              <h3>{p.os}</h3>
              <div className="meta">{p.meta}</div>
              <a href="#" className="btn btn-primary" download>
                <span>{p.btn}</span>
                <Icon name="download" size={15} strokeWidth={2.2} />
              </a>
              <div className="version-badge">{p.version} · {p.size}</div>
            </div>
          ))}
        </div>

        <div className="prose reveal" style={{ marginTop: 56 }}>
          <h3>Before you install</h3>
          <ul>
            {notes.map((n) => <li key={n}>{n}</li>)}
          </ul>
          <p>
            Already a user? <Link to="/pricing" className="gradient-text" style={{ fontWeight: 600 }}>View plans</Link> to
            unlock watermark-free 4K exports and batch rendering.
          </p>
        </div>
      </div>
    </section>
  )
}