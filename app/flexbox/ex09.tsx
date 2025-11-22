import React from 'react';
import { View } from 'react-native';

export default function Ex09() {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
    }}>

      {/* แถวที่ 1 */}
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: '#50E3C2' }} />
        <View style={{ width: 50, height: 50, backgroundColor: '#50E3C2' }} />
        <View style={{ width: 50, height: 50, backgroundColor: '#50E3C2' }} />
      </View>

      {/* แถวที่ 2 */}
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: '#4A90E2' }} />
        <View style={{ width: 50, height: 50, backgroundColor: '#4A90E2' }} />
        <View style={{ width: 50, height: 50, backgroundColor: '#4A90E2' }} />
      </View>

      {/* แถวที่ 3 */}
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: '#9013FE' }} />
        <View style={{ width: 50, height: 50, backgroundColor: '#9013FE' }} />
        <View style={{ width: 50, height: 50, backgroundColor: '#9013FE' }} />
      </View>

    </View>


  );
}
