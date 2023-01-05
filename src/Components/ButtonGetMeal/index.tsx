import React from "react";
import { Container, GetMealButton } from "./styles";

function ButtonGetMeal() {
  return (
    <Container>
      <a href="/receitas">
        <GetMealButton>GET MEAL</GetMealButton>
      </a>
    </Container>
  );
}

export default ButtonGetMeal;
