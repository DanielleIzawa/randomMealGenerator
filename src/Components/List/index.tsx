import React from "react";
import {
  Container,
  ContainerText,
  ContainerTextBold,
  ContainerTitles,
} from "./styles";

function List() {
  return (
    <Container>
      <ContainerTitles>
        <ContainerTextBold>Category:</ContainerTextBold>
        <ContainerText>Beef</ContainerText>
      </ContainerTitles>
      <ContainerTitles>
        <ContainerTextBold>Area:</ContainerTextBold>
        <ContainerText>Dutch</ContainerText>
      </ContainerTitles>
      <ContainerTitles>
        <ContainerTextBold>Tags:</ContainerTextBold>
        <ContainerText>DinnerParty, HangoverFood, Alcoholic</ContainerText>
      </ContainerTitles>
    </Container>
  );
}

export default List;
