import React from "react";
import { currentToken } from "./SpotifyAuth";
import StackedList from "./StackedList";


export default class PlaylistResponse extends React.Component<{}, any> {

  constructor(props) {
    super(props);
  
    this.state = {
      playlistData: [],
    };

    this.getPlaylistData = this.getPlaylistData.bind(this);

  }


  async getPlaylistData(currentToken) {
    if (currentToken.access_token!= null){
      const response = await fetch("https://api.spotify.com/v1/me/playlists", {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + currentToken.access_token },
      });
      
      return await response.json();
    }
    
  }

  async componentDidMount() {
    if (currentToken.access_token!= null){
      try{
        await this.getPlaylistData(currentToken).then(response => {
          this.setState({
            playlistData: response.items
          });
        })
      } catch(error) {
        console.log(error);
      }
    } else {
      console.log("no token");
    }

  }

  renderPlaylists() {
    if (currentToken.access_token!= null){
      try{
        let playlists = new Array(this.state.playlistData.length);
        playlists.push(<StackedList playlist={this.state.playlistData} />);
        return playlists;
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("no token");
    }
    
    
  }

  render() {
    return <div>{this.renderPlaylists()}</div>;
  }
}
