import { ArrowRight, Check, Star } from 'lucide-react';
import { Technology } from '../types/technology';

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAddToStack: (technology: Technology) => void;
};

export function TechnologyCard({ technology, isAdded, onAddToStack }: TechnologyCardProps) {
  return (
    <article className="technology-card">
      <div className="card-top">
        <div className="technology-icon">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <span className="tech-badge">{technology.badge}</span>
      </div>
      <div className="card-title-row">
        <h3>{technology.name}</h3>
        <span className="rating">
          <Star size={14} fill="currentColor" /> {technology.rating.toFixed(1)}
        </span>
      </div>
      <p className="card-description">{technology.description}</p>
      <div className="card-meta">
        <span className={`category-chip chip-${technology.category.toLowerCase()}`}>
          {technology.category}
        </span>
        <span className={`difficulty difficulty-${technology.difficulty.toLowerCase().replaceAll('-', '')}`}>
          {technology.difficulty}
        </span>
      </div>
      <button
        className={`add-button ${isAdded ? 'added' : ''}`}
        disabled={isAdded}
        onClick={() => onAddToStack(technology)}
      >
        {isAdded ? (
          <>
            <Check size={16} /> Added to Stack
          </>
        ) : (
          <>
            Add to Stack <ArrowRight size={15} />
          </>
        )}
      </button>
    </article>
  );
}