import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="pikachu"
        options={{
          tabBarLabel: "pikachu",
          tabBarIcon: ({ color, size }) => ( <FontAwesome name="bolt" color={color} size={size} /> ),
          headerShown: false,
          tabBarActiveTintColor: 'tomato', 
          tabBarInactiveTintColor: 'gray' 
        }}
      />
      <Tabs.Screen
        name="charmander"
        options={{
          tabBarLabel: "charmander",
          tabBarIcon: ({ color, size }) => ( <FontAwesome name="fire" color={color} size={size} /> ),
          headerShown: false,
          tabBarActiveTintColor: 'tomato', 
          tabBarInactiveTintColor: 'gray' 
        }}
      />
      <Tabs.Screen
        name="ivysour"
        options={{
          tabBarLabel: "ivysour",
          tabBarIcon: ({ color, size }) => ( <FontAwesome name="leaf" color={color} size={size} /> ),
          headerShown: false,
          tabBarActiveTintColor: 'tomato', 
          tabBarInactiveTintColor: 'gray' 
        }}
      />
    </Tabs>
  );
}
