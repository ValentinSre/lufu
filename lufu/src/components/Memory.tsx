// Memory.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import memories from '../texts/global-memories';

import InstagramPost from './InstagramPost';

const Memory: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    if (!id || isNaN(parseInt(id))) {
        window.location.href = '/';
        return null;
    }

    const memory = memories.find((memory) => memory.id === parseInt(id));

    if (!memory) {
        window.location.href = '/';
        return null;
    }

  return (
    <InstagramPost username='lufu' imageUrls={memory.imageUrls} caption={memory.caption} location={memory.location} hashtags={memory.hashtags}/>
  );
};

export default Memory;
