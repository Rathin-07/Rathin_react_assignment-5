import { Search, X } from 'lucide-react';
import { categories, CategoryFilter, Technology } from '../types/technology';
import { TechnologyCard } from './TechnologyCard';

type TechnologyListProps = {
  technologies: Technology[];
  filteredTechnologies: Technology[];
  stack: Technology[];
  loading: boolean;
  category: CategoryFilter;
  search: string;
  onCategoryChange: (category: CategoryFilter) => void;
  onSearchChange: (search: string) => void;
  onAddToStack: (technology: Technology) => void;
};

export function TechnologyList({
  technologies,
  filteredTechnologies,
  stack,
  loading,
  category,
  search,
  onCategoryChange,
  onSearchChange,
  onAddToStack,
}: TechnologyListProps) {
  return (
    <div className="technology-area">
      <div className="toolbar">
        <div className="category-tabs" role="group" aria-label="Filter technologies by category">
          {categories.map((item) => (
            <button
              key={item}
              className={`category-tab ${category === item ? 'active' : ''}`}
              onClick={() => onCategoryChange(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="search-box">
          <Search size={16} />
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search technologies..."
            aria-label="Search technologies"
          />
          {search && (
            <button aria-label="Clear search" onClick={() => onSearchChange('')}>
              <X size={14} />
            </button>
          )}
        </label>
      </div>

      {loading ? (
        <div className="loading-state">
          <span className="spinner" />
          <strong>Loading your toolkit...</strong>
          <p>Gathering the good stuff.</p>
        </div>
      ) : filteredTechnologies.length === 0 ? (
        <div className="no-results">
          <Search size={25} />
          <h3>No technologies found</h3>
          <p>Try another search or category.</p>
          <button
            className="button button-outline"
            onClick={() => {
              onSearchChange('');
              onCategoryChange('All');
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="technology-grid">
          {filteredTechnologies.map((technology) => {
            const isAdded = stack.some((item) => item.id === technology.id);
            return (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={isAdded}
                onAddToStack={onAddToStack}
              />
            );
          })}
        </div>
      )}

      {!loading && (
        <div className="results-note">
          Showing <strong>{filteredTechnologies.length}</strong> of {technologies.length} technologies
        </div>
      )}
    </div>
  );
}