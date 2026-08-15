import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

const blocks = [
  { ico: 'fileText', title: 'Script Engine', text: 'Paste long-form scripts and Vidzeo auto-segments them into scenes with natural pacing and beat detection.' },
  { ico: 'mic', title: 'Voiceover Studio', text: 'Lifelike AI narration in 50+ voices and 30+ languages, or record and drop in your own voice track.' },
  { ico: 'film', title: 'Auto B-Roll', text: 'Context-aware stock and AI-generated visuals matched to each line of your script — no manual searching.' },
  { ico: 'type', title: 'Captions & Titles', text: 'Animated, styled subtitles and lower-thirds generated automatically and synced to the audio.' },
  { ico: 'music', title: 'Smart Music', text: 'Royalty-free soundtracks that duck under voiceover and shift with the mood of each scene.' },
  { ico: 'scissors', title: 'One-Click Edits', text: 'Tweak pacing, swap clips, or re-style the whole video from a single control panel.' },
  { ico: 'rocket', title: 'Batch Render', text: 'Queue multiple videos and render them overnight in the background on your machine.' },
  { ico: 'globe', title: 'Direct Publish', text: 'Export to 4K or push straight to YouTube, Vimeo and local drives without leaving the app.' },
  { ico: 'lock', title: 'Runs Locally', text: 'Your scripts and footage stay on your desktop — built for creators who value privacy.' }
]

export default function Features() {
  return (
    <>
      <section className="section page-top">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">Features</div>
            <h2>Everything inside Vidzeo</h2>
            <p>A complete long-form video pipeline that lives on your desktop — from script to publish.</p>
          </div>
          <div className="grid-3">
            {blocks.map((b, i) => (
              <div className={`card reveal reveal-delay-${i % 6}`} key={b.title}>
                <div className="ico"><Icon name={b.ico} size={24} /></div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="cta-band reveal">
            <h2>See Vidzeo in action</h2>
            <p>Download free and experience the full pipeline on your own scripts.</p>
            <Link to="/download" className="btn btn-primary">
              <span>Try it Free</span>
              <Icon name="arrowRight" size={16} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}