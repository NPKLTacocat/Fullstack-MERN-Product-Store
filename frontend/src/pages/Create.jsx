import { Container } from "@chakra-ui/react";
import React from "react";

const create = () => {
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    price: "",
    image: "",
  });
  return <Container maxW={"sm"}>Create</Container>;
};

export default create;
