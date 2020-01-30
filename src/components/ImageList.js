import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard.js'

class ImageList extends React.Component {
  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image) => (
          <ImageCard image={image} key={image.id} />
        ))}
      </div>
    );
  };
};

export default ImageList;
