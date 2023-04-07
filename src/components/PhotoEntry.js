import React from "react";
import './master.scss';

class PhotoEntry extends React.Component {

    render() {
        const image_path = "../images/" + this.props.src;

        return  <div className="photo-entry-block">
                    <div className="photo-entry-block__image">
                        <img className="photo-img" src={image_path} alt={image_path} />
                    </div>
                    <h5 className="photo-entry-block__caption">{this.props.caption}</h5>
                    <h6 className="photo-entry-block__location">{this.props.location}</h6>
                </div>
    }

}

export default PhotoEntry;
