import {
  Box,
  Container,
  Heading,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useColorModeValue } from "../components/ui/color-mode";
import { useProductStore } from "../store/product";
import { toaster } from "../components/ui/toaster";

const Create = () => {
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
      });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };
  return (
    <Container
      maxW={"2xl"}
      bg={useColorModeValue("cyan.100", "cyan.900")}
      rounded={"lg"}
    >
      <VStack spaceY={8} pb={8} pt={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Add New Product
        </Heading>

        <Box
          width={"full"}
          bg={useColorModeValue("cyan.50", "cyan.950")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spaceY={4}>
            <Input
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Product Price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Product Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Button onClick={handleAddProduct} w={"full"}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Create;
