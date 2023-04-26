import React, { useState } from 'react';

interface CollapsibleButtonProps {
  title: string;
  children: React.ReactNode;
}

const buttonStyle = {
  color: 'rgb(180, 180, 180)',
  cursor: 'pointer',
  padding: '18px',
  width: '100%',
  border: 'none',
  textAlign: 'center' as const, // Explicitly set TextAlign type
  outline: 'none',
  fontSize: '15px',
};

function CollapsibleButton({ title, children }: CollapsibleButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="collapsible-button">
      <button
        className={`button ${isExpanded ? 'active' : ''}`}
        onClick={toggleExpand}
        style={buttonStyle}
      >
        {title}
      </button>
      {isExpanded && <div className="content">{children}</div>}
    </div>
  );
}

export default CollapsibleButton;