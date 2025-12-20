import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props:any) { 

    const [onlineTours, setOnlineTours] = useState([]);
    
useEffect(() => {

    const loadOnlineTours = async () => {

    try{
        let text = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json ');
        let data = await text.json();

        console.log("Load Data : " , data);
	  //SET STATE
        setOnlineTours(data);
    }catch(error){
        console.log("ERROR : " , error);
        throw error;
    }
}
loadOnlineTours();
}, []);


        
        return (
            <View style={props.style}>
                <Text style={{ fontSize: 20 }}>Upcoming Event</Text>
                <Text style={{ color: "grey" }}>What is the worst that could happen</Text>
                <FlatList
                    horizontal={true}
                    //data={tours}
                    data={onlineTours}
                    renderItem={
                        ({ item, index }:any) => {
                            console.log(item, index, item.uri);
                            return (
                                <View style={{ marginRight: 10, width: 200 }}>
                                    <Image style={{ width: 200, height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.uri }} />
                                    
                                    <View style={{
                                        flexDirection: "row",
                                        borderBottomLeftRadius: 10,
                                        borderBottomRightRadius: 10,
                                        borderWidth: 1,
                                        borderColor: "grey",
                                        borderTopWidth: 0,
                                        width: 200
                                    }}>
                                        <View style={{ padding: 10 }}>
                                            <Text style={{ fontSize: 14, color: "red", textAlign: "center" }}>{item.month}</Text>
                                            <Text style={{ fontSize: 24, color: "black", textAlign: "center" }}>{item.date}</Text>
                                        </View>
                                        <View style={{ padding: 10, flex: 1 }}>
                                            <Text style={{ fontSize: 12, color: "black", fontWeight: "bold" }} numberOfLines={2}>{item.title}</Text>
                                            <Text style={{ fontSize: 11, color: "grey" }} numberOfLines={1}>{item.datetime}</Text>
                                            <Text style={{ fontSize: 10, color: "grey" }} numberOfLines={1}>{item.place}</Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        }
                    }
                   keyExtractor={(item:any) => item.id}
                />
    
            </View>
        );
}
