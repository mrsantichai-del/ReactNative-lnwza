import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

//import { TouchableOpacity } from "react-native";

export default function Bmi() {

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [bmiDescription, setBmiDescription] = useState("");

    const onPressButton = () => {
        //console.log("Calculate button is pressed!!!");
        const w = parseFloat(weight);
        const h = parseFloat(height);
        const output = (w / (h / 100 * h / 100));

        setBmi(output.toFixed(2));

        if (output < 18.5)
            setBmiDescription("Underweight - eat a bagel!");
        else if (output >= 18.5 && output <= 24.99)
            setBmiDescription("Normal - keep it up!");
        else if (output >= 25 && output <= 29.99)
            setBmiDescription("Overweight - exercise more!");
        else if (output >= 30 && output <= 39.99)
            setBmiDescription("Obese - get off the couch!");
        else
            setBmiDescription("Morbidly Obese - take action!");
    };

    return (
        <View >
            {/* แถวที่ 1 */}
            <View style={{
                backgroundColor: "white", padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20
            }}>
                <Text>Weight (kg.)</Text>
                <TextInput style={{ fontSize: 20 }} keyboardType="numeric" placeholder="Input your weight"
                    value={weight}
                    onChangeText={(newWeight) => setWeight(newWeight)} />
            </View >
            {/* แถวที่ 2 */}
            <View style={{
                backgroundColor: "white", padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20
            }}>
                <Text>Height (cm.)</Text>
                <TextInput style={{ fontSize: 20 }} keyboardType="numeric" placeholder="Input your height"
                    value={height}
                    onChangeText={(newHeight) => setHeight(newHeight)} />
            </View>
            {/* แถวที่ 3 */}
            <View style={{
                flexDirection: "row", marginVertical: 20
            }}>
                <View style={{
                    backgroundColor: "white", flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginRight: 10
                }}>
                    <Text>{bmi}</Text>
                </View>
                <View style={{
                    backgroundColor: "white", flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginRight: 10
                }}>
                    <Text>{bmiDescription}</Text>
                </View>
            </View>
            {/* แถวที่ 4 */}

            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>





        </View>
    );
}
