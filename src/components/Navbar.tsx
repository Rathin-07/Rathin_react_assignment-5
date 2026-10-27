import { useState } from 'react';
import { ArrowRight, Code2, Menu, X } from 'lucide-react';

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

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-wrap container">
        <button
          className="mobile-menu-toggle icon-button"
          aria-label="Open navigation menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Brand />

        <nav className={`main-nav ${mobileMenuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {[
            ['Home', '#home'],
            ['Technologies', '#technologies'],
            ['Projects', '#projects'],
            ['About', '#about'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <div className="mobile-auth">
            <a href="#contact" onClick={closeMenu}>
              Sign in
            </a>
            <a className="button button-primary" href="#technologies" onClick={closeMenu}>
              Sign up <ArrowRight size={15} />
            </a>
          </div>
        </nav>

        <div className="desktop-auth">
          <a className="signin-link" href="#contact">
            Sign In
          </a>
          <a className="button button-primary nav-signup" href="#technologies">
            Sign Up <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}