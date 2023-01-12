import React from "react";
import YouTube from "react-youtube";
import Reactyoutubi from "react-youtube";

function Reactyoutube() {
  let objfor_reactyoutube = {
    height: "200",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      //   autoplay: 0,
      autoplay: 1,
    },
  };
  return (
    <div className="reactyoutube">
      hey i am react-youtube
      <Reactyoutubi videoId="5_5oE5lgrhw" opts={objfor_reactyoutube} />
    </div>
  );
}

export default Reactyoutube;
