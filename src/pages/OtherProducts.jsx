import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

const products = [
  { ico: 'headphones', name: 'Vidzeo Voice', text: 'Standalone AI voiceover studio. Generate natural narration in 50+ voices and 30+ languages, then export clean audio for any project.' },
  { ico: 'scissors', name: 'Vidzeo Clips', text: 'Turn one long video into dozens of social-ready short clips with auto-captions and smart cropping — built for TikTok, Reels and Shorts.' },
  { ico: 'image', name: 'Vidzeo Assets', text: 'A curated, royalty-free library of B-roll, music and sound effects tuned to drop straight into Vidzeo edits.' },
  { ico: 'barChart', name: 'Vidzeo Analytics', text: 'Track which of your long videos drive watch-time and conversions, with privacy-first, on-device reporting.' }
]

const services = [
  { ico: 'users', title: 'Done-For-You Productions', text: 'Our team turns your scripts into finished videos at scale — ideal for agencies and brands.' },
  { ico: 'graduationCap', title: 'Creator Onboarding', text: '1:1 setup and workflow coaching so your team gets to publish-ready videos fast.' },
  { ico: 'sliders', title: 'Custom Builds', text: 'Bespoke templates, brand kits, and API integrations for studios with unique pipelines.' }
]

export default function OtherProducts() {
  return (
    <>
      <section className="section page-top">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">Our Ecosystem</div>
            <h2>Other Products by Vidzeo</h2>
            <p>Tools that extend the Vidzeo workflow across your whole content stack.</p>
          </div>
          <div className="grid-2">
            {products.map((p, i) => (
              <div className={`card prod-card reveal reveal-delay-${i}`} key={p.name}>
                <div className="pico"><Icon name={p.ico} size={28} /></div>
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">Services</div>
            <h2>We also help you produce</h2>
            <p>Beyond software — hands-on services for teams that need to scale output.</p>
          </div>
          <div className="grid-3">
            {services.map((s, i) => (
              <div className={`card reveal reveal-delay-${i}`} key={s.title}>
                <div className="ico"><Icon name={s.ico} size={24} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/download" className="btn btn-primary">
              <span>Try Vidzeo Free</span>
              <Icon name="arrowRight" size={16} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}