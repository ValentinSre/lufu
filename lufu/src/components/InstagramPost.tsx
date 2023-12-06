// InstagramPost.tsx
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; 
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './InstagramPost.css'; 

import ProfilPic from '../static/images/lufu-dark.png';

interface InstagramPostProps {
  username: string;
  imageUrls: string[];
  caption: string;
  location?: string; // Nouvelle propriété pour la localisation (optionnelle)
}

const InstagramPost: React.FC<InstagramPostProps> = ({ username, imageUrls, caption, location }) => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="instagram-post">
      <div className="post-header">
        <img src={ProfilPic} alt="Instagram Logo" className="instagram-logo" />
        <div className="header-content">
          <div className="username">{username}</div>
          {location && <div className="location">{location}</div>}
        </div>
        <div className="more-icon">
          <MoreHorizIcon /> 
        </div>
      </div>
      {imageUrls.length === 1 ? (
        <div className="post-image">
          <img src={imageUrls[0]} alt="Post" />
        </div>
      ) : (
        <div className="post-images-carousel post-image">
          <Slider {...sliderSettings}>
            {imageUrls.map((imageUrl, index) => (
              <div key={index}>
                <img src={imageUrl} alt={`Post ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      )}
      <div className="post-actions">
        <div className="action-icon"><FavoriteIcon /></div>
        <div className="action-icon"><MapsUgcOutlinedIcon /></div>
        <div className="action-icon"><SendOutlinedIcon /></div>
        <div className="action-icon save-icon"><BookmarkBorderIcon /></div>
      </div>
      <div className="post-caption">
        <div className="likes"> 2111 J'aime</div>
        <span className="username-comment">{username}</span>
        <span className="caption">{caption}</span>
      </div>
    </div>
  );
};

export default InstagramPost;
