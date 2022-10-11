import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { DataProvider } from "./states/DataContext";
import { useFonts, Poppins_300Light } from "@expo-google-fonts/poppins";
import DisplayImage from "./components/masonry/DisplayImage";
import MainLayout from "./components/MainLayout";
import Information from "./components/Information";
import { NavigationContext, NavigationProvider } from "./states/NavigationContext";

const Stack = createNativeStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts({
		Poppins_300Light,
	});
	return (
		<DataProvider>
			<NavigationProvider>
				<NavigationContainer>
					<MainLayout fontsloaded={fontsLoaded}>
						<Stack.Navigator>
							<Stack.Screen name="Home" options={{ headerShown: false }}>
								{(props) => <Home {...props} fontsloaded={fontsLoaded} />}
							</Stack.Screen>
							<Stack.Screen
								name="Information"
								options={{ headerShown: false }}
								component={Information}
							></Stack.Screen>
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
					</MainLayout>
				</NavigationContainer>
			</NavigationProvider>
		</DataProvider>
	);
}
