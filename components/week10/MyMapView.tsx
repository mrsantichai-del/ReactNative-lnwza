import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import UniversityMarkers from "./UniversityMarkers";

export default function MyMapView(props: any) {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;

  const [universities, setUniversities] = useState([]);
  const loadUniversities = async () => {
    let url_endpoint = "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week10/universities.json";
    try {
      let response = await fetch(url_endpoint);
      let items = await response.json();
      //   console.log(items);
      setUniversities(items);
    } catch (error) {
      // Use logger to reduce noisy console output
      // errors will still be visible via logger.error
      const { error: loggerError } = await import('../../utils/logger');
      loggerError(error);
    }
  };
  useEffect(() => { loadUniversities(); }, []);
  if (props.location) {
   
    //DISPLAY MAP ON YOUR LOCATION
    return (
      <MapView
        style={{ width: width, height: height }}
        initialRegion={{
          latitude: props.location.coords.latitude,
          longitude: props.location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}       //แสดงตำแหน่งปัจจุบัน

        onUserLocationChange={(event) => { //เมื่อเปลี่ยนตำแหน่ง
          // console.log("LOCATION CHANGED : " , event);
          if (event.nativeEvent.coordinate) {
            let new_location = {
              coords: event.nativeEvent.coordinate,
              mocked: false, //ไม่ใช่ตำแหน่งปลอม กำหนดค่า mocked เป็น false ไปเลย เพื่อให้ใช้งานได้ทั้ง Android และ IOS
              timestamp: event.nativeEvent.coordinate.timestamp,
            };
            //SET LOCATION
            props.setLocation(new_location);
            
          }
        }}


      >
        {/* <Marker //ปักหมุดสถานที่สำคัญ
          coordinate={{
            latitude: Number(14.1334383),
            longitude: Number(100.6146767),
          }}
          title={"มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์"}
          key={"xxxx"}
        />

        <Marker
          coordinate={{
            latitude: Number(14.0734419),
            longitude: Number(100.6003011),
          }}
          title={"มหาวิทยาลัยธรรมศาสตร์รังสิต"}
          key={"TU"}
        /> */}

  <UniversityMarkers items={universities} />

      </MapView>
    );
    
  } else {
    //DISPLAY DEFAULT MAP on 0,0
    return <MapView style={{ width: width, height: height }}></MapView>;
  }


  
}
