import React from "react";
import { ContainerVideo, Text } from "./styles";
import Iframe from "react-iframe";

function Video() {
  return (
    <>
      <Text>Video Recipe</Text>
      <ContainerVideo>
        <Iframe
          url="http://www.youtube.com/embed/xDMP3i36naA"
          position="absolute"
          width="80%"
          id="myId"
          className="myClassname"
          height="65%"
        />
      </ContainerVideo>
    </>
  );
}

export default Video;
