import React from 'react';

class HeroVideo extends React.Component {

    render() {
        return (
            <div className="video-section video">
                <h1>SECTION 1: Main Video</h1>

                <div className="video-wrapper">
                    <video playsInline autoPlay muted loop poster="" id="mainVideo">
                        <source src="../assets/video/video.mp4" type="video/mp4" />
                    </video>
                </div>

            </div>
        )
    };
}

export default HeroVideo;