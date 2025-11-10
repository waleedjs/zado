'use client';
import React from "react";
import { Leaf } from "../svg";

const VideoTwo = () => {
  
  return (
    <div className="tp-video-area">
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12" >
            <div className="tp-video-wrap p-relative">
              <video
                className="play-video"
                loop={true}
                muted={true}
                autoPlay={true}
                playsInline={true}
              >
                <source
                  src="https://html.aqlova.com/videos/liko/liko.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="tp-video-content text-center">
                <span className="tp-video-subtitle">
                  <span>
                    <Leaf />
                  </span>
                  Digital Campaigns in Action
                </span>
                <h2 className="tp-video-title">Success Stories</h2>
                <p>
                  Experience the impact of smart, data-driven marketing strategies that help brands stand out and perform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTwo;
