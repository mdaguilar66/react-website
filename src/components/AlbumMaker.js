import React from "react";
import PhotoEntry from "./PhotoEntry";
import './master.css';

class AlbumMaker extends React.Component {
    render() {
        return (
            <div className="album-maker">
                <PhotoEntry src="red-living-room.jpeg" caption="A funky red living room" location="London UK" />
                <PhotoEntry src="red-living-room.jpeg" caption="A funky red living room" location="London UK" />
                <PhotoEntry src="red-living-room.jpeg" caption="A funky red living room" location="London UK" />
                <PhotoEntry src="red-living-room.jpeg" caption="A funky red living room" location="London UK" />
                <PhotoEntry src="red-living-room.jpeg" caption="A funky red living room" location="London UK" />
                <PhotoEntry src="red-living-room.jpeg" caption="A funky red living room" location="London UK" />
                <PhotoEntry src="red-living-room.jpeg" caption="A funky red living room" location="London UK" />
            </div>
        )
    }
}

export default AlbumMaker
