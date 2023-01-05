import {
  ContainerBottom,
  ContainerBottomTitle,
  ContainerImage,
  ContainerList,
  ContainerTop,
  Text,
  TextMeal,
  TextTitle,
} from "./styles";

import image from "../../assets/lhqev81565090111.jpg";
import List from "../../Components/List";
import Video from "../../Components/Video";
function Revenues() {
  return (
    <>
      <ContainerTop>
        <ContainerImage>
          <img src={image} alt="imagem" style={{ width: "300px" }} />
        </ContainerImage>
        <Text>
          <TextTitle>Bitterballen (Dutch meatballs)</TextTitle>
          <TextMeal>
            Melt the butter in a skillet or pan. When melted, add the flour
            little by little and stir into a thick paste. Slowly stir in the
            stock, making sure the roux absorbs the liquid. Simmer for a couple
            of minutes on a low heat while you stir in the onion, parsley and
            the shredded meat. The mixture should thicken and turn into a heavy,
            thick sauce. Pour the mixture into a shallow container, cover and
            refrigerate for several hours, or until the sauce has solidified.
            Take a heaping tablespoon of the cold, thick sauce and quickly roll
            it into a small ball. Roll lightly through the flour, then the egg
            and finally the breadcrumbs. Make sure that the egg covers the whole
            surface of the bitterbal. When done, refrigerate the snacks while
            the oil in your fryer heats up to 190C (375F). Fry four bitterballen
            at a time, until golden. Serve on a plate with a nice grainy or
            spicy mustard.
          </TextMeal>
        </Text>
      </ContainerTop>
      <List />
      <ContainerBottom>
        <ContainerBottomTitle>Ingredients:</ContainerBottomTitle>
        <ContainerList>Butter - 100g</ContainerList>
        <ContainerList>Butter - 100g</ContainerList>
        <ContainerList>Butter - 100g</ContainerList>
        <ContainerList>Butter - 100g</ContainerList>
        <ContainerList>Butter - 100g</ContainerList>
        <ContainerList>Butter - 100g</ContainerList>
        <ContainerList>Butter - 100g</ContainerList>
        <ContainerList>Butter - 100g</ContainerList>
        <ContainerList>Butter - 100g</ContainerList>
        <Video />
      </ContainerBottom>
    </>
  );
}

export default Revenues;
