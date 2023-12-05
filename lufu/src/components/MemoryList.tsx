// MemoryList.tsx (composant avec la date mise en forme et mise en page modifiée)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MemoryList.css';

interface Memory {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface MemoryListProps {
  memories: Memory[];
}

const MemoryList: React.FC<MemoryListProps> = ({ memories }) => {
  const navigate = useNavigate();

  // sort memories by date (most recent first)
  memories.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="memory-list">
      {memories.map((memory, index) => (
        <div key={memory.id} className={`memory-container ${index % 2 === 0 ? 'even' : 'odd'}`} onClick={() => navigate(`/memory/${memory.id}`)}>
          <div className="memory-content">
            <div className="memory-date">
              <div className="date-square">{formatDay(new Date(memory.date).getDate())}</div>
              <div className="date-text">{formatDate(memory.date)}</div>
            </div>
            <div className="memory-text">
              <h3>{memory.title}</h3>
              <p>{memory.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const formatDay = (day: number): string => {
  return day.toString().padStart(2, '0');
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const monthAbbreviation = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear().toString().slice(-2);
  return `${monthAbbreviation} ${year}`;
};

export default MemoryList;
