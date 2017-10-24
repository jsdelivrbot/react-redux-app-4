import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YT_Search from 'youtube-api-search'
import _ from 'lodash'

import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import VideoList from './components/video_list'
const YT_API_KEY = 'AIzaSyB4Xf8CdXuDErD-UUWuDvAZ4U5Yu5u2KE8';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('marvels')
  }

  videoSearch(term){
    YT_Search({key:YT_API_KEY, term:term}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo:videos[2]
      }); 
    });
  }
  render(){
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />,root);