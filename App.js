import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { DataProvider } from "./states/DataContext";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<DataProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{ headerShown: false }}
					></Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</DataProvider>
	);
}
