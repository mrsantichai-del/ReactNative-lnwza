import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { TextInput, View, } from "react-native";
import MyIcon from "../week3/MyIcon";


export default function HomeIconMenu() {
  const router = useRouter();
  return (
    <View style={{ marginHorizontal : 20 , marginTop : -50 , padding : 20, borderWidth : 1, borderColor : 'gray', borderRadius : 20, backgroundColor : 'white' }}>
      <StatusBar style="auto" />
      {/* View ก้อนที่ 1 */}
      <View style={{ backgroundColor : '#eeeeee', padding : 10 , borderRadius : 10 }} >
        <TextInput style={{ fontSize : 20 }} placeholder="What're you looking for ?" />
      </View>
      {/* View ก้อนที่ 2 */}
      <View style={{ flexDirection : "row", marginTop : 10 , justifyContent : "space-around" }}>
        <MyIcon title="Flex" name="grid-view" size={30} color="orange" />
        <MyIcon title="Travel" name="plane" size={30} color="orange" />
        <MyIcon title="Resort" name="hotel" size={30} color="orange" />
        <MyIcon title="Health" name="favorite" size={30} color="orange" />
      </View>
      {/* View ก้อนที่ 3 */}
      <View style={{ flexDirection : "row", marginTop : 10 , justifyContent : "space-around" }}>
        <MyIcon title="Pokemon" name="bolt" size={30} color="orange" />
        <MyIcon title="Book Store" name="menu-book" size={30} color="orange" />
        <MyIcon title="Location" name="location" size={30} color="orange" onPress={() => router.push('/location')} />
        <MyIcon title="More" name="ellipsis-h" size={30} color="orange" />
        {/* <MyIcon title="xxx" name="question" size={30} color="orange" /> */}
      </View>
    </View>
  );
}
