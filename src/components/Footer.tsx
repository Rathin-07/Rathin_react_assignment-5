import { Code2, Github } from 'lucide-react';

const GRADIENT_CLASS = 'gradient-text';

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#home" aria-label="Dev Stack home">
      <span className="brand-mark">
        <Code2 size={21} strokeWidth={2.5} />
      </span>
      <span className={GRADIENT_CLASS}>Dev Stack</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Brand footer />
            <p>
              A little clarity for your next big build. Discover the tools, shape your stack, and keep creating.
            </p>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={17} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <span className="twitter-x">𝕏</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <span className="linkedin-in">in</span>
              </a>
            </div>
          </div>
          <div className="footer-link-group">
            <h4>Product</h4>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Build your stack</a>
            <a href="#about">How it works</a>
          </div>
          <div className="footer-link-group">
            <h4>Company</h4>
            <a href="#about">About us</a>
            <a href="#contact">Contact</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              Community
            </a>
          </div>
          <div className="footer-link-group">
            <h4>Legal</h4>
            <a href="#privacy">Privacy policy</a>
            <a href="#terms">Terms of service</a>
            <a href="#cookies">Cookie settings</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dev Stack. Made for builders.</span>
          <div>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <span className="footer-status">
              <i /> All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}