import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Marker } from "react-native-maps";

export default function UniversityMarkers(props:any) {
  // Guard: if no items, render nothing (prevents crash from undefined.map)
  if (!props.items || props.items.length === 0) return null;

  return props.items.map((item:any) => (
    <Marker
      coordinate={{
        "latitude": Number(item.latitude),
        "longitude": Number(item.longitude)
      }}
      title={item.name}
      key={item.id.toString()}
      description={item.address}
    >
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <FontAwesome name="university" size={20} color="tomato" />
      </View>
    </Marker>
  ));
}
