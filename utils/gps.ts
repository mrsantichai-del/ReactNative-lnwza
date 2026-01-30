import * as Location from "expo-location";

export async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
        // console.log("Permission to access location was denied");
        return ;
    }
    let location = await Location.getCurrentPositionAsync({});
    // console.log(location);
    if (location) {
        return location;
    } else {
        return false;
    }
}

// สรุปที่มันไม่ขึ้นเป็ฯเพราะตั้งค่า อีมูเลเตอร์ไม่ได้อนุญาตให้แอพเข้าถึงตำแหน่ง
// แก้ไขโดยไปที่ Settings -> Privacy -> Location Services -> เลือกแอพที่ใช้ทดสอบ (Expo Go หรือแอพเราเอง) -> เลือก Allow location access -> เลือก While Using the App
// import * as Location from 'expo-location';

// const getLocation = async () => {
//   const { status } = await Location.requestForegroundPermissionsAsync();

//   if (status !== 'granted') {
//     console.log('Permission denied');
//     return;
//   }

//   const location = await Location.getCurrentPositionAsync({});
//   console.log(location);
// };
// export { getLocation };