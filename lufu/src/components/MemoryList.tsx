// MemoryList.tsx (composant avec la date mise en forme et mise en page modifiée)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainFeaturedPost from './MainFeaturedPost';
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
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const mainFeaturedPost = {
    title: 'À nos souvenirs',
    description:
      "Parce que chaque moment passé ensemble est un souvenir inoubliable qui mérite d'être partagé.",
    image: '/static/images/main-picture.jpg',
    imageText: 'main image description',
    linkText: '',
  };

  return (
    <React.Fragment>
      <MainFeaturedPost post={mainFeaturedPost} />
      <div className="memory-list">
        {memories.map((memory, index) => (
          <div key={memory.id} className={`memory-container ${index % 2 === 0 ? 'even' : 'odd'}`} onClick={() => navigate(`/memory/${memory.id}`)}>
            <div className="memory-content">
              <div className="memory-date">
                <div className="date-square">{formatDay(parseDate(memory.date).getDate())}</div>
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
    </React.Fragment>
  );
};

const parseDate = (dateString: string): Date => {
  const [month, day, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};

const formatDay = (day: number): string => {
  return day.toString().padStart(2, '0');
};

const formatDate = (dateString: string): string => {
  const date = parseDate(dateString);
  const monthAbbreviation = date.toLocaleString('default', { month: 'short' });

  const month = monthAbbreviation.slice(0, 3) + '.';

  const year = date.getFullYear().toString().slice(-2);
  return `${month} ${year}`;
};

export default MemoryList;
