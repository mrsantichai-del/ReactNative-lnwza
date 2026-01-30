import React, { useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import { getLocation } from "@/utils/gps";
import { getData } from "@/utils/api";

export default function LocationQuiz() {
  const [location, setLocation] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      // 1) ตำแหน่งของเราเอง
      const loc = await getLocation();
      setLocation(loc);

      // 2) ดึงข้อมูลทุกคนจาก API Location
      const data = await getData("/location");
      setUsers(data);
    };

    loadData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        showsUserLocation={true}
        initialRegion={
          location
            ? {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              }
            : {
                latitude: 14.073,
                longitude: 100.601,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }
        }
      >
        {/* หมุดผู้ใช้จาก API */}
        {users.map((item: any) => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: Number(item.latitude),
              longitude: Number(item.longitude),
            }}
            title={item.user_id}
          >
            <FontAwesome name="user" size={22} color="blue" />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}