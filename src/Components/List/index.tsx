import {
  Container,
  ContainerText,
  ContainerTextBold,
  ContainerTitles,
} from "./styles";

import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";

function List() {
  const { fetchData, response } = useAxios();
  const { strCategory, strArea } = response;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <ContainerTitles>
        <ContainerTextBold>Categoria</ContainerTextBold>
        <ContainerText>{strCategory}</ContainerText>
      </ContainerTitles>
      <ContainerTitles>
        <ContainerTextBold>Area:</ContainerTextBold>
        <ContainerText>{strArea}</ContainerText>
      </ContainerTitles>
    </Container>
  );
}

export default List;
