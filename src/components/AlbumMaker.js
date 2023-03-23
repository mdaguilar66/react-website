import React from "react";
import PhotoEntry from "./PhotoEntry";
import './master.css';
import entries from './data/photo-entries';

class AlbumMaker extends React.Component {
    render() {

        console.log(entries)

        return (
            <div className="album-maker">
                {
                    entries.itemList.map((photo) => {
                        return <PhotoEntry key={photo.src} src={photo.src} caption={photo.caption} location={photo.location} />
                    })
                }
            </div>
        )
    }
}

export default AlbumMaker
