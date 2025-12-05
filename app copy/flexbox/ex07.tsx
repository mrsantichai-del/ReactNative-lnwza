import React from 'react';
import { View } from 'react-native';

export default function Ex07() {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end', //ทำไมมันสลับข้าง
      justifyContent: 'flex-start', //ทำไมมันสลับ บนล่า
    }}>
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
