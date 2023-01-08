import {
  ContainerBottom,
  ContainerBottomTitle,
  ContainerImage,
  ContainerList,
  ContainerTop,
  Text,
  TextMeal,
  TextTitle,
  ButtonTop,
} from "./styles";

import List from "../../Components/List";
import Video from "../../Components/Video";
import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";

function Revenues() {
  const { fetchData, response, loading } = useAxios();
  const { strMeal, strMealThumb, strInstructions } = response;
  // const youtubeUrl = strYoutube?.replace("watch?v=", "embed/");
  console.log(response);

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  let ingredients = [];
  Object.keys(response).forEach((item, index) => {
    if (response[`strIngredient${index}`]) {
      ingredients.push({
        ingredient: response[`strIngredient${index}`],
        measure: response[`strMeasure${index}`],
      });
    }
  });

  const renderList = (item, index) => (
    <div className="flex text-sm" key={index}>
      <li>{item.ingredient} - </li>
      <span className="italic text-gray-500">{item.measure}</span>
    </div>
  );

  return (
    <>
      <ButtonTop onClick={() => fetchData()} className="">
        Get new Meal!
      </ButtonTop>
      <ContainerTop>
        <ContainerImage>
          <img src={strMealThumb} alt="imagem" style={{ width: "300px" }} />
        </ContainerImage>
        <Text>
          <TextTitle>{strMeal}</TextTitle>
          <TextMeal>{strInstructions}</TextMeal>
        </Text>
      </ContainerTop>
      <List />
      <ContainerBottom>
        <ContainerBottomTitle>Ingredients:</ContainerBottomTitle>
        <ContainerList>
          {ingredients.map((item, index) => renderList(item, index))}
        </ContainerList>
        <Video />
      </ContainerBottom>
    </>
  );
}

export default Revenues;
