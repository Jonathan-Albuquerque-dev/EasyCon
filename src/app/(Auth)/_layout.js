import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import FontAwesome2 from "@expo/vector-icons/FontAwesome6";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0097B2",
        tabBarStyle: { height: 60 },
      }}
    >
      <Tabs.Screen
        name="Home/index"
        options={{
          headerTitle: "EasyCon",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={30} name="home" color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="Moradores/index"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome2 size={30} name="people-group" color={color} />
          ),
          headerTitle: "Moradores",
          tabBarLabel: "Moradores",
        }}
      />
      <Tabs.Screen
        name="Financeiro/index"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome size={30} name="coins" color={color} />
          ),
          headerTitle: "Financeiro",
          tabBarLabel: "Financeiro",
        }}
      />
    </Tabs>
  );
}
