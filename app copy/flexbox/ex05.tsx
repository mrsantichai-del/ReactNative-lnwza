import React from 'react';
import { View } from 'react-native';

export default function Ex05() {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',  // จัดกึ่งกลางแนวนอน
      alignItems: 'center',       // จัดกึ่งกลางแนวตั้ง
    }
    }>
      <View style={{
        width: 50, height: 50,
        backgroundColor: '#50E3C2'
      }} />
      <View style={{
        width: 50, height: 50,
        backgroundColor: '#4A90E2'
      }} />
      <View style={{
        width: 50, height: 50,
        backgroundColor: '#9013FE'
      }} />
    </View>
  );
}
