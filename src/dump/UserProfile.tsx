// Because this is a literal single page application
// we detect a callback from Spotify by checking for the hash fragment

import { redirectToAuthCodeFlow, getAccessToken } from "./Pkce";

const clientId = "1e417f950c154b3f9a6e29334fbc3fdf";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    populateUI(profile);
    const playlistResponse = await fetchPlaylists(accessToken);
    ParseResponse(playlistResponse);
}

async function logoutClick() {
    localStorage.clear();
    window.location.href = redirectUrl;
  }

async function fetchProfile(code: string): Promise<UserProfile> {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${code}` }
    });

    return await result.json();
}

async function fetchPlaylists(code: string): Promise<SpotifyResponse> {
    const result = await fetch("https://api.spotify.com/v1/me/playlists", {
        method: "GET", headers: { Authorization: `Bearer ${code}` }
    });

    return await result.json();
}

function populateUI(profile: UserProfile) {
    document.getElementById("displayName")!.innerText = profile.display_name;
    document.getElementById("avatar")!.setAttribute("src", profile.images[0].url)
    document.getElementById("id")!.innerText = profile.id;
    document.getElementById("email")!.innerText = profile.email;
    document.getElementById("uri")!.innerText = profile.uri;
    document.getElementById("uri")!.setAttribute("href", profile.external_urls.spotify);
    document.getElementById("url")!.innerText = profile.href;
    document.getElementById("url")!.setAttribute("href", profile.href);
    document.getElementById("imgUrl")!.innerText = profile.images[0].url;
}
interface Playlist {
    key: number
    name: string;
    url: string;
}



    function ParsePlaylists(playLists: SpotifyShow) {
    document.getElementById("name")!.innerText = playLists.name;
    document.getElementById("img")!.setAttribute("src", playLists.images[0].url);
    playlists[count] = {name: playLists.name, url: playLists.images[0].url};
    console.log(playlists[count]);
    count++;
    const DisplayPlaylist = playlists.map((item) => 
        <>
            <li>{item.name}</li>
            <li>{item.url}</li>
        </>
        )
        return (
            <>
            <div>
                <span>
                    {DisplayPlaylist}
                </span>
            </div>
            </>
        )
}


function ParseResponse(playlistResponse: SpotifyResponse) {
    const playlists:Playlist[] = new Array(playlistResponse.total);

    playlistResponse.items!.forEach((item, i) => 
        playlists[i] = { key: i, name: item.name, url: item.images[0].url }
    );

    console.log(playlists.toString);
    
    {/*
    const DisplayPlaylist = playlists.map((item, i) => 
        <>
            <li key={item.key}>{item.name}</li>
            <li key= {item.key}>{item.url}</li>
        </>
        )
        return (
            
            <>
                {DisplayPlaylist}
            </>
        )
    */}        
}



