import * as React from "react";
import { FlatList,Text } from "react-native";
import { products } from "../products";

export default function ProductsLists() {
  return (
    <FlatList
      data={products} // Array de datos
      keyExtractor={(product) => product.id} // Función para obtener el id de cada elemento
      renderItem={({ item }) => <Text>{item.name}</Text>} // Función para renderizar cada elemento
    />
  );
}
