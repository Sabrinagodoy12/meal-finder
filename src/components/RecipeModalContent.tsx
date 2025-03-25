import React from "react";
import { MealDetails } from "../types";
import {
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Image,
  Heading,
  Text,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";

type Props = {
  data: MealDetails;
};

const joinIngredients = (data: MealDetails) => {
  let ingredients = [];
  for (let index = 1; index <= 20; index++) {
    const Ingredient = data[`strIngredients${index}`];
    const measure = data[`strMeasure${index}`];
    if (ingredients !== "") {
      ingredients.push(`${Ingredient} - ${measure}`);
    }
  }

  return ingredients;
};

function RecipeModalContent({ data }: Props) {
  const ingredients = joinIngredients(data);
  console.log(ingredients);
  return (
    <>
      <ModalHeader>{data.strMeal}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image
          alt={data.strMeal}
          width="100%"
          borderRadius="lg"
          src={data.strMealThumb}
        />
        <Heading mt="4" mb="4" size="md">
          Ingredientes
        </Heading>
        <OrderedList>
          {ingredients.map((ingredient) => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
          ))}
        </OrderedList>

        <Text whiteSpace="pre-line" mt="4">
          {data.strInstructions}
        </Text>
      </ModalBody>
    </>
  );
}

export default RecipeModalContent;
