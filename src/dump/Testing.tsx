import playLists from './UserProfile';
import playListResponse from './UserProfile'

{/*
export default function Test(props) {
    return(
        <h2>Test</h2>
    );
}*/}

function Testing<T extends SpotifyResponse>(props: PropsType<T>) {
    return(
        <>
            <ul>
                {props.items.map((item) => {
                    return <li key={item.href}>{props.renderer(item)}</li>;
                })}
            </ul>
        </>
    );
}

let testing: { id:number, name:string }[] = [
    { "id": 0, "name": "hi" },
    { "id": 1, "name": "Ready" }
];
const testingitems = testing.map((item) => 
    <><li>{item.id}</li><li>{item.name}</li></>
);

export default function Test() {
    return (
        <div>
            <span>
                {testingitems}
            </span>
        </div>
    );
}

{/*
export default function ParseResponse(playlistResponse: SpotifyResponse) {
    const playlists = playlistResponse.items.map((item) => 
        <>
            <li>{item.images[0].url}</li>
            <li>{item.name}</li>
        </>
    )
    return (
        <>
        <div>
            <span>
                {playlists}
            </span>
        </div>
        </>
    )
    //playlistResponse.items.forEach(ParsePlaylists);
}
    */}