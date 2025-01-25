import React from "react";
import { currentToken } from "./SpotifyAuth";
import Playlist from "./Playlist";


export default class PlaylistResponse extends React.Component<{}, any> {

  constructor(props) {
    super(props);
  
    this.state = {
      playlistData: [],
    };

    this.getPlaylistData = this.getPlaylistData.bind(this);

  }


  async getPlaylistData(currentToken) {
    const response = await fetch("https://api.spotify.com/v1/me/playlists", {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + currentToken.access_token },
    });
    
    return await response.json();
  }

  ParseResponse(playlistResponse) {
    playlistResponse.items!.forEach(this.ParsePlaylists);
  }

  ParsePlaylists(playlists) {
    let count = 0;
    this.temp[count] = {name: playlists.name, url: playlists.images[0].url};
    console.log(this.temp[count]);
    count++;
  }

  async componentDidMount() {
    try{
      await this.getPlaylistData(currentToken).then(response => {
        this.setState({
          playlistData: response.items
        });
      })
  
      console.log("mount" + this.state.playlistData.toString);
      console.log(this.state.playlistData.length);
    } catch(error) {
      console.log(error);
    }
    
    //this.temp = new Array(data.total);
    //this.ParseResponse(data);
    //data.items.forEach(this.ParseResponse);
    //this.setState({playlistData: data.items});
  }

  renderPlaylists() {
    try{
      let playlists = new Array(this.state.playlistData.length);
      console.log("render" + this.state.playlistData.length);
    this.state.playlistData.forEach((ele,) => {
      playlists.push(<Playlist name={ele.name} url={ele.images[0].url} key={ele.id}/>);
    })
    console.log("ray"+ playlists.toString);
    return playlists;
    } catch (error) {
      console.log(error);
    }
    
  }

  render() {
    return <div>{this.renderPlaylists()}</div>;
  }
}
