import React from 'react';
import { Dimensions, ScrollView, Text } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
export default function Chart() {  

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"], //สามารถใช้สเตสแทนได้
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43], //สามารถใช้สเตสแทนได้
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };
    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        }
    };
    const screenWidth = Dimensions.get("window").width;

    const pieData = [
        {
            name: "Bangkok",
            population: 8900000,
            color: "#FF6B6B",
            legendFontColor: "#7F8487",
            legendFontSize: 15,
        },
        {
            name: "Phuket",
            population: 400000,
            color: "#4ECDC4",
            legendFontColor: "#7F8487",
            legendFontSize: 15,
        },
        {
            name: "Chiang Mai",
            population: 1200000,
            color: "#FFE66D",
            legendFontColor: "#7F8487",
            legendFontSize: 15,
        },
        {
            name: "Pattaya",
            population: 600000,
            color: "#95E1D3",
            legendFontColor: "#7F8487",
            legendFontSize: 15,
        },
    ];

    return (
       <ScrollView style={{ flex: 1 , padding : 10 }}>            
            <Text style={{ fontSize : 20 }}>
                Bezier Line Chart
            </Text>
            <LineChart
                data={data}
                width={screenWidth-20}
                height={220}
                chartConfig={chartConfig}
                bezier={true}
                style={{
                    marginVertical : 10,
                    borderRadius: 15
                }}
            />

            <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 10 }}>
                Pie Chart
            </Text>

            <PieChart
                data={pieData}
                width={screenWidth - 20}
                height={300}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"50"}
                center={[50, 0]}
                style={{
                    marginVertical: 10,
                    borderRadius: 15,
                }}
            />

            
        </ScrollView>
   );
}