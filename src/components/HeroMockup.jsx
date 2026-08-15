import Icon from './Icon.jsx'

export default function HeroMockup() {
  return (
    <div className="mock">
      <div className="mock-titlebar">
        <div className="mock-dots">
          <span /><span /><span />
        </div>
        <span className="mock-appname">
          <Icon name="film" size={13} strokeWidth={2} />
          Vidzeo — Script Render
        </span>
        <span className="mock-controls">— □ ✕</span>
      </div>

      <div className="mock-body">
        <div className="mock-preview">
          <div className="mock-preview-grad" />
          <div className="mock-preview-content">
            <span className="mock-play">
              <Icon name="play" size={20} strokeWidth={2.2} />
            </span>
          </div>
          <div className="mock-caption">
            <span>“How AI is reshaping video creation”</span>
          </div>
          <div className="mock-progress">
            <div className="mock-progress-fill" />
          </div>
        </div>

        <div className="mock-sidebar">
          <div className="mock-side-head">
            <Icon name="fileText" size={13} strokeWidth={2} />
            Script
          </div>
          <div className="mock-script">
            <div className="mock-script-line full" />
            <div className="mock-script-line long" />
            <div className="mock-script-line long" />
            <div className="mock-script-line medium" />
            <div className="mock-script-line long" />
            <div className="mock-script-line medium" />
          </div>
          <div className="mock-voice">
            <div className="mock-voice-track">
              <div className="mock-voice-bar h1" />
              <div className="mock-voice-bar h2" />
              <div className="mock-voice-bar h3" />
              <div className="mock-voice-bar h2" />
              <div className="mock-voice-bar h1" />
              <div className="mock-voice-bar h3" />
              <div className="mock-voice-bar h2" />
            </div>
            <span>VO · Maya — Natural</span>
          </div>
        </div>
      </div>

      <div className="mock-timeline">
        <div className="mock-ruler">
          <span>00:00</span><span>02:30</span><span>05:00</span><span>07:30</span><span>10:00</span><span>12:30</span>
        </div>
        <div className="mock-track">
          <div className="mock-clip c1" style={{ width: '22%' }}>B-Roll</div>
          <div className="mock-clip c2" style={{ width: '30%' }}>Narration</div>
          <div className="mock-clip c3" style={{ width: '26%' }}>Interview</div>
          <div className="mock-clip c4" style={{ width: '18%' }}>Outro</div>
          <div className="mock-playhead" />
        </div>
        <div className="mock-track slim">
          <div className="mock-clip c5" style={{ width: '40%' }} />
          <div className="mock-clip c6" style={{ width: '34%' }} />
        </div>
      </div>

      <div className="mock-status">
        <div className="mock-status-left">
          <span className="mock-pill ok"><span className="mock-check"><Icon name="check" size={11} strokeWidth={3} /></span> Edit complete · 12:30</span>
          <span className="mock-pill">Captions</span>
          <span className="mock-pill">B-Roll</span>
          <span className="mock-pill">Music</span>
        </div>
        <div className="mock-status-right">
          <span>4K UHD</span>
          <span className="mock-export">
            <Icon name="upload" size={13} strokeWidth={2.2} />
            Export
          </span>
        </div>
      </div>
    </div>
  )
}