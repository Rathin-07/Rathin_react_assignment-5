'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Check, Zap } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechnologyList } from './components/TechnologyList';
import { YourStack } from './components/YourStack';
import { Footer } from './components/Footer';

import type { CategoryFilter, Technology } from './types/technology';

const GRADIENT_CLASS = 'gradient-text';

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<CategoryFilter>('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch('/data/technologies.json');
        if (!response.ok) throw new Error('Could not load technology data.');
        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch {
        toast.error('Could not load technologies. Please refresh the page.');
      } finally {
        setLoading(false);
      }
    };
    void loadTechnologies();
  }, []);

  const filteredTechnologies = useMemo(() => {
    return technologies.filter((technology) => {
      const matchesCategory = category === 'All' || technology.category === category;
      const term = search.trim().toLowerCase();
      const matchesSearch =
        !term ||
        `${technology.name} ${technology.description} ${technology.category}`
          .toLowerCase()
          .includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [technologies, category, search]);

  const addToStack = (technology: Technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }
    setStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const removeFromStack = (technology: Technology) => {
    setStack((current) => current.filter((item) => item.id !== technology.id));
    toast.info(`${technology.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info('Your stack has been cleared.');
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero technologyCount={technologies.length} />

        <section className="tech-section section-pad" id="technologies">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <div className="eyebrow section-eyebrow">THE DEVELOPER TOOLKIT</div>
                <h2>
                  Find your <span className={GRADIENT_CLASS}>next favorite.</span>
                </h2>
                <p className="section-subtitle">
                  A handpicked collection of technologies to help turn your ideas into reality.
                </p>
              </div>
              <div className="tech-count">
                <strong>{technologies.length.toString().padStart(2, '0')}</strong>
                <span>
                  technologies
                  <br />
                  and counting
                </span>
              </div>
            </div>

            <div className="workspace-layout">
              <TechnologyList
                technologies={technologies}
                filteredTechnologies={filteredTechnologies}
                stack={stack}
                loading={loading}
                category={category}
                search={search}
                onCategoryChange={setCategory}
                onSearchChange={setSearch}
                onAddToStack={addToStack}
              />
              <YourStack
                stack={stack}
                onRemoveFromStack={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>
          </div>
        </section>

        <section className="build-section" id="projects">
          <div className="container build-banner">
            <div className="build-decoration decor-a" />
            <div className="build-decoration decor-b" />
            <div className="build-copy">
              <div className="eyebrow">MADE FOR YOUR MOMENTUM</div>
              <h2>
                Your ideas deserve
                <br />a <span className={GRADIENT_CLASS}>great stack.</span>
              </h2>
              <p>
                Start small, keep exploring, and build a toolkit that grows with you. Your next big thing is closer than you think.
              </p>
              <a className="button button-primary button-large" href="#technologies">
                Build your stack <ArrowRight size={17} />
              </a>
            </div>
            <div className="build-side">
              <div className="build-stat">
                <span>01</span>
                <div>
                  <strong>Choose your tools</strong>
                  <small>Find the right fit for your project.</small>
                </div>
                <Check size={18} />
              </div>
              <div className="build-stat">
                <span>02</span>
                <div>
                  <strong>Curate your stack</strong>
                  <small>Keep the essentials close.</small>
                </div>
                <Check size={18} />
              </div>
              <div className="build-stat">
                <span>03</span>
                <div>
                  <strong>Make something great</strong>
                  <small>Turn learning into momentum.</small>
                </div>
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </section>

        <section className="about-strip" id="about">
          <div className="container about-inner">
            <div className="about-icon">
              <Zap size={22} />
            </div>
            <div>
              <h3>Less overwhelm. More building.</h3>
              <p>Dev Stack helps you discover, compare, and organize the tools behind modern software.</p>
            </div>
            <a href="#technologies">
              Find your tools <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2600}
        theme="dark"
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}