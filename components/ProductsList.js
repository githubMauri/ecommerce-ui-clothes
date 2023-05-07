import * as React from "react";
import { FlatList,Text } from "react-native";
import { products } from "../products";
import ProductCard from "./ProductCard";

export default function ProductsLists() {
  return (
    <FlatList
      data={products} // Array de datos
      keyExtractor={(product) => product.id} // Función para obtener el id de cada elemento
      renderItem={({ item }) => <ProductCard {...item}/>} // Función para renderizar cada elemento
      contentContainerStyle={{ paddingHorizontal: 15 }}
    />
  );
}
