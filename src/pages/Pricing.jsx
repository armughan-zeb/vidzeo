import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

const monthlyPlans = [
  {
    name: 'Free',
    price: '$0',
    per: 'forever',
    desc: 'Perfect for trying Vidzeo on personal projects.',
    features: [
      'Up to 5 videos / month',
      '720p exports with watermark',
      'Standard AI voices',
      'Auto captions',
      'Local desktop app'
    ],
    cta: 'Download Free',
    to: '/download'
  },
  {
    name: 'Creator',
    price: '$19',
    per: '/ month',
    desc: 'For solo creators shipping regular long-form content.',
    features: [
      'Unlimited videos',
      '4K exports, no watermark',
      'All 50+ voices & languages',
      'Smart B-roll & music',
      'Batch rendering',
      'Priority render speed'
    ],
    cta: 'Start Creator',
    to: '/download',
    popular: true
  },
  {
    name: 'Studio',
    price: '$49',
    per: '/ month',
    desc: 'For teams and agencies producing at scale.',
    features: [
      'Everything in Creator',
      '5 team seats',
      'Brand kits & templates',
      'API & automation',
      'Commercial license',
      'Dedicated support'
    ],
    cta: 'Go Studio',
    to: '/download'
  }
]

const annualPlans = [
  {
    name: 'Free',
    price: '$0',
    per: 'forever',
    desc: 'Perfect for trying Vidzeo on personal projects.',
    features: [
      'Up to 5 videos / month',
      '720p exports with watermark',
      'Standard AI voices',
      'Auto captions',
      'Local desktop app'
    ],
    cta: 'Download Free',
    to: '/download'
  },
  {
    name: 'Creator',
    price: '$15',
    per: '/ month',
    desc: 'Billed annually at $180. Save $48 per year.',
    features: [
      'Unlimited videos',
      '4K exports, no watermark',
      'All 50+ voices & languages',
      'Smart B-roll & music',
      'Batch rendering',
      'Priority render speed'
    ],
    cta: 'Start Creator',
    to: '/download',
    popular: true
  },
  {
    name: 'Studio',
    price: '$39',
    per: '/ month',
    desc: 'Billed annually at $468. Save $120 per year.',
    features: [
      'Everything in Creator',
      '5 team seats',
      'Brand kits & templates',
      'API & automation',
      'Commercial license',
      'Dedicated support'
    ],
    cta: 'Go Studio',
    to: '/download'
  }
]

const faqs = [
  { q: 'Do I need an internet connection to use Vidzeo?', a: 'The app runs locally on your desktop. Rendering and editing happen on your machine; only voice/asset generation briefly uses the cloud on paid plans.' },
  { q: 'Can I cancel anytime?', a: 'Yes. Plans are month-to-month and you can cancel from your account with no penalty — you keep access until the period ends.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major cards and PayPal via our secure checkout. Invoicing is available on annual Studio plans.' },
  { q: 'Is there a refund policy?', a: 'If you are not satisfied within 14 days of a paid plan, contact support@vidzeo.app for a full refund.' },
  { q: 'Can I use videos commercially?', a: 'Free plan videos are for personal use. Creator and Studio plans include commercial usage rights.' }
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const plans = annual ? annualPlans : monthlyPlans

  return (
    <section className="section" style={{ paddingTop: 140 }}>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Pricing</div>
          <h2>Simple plans that pay for themselves</h2>
          <p>From free to studio-scale. Every plan includes the full desktop app.</p>
        </div>

        <div className="pricing-toggle reveal">
          <span className={!annual ? 'active' : ''}>Monthly</span>
          <div
            className={`toggle-track ${annual ? 'on' : ''}`}
            onClick={() => setAnnual((v) => !v)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setAnnual((v) => !v)}
          />
          <span className={annual ? 'active' : ''}>Annual</span>
          {annual && <span className="pricing-save">Save 20%</span>}
        </div>

        <div className="plans">
          {plans.map((p, i) => (
            <div className={`plan ${p.popular ? 'popular' : ''} reveal reveal-delay-${i}`} key={p.name}>
              {p.popular && <span className="tag">Most Popular</span>}
              <h3>{p.name}</h3>
              <div className="price">{p.price}<small> {p.per}</small></div>
              <p className="desc">{p.desc}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <span className="check-dot"><Icon name="check" size={12} strokeWidth={3} /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to={p.to} className={`btn ${p.popular ? 'btn-primary' : 'btn-ghost'}`}>
                <span>{p.cta}</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="faq">
          {faqs.map((f, i) => (
            <details className={`reveal reveal-delay-${i % 4}`} key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
