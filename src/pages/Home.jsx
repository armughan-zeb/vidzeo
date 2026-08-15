import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import HeroMockup from '../components/HeroMockup.jsx'
import CountUp from '../components/CountUp.jsx'

const features = [
  { ico: 'fileText', title: 'Script to Video', text: 'Paste your script and Vidzeo generates a timed, narrated, fully edited video — automatically.' },
  { ico: 'film', title: 'Smart Editing', text: 'Auto cuts, transitions, B-roll, captions and music matched to the tone of your script.' },
  { ico: 'zap', title: 'Hours Saved', text: 'What took a weekend of editing now takes minutes. Focus on ideas, not timelines.' },
  { ico: 'dollar', title: 'Dirt-Cheap Output', text: 'Studio-quality long videos without hiring an editor or renting a render farm.' },
  { ico: 'mic', title: 'Natural Voiceover', text: 'Lifelike AI narration in dozens of languages and voices, or use your own.' },
  { ico: 'upload', title: 'Export Anywhere', text: 'Render in 4K and publish straight to YouTube, Vimeo, or your own drive.' }
]

const steps = [
  { n: 1, t: 'Write or paste a script', d: 'Drop in your text — blog, script, or outline.' },
  { n: 2, t: 'Pick a style', d: 'Choose a template, voice, and pacing.' },
  { n: 3, t: 'Generate', d: 'Vidzeo assembles the full edit in minutes.' },
  { n: 4, t: 'Export & publish', d: 'Download or publish to your platform.' }
]

const testimonials = [
  {
    stars: 5,
    quote: 'I used to spend 8 hours editing one video. Vidzeo cuts that to 20 minutes. It literally changed my content workflow.',
    name: 'Sarah Chen',
    role: 'YouTube Creator · 340K subs',
    initials: 'SC',
    color: 'linear-gradient(135deg, #6C2BD9, #8B5CF6)'
  },
  {
    stars: 5,
    quote: 'The quality of the auto-edit is insane. My viewers can\'t tell it wasn\'t manually edited. Best investment for my channel.',
    name: 'Marcus Rivera',
    role: 'Educator & Podcaster',
    initials: 'MR',
    color: 'linear-gradient(135deg, #0891B2, #00D4FF)'
  },
  {
    stars: 5,
    quote: 'We produce 12 long-form videos a month for clients. Vidzeo handles the heavy lifting so our team focuses on strategy.',
    name: 'Aisha Patel',
    role: 'Head of Content, NovaMedia',
    initials: 'AP',
    color: 'linear-gradient(135deg, #0D9488, #22c55e)'
  }
]

const stats = [
  { value: 90, suffix: '%', decimals: 0, label: 'Less editing time' },
  { value: 4, suffix: 'K', decimals: 0, label: 'Studio-grade export' },
  { value: 50, suffix: '+', decimals: 0, label: 'Voices & languages' },
  { value: 2400, suffix: '+', decimals: 0, label: 'Active creators' }
]

const comparison = [
  { metric: 'Script → finished video', manual: '8–20 hours', vidzeo: '~20 minutes' },
  { metric: 'Cost per video', manual: '$200–$1,000', vidzeo: 'From $0.20' },
  { metric: 'Hire an editor', manual: 'Yes', vidzeo: 'No' },
  { metric: 'Iterate on a new version', manual: 'Days', vidzeo: 'Minutes' }
]

const trustNames = ['YouTube', 'TikTok', 'Vimeo', 'Notion', 'Figma', 'Spotify']

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-badge">
              <span className="dot" />
              <span className="hero-badge-icon"><Icon name="sparkles" size={13} strokeWidth={2.2} /></span>
              Now available for Windows, Mac &amp; Linux
            </div>
            <h1>
              Turn any script into a <span className="gradient-text">fully edited video</span>.
            </h1>
            <p className="lead">
              Vidzeo is a desktop app that builds long-form videos from your script —
              ready to publish, with zero editing grunt work. Save hours and
              dollars on every video you ship.
            </p>
            <div className="hero-actions">
              <Link to="/download" className="btn btn-primary">
                <span>Download for Free</span>
                <Icon name="download" size={16} strokeWidth={2.2} />
              </Link>
              <Link to="/features" className="btn btn-secondary">
                See how it works
                <Icon name="arrowRight" size={16} strokeWidth={2} />
              </Link>
            </div>
            <div className="hero-social-proof">
              <div className="avatar-stack">
                <span style={{ background: 'linear-gradient(135deg, #6C2BD9, #8B5CF6)' }}>S</span>
                <span style={{ background: 'linear-gradient(135deg, #0891B2, #00D4FF)' }}>M</span>
                <span style={{ background: 'linear-gradient(135deg, #0D9488, #22c55e)' }}>A</span>
                <span style={{ background: 'linear-gradient(135deg, #D97706, #f59e0b)' }}>J</span>
                <span style={{ background: 'linear-gradient(135deg, #DB2777, #ec4899)' }}>K</span>
              </div>
              <div className="proof-text">
                <strong>2,400+</strong> creators already shipping faster
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-glow" />
            <HeroMockup />
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container">
          <div className="trust-bar-inner">
            <span className="label">Creators publish to</span>
            <div className="trust-logos">
              {trustNames.map((n) => <span key={n}>{n}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">Why Vidzeo</div>
            <h2>Everything you need to ship long videos — minus the effort</h2>
            <p>From raw script to polished publish-ready video, all on your desktop.</p>
          </div>
          <div className="grid-3">
            {features.map((f, i) => (
              <div className={`card reveal reveal-delay-${i % 6}`} key={f.title}>
                <div className="ico"><Icon name={f.ico} size={24} /></div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">How it works</div>
            <h2>From blank page to published in 4 steps</h2>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <div className={`step reveal reveal-delay-${i}`} key={s.n}>
                <div className="num">{s.n}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">The difference</div>
            <h2>Vidzeo vs. traditional editing</h2>
            <p>See why creators are switching.</p>
          </div>
          <div className="compare reveal">
            <div className="compare-head">
              <div className="compare-metric">What you get</div>
              <div className="compare-col manual"><Icon name="clock" size={15} /> Manual editing</div>
              <div className="compare-col vidzeo">
                <Icon name="sparkles" size={15} strokeWidth={2.2} /> Vidzeo
              </div>
            </div>
            {comparison.map((row) => (
              <div className="compare-row" key={row.metric}>
                <div className="compare-metric">{row.metric}</div>
                <div className="compare-col manual">{row.manual}</div>
                <div className="compare-col vidzeo">
                  <span className="check-dot"><Icon name="check" size={12} strokeWidth={3} /></span>
                  {row.vidzeo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div className={`stat-block reveal reveal-delay-${i % 4}`} key={s.label}>
                <div className="stat-value">
                  <CountUp end={s.value} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">Testimonials</div>
            <h2>Loved by creators worldwide</h2>
            <p>See what people are saying after switching to Vidzeo.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className={`testimonial-card reveal reveal-delay-${i}`} key={t.name}>
                <div className="stars">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="quote">"{t.quote}"</p>
                <div className="author">
                  <div className="avatar" style={{ background: t.color }}>{t.initials}</div>
                  <div className="author-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="cta-band reveal">
            <h2>Start creating videos in minutes</h2>
            <p>Download Vidzeo free and turn your next script into a finished video today.</p>
            <Link to="/download" className="btn btn-primary">
              <span>Get Vidzeo Free</span>
              <Icon name="arrowRight" size={16} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}