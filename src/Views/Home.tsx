import PropTypes from 'prop-types';
import PlaylistResponse from '../Components/PlaylistResponse';
import { Suspense } from 'react';
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