import React from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import "./videos.css";
const Videos = () => {
    return (
      <div id="videos-container">
        <span className="videos-title">Videos <FontAwesomeIcon icon={faVideo}/></span>
      <section id="videos-section">
        <div className="video">
        <ReactPlayer
          controls={true}
          width="100%"
          height="100%"
          className="react-player"
        />
        <span className="video-text">Who I am</span>
        </div>

        <div className="video">
        <ReactPlayer
          controls={true}
          width="100%"
          height="100%"
          className="react-player"
        />
        <span className="video-text">About my clinic</span>
        </div>

          <div className="video">
        <ReactPlayer
          controls={true}
          width="100%"
          height="100%"
          className="react-player"
        />
        <span className="video-text">Some advices</span>
        </div>
      </section>
      </div>

    );
  };

export default Videos;