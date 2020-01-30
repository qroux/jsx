import React from 'react';

//config
import unsplash from '../api/unsplash';

// components
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// create functionnal component
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h5>{this.state.images.length} results found</h5>
        <ImageList images={this.state.images} />
      </div>
    );
  };
};

export default App;
