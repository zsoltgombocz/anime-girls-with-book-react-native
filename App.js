import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { DataProvider } from "./states/DataContext";
import { useFonts, Poppins_300Light } from "@expo-google-fonts/poppins";
import { ImageDisplayProvider } from "./states/ImageDisplayContext";

const Stack = createNativeStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts({
		Poppins_300Light,
	});
	return (
		<DataProvider>
			<ImageDisplayProvider>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Home" options={{ headerShown: false }}>
							{(props) => <Home {...props} fontsloaded={fontsLoaded} />}
						</Stack.Screen>
					</Stack.Navigator>
				</NavigationContainer>
			</ImageDisplayProvider>
		</DataProvider>
	);
}
