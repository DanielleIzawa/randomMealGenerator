import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { ContainerVideo, Text } from "./styles";
// import Iframe from "react-iframe";

function Video() {
  const { fetchData, response } = useAxios();
  const { strYoutube } = response;
  const youtubeUrl = strYoutube?.replace("watch?v=", "embed/");

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Text>Video Recipe</Text>
      <ContainerVideo>
        <iframe
          src={youtubeUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ContainerVideo>
    </>
  );
}

export default Video;
