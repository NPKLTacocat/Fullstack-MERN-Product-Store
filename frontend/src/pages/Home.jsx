import React, { useEffect } from "react";
import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const home = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(products);
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spaceY={8}>
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          {" "}
          Current Products{" "}
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spaceX={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"}>
            {" "}
            No Products Found{" "}
            <Link to={"/create"}>
              <Text
                as={"span"}
                fontSize={"md"}
                color={"blue.500"}
                _hover={{ textDecoration: "underline" }}
              >
                Create a Product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default home;
