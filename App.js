import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { DataProvider } from "./states/DataContext";
import { useFonts, Poppins_300Light } from "@expo-google-fonts/poppins";
import { ImageDisplayProvider } from "./states/ImageDisplayContext";
import DisplayImage from "./components/masonry/DisplayImage";

const Stack = createNativeStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts({
		Poppins_300Light,
	});
	return (
		<DataProvider>
			<ImageDisplayProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerShown: false,
							cardStyle: { backgroundColor: "transparent" },
							cardOverlayEnabled: true,
							transparentCard: true,
							cardStyleInterpolator: ({ current: { progress } }) => ({
								cardStyle: {
									opacity: progress.interpolate({
										inputRange: [0, 0.5, 0.9, 1],
										outputRange: [0, 0.25, 0.7, 1],
									}),
								},
								overlayStyle: {
									opacity: progress.interpolate({
										inputRange: [0, 1],
										outputRange: [0, 0.5],
										extrapolate: "clamp",
									}),
								},
							}),
						}}
						mode="modal"
					>
						<Stack.Screen name="Home" options={{ headerShown: false }}>
							{(props) => <Home {...props} fontsloaded={fontsLoaded} />}
						</Stack.Screen>
						<Stack.Screen
							name="ImagePreview"
							options={{
								presentation: "transparentModal",
								headerShown: false,
								modalBackgroundOpacity: 0.5,
								animation: "flip",
							}}
							component={DisplayImage}
						></Stack.Screen>
					</Stack.Navigator>
				</NavigationContainer>
			</ImageDisplayProvider>
		</DataProvider>
	);
}
