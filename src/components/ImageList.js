import React from 'react';
import './ImageList.css'

class ImageList extends React.Component {
  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image, index) => (
          <img src={image.urls.small} key={index} alt={image.description}/>
        ))}
      </div>
    );
  };
};

export default ImageList;
