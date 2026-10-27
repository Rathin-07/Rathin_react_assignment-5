import { ArrowDownRight, ArrowRight, Check, Star, Zap } from 'lucide-react';

const GRADIENT_CLASS = 'gradient-text';

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE
          </div>
          <h1>
            Build your stack.<br />
            <span className={GRADIENT_CLASS}>Build your future.</span>
          </h1>
          <p className="hero-description">
            Discover the technologies that power great products. Curate your toolkit, explore new skills, and create your own path as a developer.
          </p>
          <div className="hero-actions">
            <a className="button button-primary button-large" href="#technologies">
              Explore Technologies <ArrowRight size={17} />
            </a>
            <a className="button button-outline button-large" href="#about">
              Learn More <ArrowDownRight size={17} />
            </a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack">
              <span>JS</span>
              <span>Py</span>
              <span>⚛</span>
              <span>TS</span>
            </div>
            <p>
              <strong>15 technologies</strong>
              <br />
              to kickstart your journey
            </p>
            <span className="proof-divider" />
            <div className="proof-rating">
              <Star size={15} fill="currentColor" /> <strong>4.8/5</strong>
              <small>community rated</small>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Developer workspace illustration">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="floating-chip chip-top">
            <span className="chip-dot dot-pink" /> Clean code, clear mind
          </div>
          <div className="code-window">
            <div className="window-top">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>your-next-project.tsx</span>
              <span className="window-lock">⌘</span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="line-number">01</span>
                <span>
                  <em>const</em> <b>developer</b> = {'{'}
                </span>
              </div>
              <div className="code-line indent">
                <span className="line-number">02</span>
                <span>
                  curiosity: <strong>'always'</strong>,
                </span>
              </div>
              <div className="code-line indent">
                <span className="line-number">03</span>
                <span>skills: [</span>
              </div>
              <div className="code-line indent deeper">
                <span className="line-number">04</span>
                <span>
                  <strong>'React'</strong>, <strong>'TypeScript'</strong>,
                </span>
              </div>
              <div className="code-line indent deeper">
                <span className="line-number">05</span>
                <span>
                  <strong>'Your next idea'</strong>
                </span>
              </div>
              <div className="code-line indent">
                <span className="line-number">06</span>
                <span>],</span>
              </div>
              <div className="code-line">
                <span className="line-number">07</span>
                <span>{'}'};</span>
              </div>
              <div className="code-line code-last">
                <span className="line-number">08</span>
                <span>
                  <em>build</em>(developer);
                  <i className="cursor" />
                </span>
              </div>
            </div>
            <div className="window-footer">
              <span>
                <span className="status-dot" /> All systems ready
              </span>
              <span>UTF-8&nbsp; · &nbsp;TypeScript</span>
            </div>
          </div>

          <div className="floating-card float-react">
            <img src="https://icon.icepanel.io/Technology/svg/React.svg" alt="" />
            <span>
              <strong>React</strong>
              <small>Frontend</small>
            </span>
            <span className="mini-check">
              <Check size={12} />
            </span>
          </div>
          <div className="floating-card float-ts">
            <img src="https://icon.icepanel.io/Technology/svg/TypeScript.svg" alt="" />
            <span>
              <strong>TypeScript</strong>
              <small>Language</small>
            </span>
            <span className="mini-check">
              <Check size={12} />
            </span>
          </div>
          <div className="floating-chip chip-bottom">
            <Zap size={14} fill="currentColor" /> Stack up your skills
          </div>
        </div>
      </div>

      <div className="hero-bottom container">
        <span>TOOLS FOR THE CURIOUS</span>
        <div className="hero-tech-list">
          <span>React</span>
          <b>·</b>
          <span>TypeScript</span>
          <b>·</b>
          <span>Node.js</span>
          <b>·</b>
          <span>PostgreSQL</span>
          <b>·</b>
          <span>Docker</span>
        </div>
        <a href="#technologies">
          Explore all <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}