import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Button
        title="go product"
        onPress={() => navigation.navigate("Product")}
      />
    </View>
  );
};

export default Products;
