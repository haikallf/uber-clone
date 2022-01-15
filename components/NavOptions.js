import React from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      horizontal
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
          </View>
          <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            name="arrowright"
            color="white"
            type="antdesign"
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
