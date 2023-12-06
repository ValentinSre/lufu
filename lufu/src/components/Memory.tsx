// Memory.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

import InstagramPost from './InstagramPost';

import image from '../static/images/main-picture.jpg';

const Memory: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const postData = [
    {
      username: 'john_doe',
      imageUrl: image,
      caption: 'Un superbe coucher de soleil. Tout va bien sous le soleil du paradis et les oiseaux chantent rigoureusement... ce qui ne veut pas dire grand chose, mais au moins, le coucher de soleil est superbe. 🌅',
      location: 'Paris, France'
    }
    ];
  return (
    // <div>
    //   <h2>Détails du souvenir</h2>
    //   <div>Numéro de l'ID : {id}</div>
    // </div>
    <InstagramPost username='lufu' imageUrls={[postData[0].imageUrl, postData[0].imageUrl]} caption={postData[0].caption} location={postData[0].location} />
  );
};

export default Memory;
