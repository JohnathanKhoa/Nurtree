import { Suspense } from "react";
import PlaylistResponse from "../Components/PlaylistResponse";
import Login from "./Login";

export default function Playlists(props) {
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