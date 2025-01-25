import React from "react";

const Playlist = ({ name, url, key}) => (
    <div key={key}>
        <span>
            <img src={url}></img>
        </span>
        
        <p>{name}</p>
    </div>
);

export default Playlist