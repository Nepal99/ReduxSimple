import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAUm1D724oiH4tHgWmT6NiMIhoEtVO914Q';


class App extends Component{
  constructor(props){
    super(props);

    this.state= {
      videos:[],
      selectedVideo: null,
     };
     this.videoSearch('react js');
}
    videoSearch(term) {

          YTSearch({key:API_KEY, term:term},(videos) => {
            this.setState({
              videos:videos,
              selectedVideo:videos[0],
            });
            // this.setState({videos:videos});= this.setState({videos}); In ES6 if the key and value are same we can write the single value
            console.log(videos);
          });


  }
  render(){
  return (
    <div>
      <SearchBar onSearchTermChange={termx => this.videoSearch(termx)} />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
        videos={this.state.videos} />

    </div>
  );
}
};

// Take this components generated HTML and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
