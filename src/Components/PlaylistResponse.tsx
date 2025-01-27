import React from "react";
import { currentToken, getPlaylistData } from "./SpotifyAuth";
import StackedList from "./StackedList";


export default class PlaylistResponse extends React.Component<{}, any> {

  constructor(props) {
    super(props);
  
    this.state = {
      playlistData: [],
    };
  }

  async componentDidMount() {
    if (currentToken.access_token){
      try{
        await getPlaylistData().then(response => {
          this.setState({
            playlistData: response.items
          });
        })
      } catch(error) {
        console.log(error);
      }
    }
  }

  renderPlaylists() {
    try{
      let playlists = new Array(this.state.playlistData.length);
      playlists.push(<StackedList playlist={this.state.playlistData} />);
    return playlists;
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    try{
      return <div>{this.renderPlaylists()}</div>;
    } catch (error) {
      console.log(error);
    }
  }
}
