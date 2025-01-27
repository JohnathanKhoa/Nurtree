import React from "react";

const Playlist = ({ name, url, key}) => (
    <div key={key}>
        <span>
            <img src={url}></img>
        </span>
        
        <span>{name}</span>
    </div>
);

export default Playlist