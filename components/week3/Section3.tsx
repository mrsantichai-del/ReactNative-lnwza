// นำเข้า React เพื่อใช้สร้างคอมโพเนนต์แบบฟังก์ชัน
import React from 'react';
// นำเข้า Text และ View จาก React Native เพื่อใช้สร้าง UI พื้นฐาน
import { Text, View } from 'react-native';

// ประกาศคอมโพเนนต์ Section3 และ export ออกไปให้ไฟล์อื่นเรียกใช้ได้
export default function Section3() {
    // ส่วนที่คอมโพเนนต์นี้จะ render ออกไปบนหน้าจอ
    return (
        // View ชั้นนอกสุด ใช้จัดระยะขอบด้านข้างและด้านบนของคอนเทนต์
        <View style={{ marginHorizontal: 16, marginTop: 16 }}>
            {/* View สำหรับจัดเลย์เอาต์แนวนอนระหว่างวงกลมคะแนนกับข้อความด้านขวา */}
            <View style={{ flexDirection: 'row' }}>
                {/* View วงกลมสีแดง ใช้แสดงคะแนนรีวิว */}
                <View
                    style={{
                        borderRadius: 50,             // กำหนดมุมโค้ง 50 หน่วย เพื่อให้กลายเป็นวงกลม (เพราะกว้าง/สูงเท่ากัน)
                        justifyContent: 'center',     // จัดตำแหน่งลูก (Text) ให้อยู่กึ่งกลางในแนวตั้ง
                        alignItems: 'center',         // จัดตำแหน่งลูก (Text) ให้อยู่กึ่งกลางในแนวนอน
                        backgroundColor: '#FF0000',   // กำหนดสีพื้นหลังเป็นสีแดง
                        width: 60,                    // ความกว้างของวงกลม 60 หน่วย
                        height: 60                    // ความสูงของวงกลม 60 หน่วย
                    }}
                >
                    {/* ข้อความตัวเลขคะแนนภายในวงกลมสีแดง */}
                    <Text
                        style={{
                            color: '#FFFFFF',         // สีตัวอักษรเป็นสีขาว
                            fontWeight: 'bold'        // ทำตัวหนา
                        }}
                    >
                        9.5
                    </Text>
                </View>

                {/* View สำหรับข้อความด้านขวาของวงกลม (คำว่า Excellent และ reviews) */}
                <View
                    style={{
                        justifyContent: 'center',     // จัดข้อความให้อยู่กึ่งกลางในแนวตั้งภายในแถว
                        marginLeft: 12                // เว้นระยะห่างจากวงกลมทางซ้าย 12 หน่วย
                    }}
                >
                    {/* ข้อความคำอธิบายระดับคะแนน */}
                    <Text style={{ color: '#FF0000' }}>
                        Excellent
                    </Text>

                    {/* ข้อความจำนวนรีวิวที่มี */}
                    <Text>
                        See 801 reviews
                    </Text>
                </View>
            </View>
        </View>
    );
}
