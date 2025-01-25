import PropTypes from 'prop-types';
import RenderComponent from '../Components/SpotifyAuth';
import SpotifyResponse from '../Components/PlaylistResponse';
import PlaylistResponse from '../Components/PlaylistResponse';
import { Suspense } from 'react';
import ParsePlaylists from '../Components/SpotifyAuth';
import Login from './Login';

export default function Home(props) {
    return (
        <>
        <div>
            Callback
        </div>
        <Suspense fallback={<Login />}>
        <PlaylistResponse>hello</PlaylistResponse>
        </Suspense>
        
        
        
        </>
        
    )
  }