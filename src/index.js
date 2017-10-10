import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyAUm1D724oiH4tHgWmT6NiMIhoEtVO914Q';

const App =function(){
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this components generated HTML and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));