import { ArrowRight, Code2, X } from 'lucide-react';
import type { Technology } from '../types/technology';

type YourStackProps = {
  stack: Technology[];
  onRemoveFromStack: (technology: Technology) => void;
  onRemoveAll: () => void;
};

export function YourStack({ stack, onRemoveFromStack, onRemoveAll }: YourStackProps) {
  return (
    <aside className="stack-panel" aria-label="Your selected technology stack">
      <div className="stack-panel-heading">
        <div>
          <div className="stack-icon">
            <Code2 size={19} />
          </div>
          <h3>Your Stack</h3>
          <p>Your personal developer toolkit.</p>
        </div>
        <span className="stack-count">{stack.length.toString().padStart(2, '0')}</span>
      </div>

      <div className="stack-progress">
        <span style={{ width: `${Math.min((stack.length / 8) * 100, 100)}%` }} />
      </div>

      <div className="stack-count-label">
        {stack.length} {stack.length === 1 ? 'technology' : 'technologies'} selected <span>·</span> goal: 8
      </div>

      {stack.length === 0 ? (
        <div className="stack-empty">
          <div className="empty-illustration">
            <Code2 size={30} />
            <span>+</span>
          </div>
          <h4>Your stack is empty</h4>
          <p>Every great project starts with the right tools. Add a technology to get started.</p>
          <a href="#technologies">
            Explore technologies <ArrowRight size={14} />
          </a>
        </div>
      ) : (
        <div className="stack-list">
          {stack.map((technology, index) => (
            <div className="stack-item" key={technology.id}>
              <span className="stack-index">{String(index + 1).padStart(2, '0')}</span>
              <img
                src={technology.icon}
                alt=""
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
              <div className="stack-item-info">
                <strong>{technology.name}</strong>
                <span>{technology.category}</span>
              </div>
              <button
                className="remove-item"
                onClick={() => onRemoveFromStack(technology)}
                aria-label={`Remove ${technology.name}`}
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="stack-panel-footer">
        {stack.length > 0 ? (
          <button className="clear-stack" onClick={onRemoveAll}>
            Remove All <X size={14} />
          </button>
        ) : (
          <span>
            <span className="status-dot" /> Ready when you are
          </span>
        )}
        <span>{stack.length} / 8</span>
      </div>
    </aside>
  );
}