import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { DataProvider } from "./states/DataContext";
import DisplayImage from "./screens/DisplayImage";
import MainLayout from "./components/app/MainLayout";
import Information from "./screens/Information";
import Popup from "./screens/Popup";
import Rate from "./screens/Rate";
import { NavigationProvider } from "./states/NavigationContext";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<DataProvider>
			<NavigationProvider>
				<NavigationContainer>
					<MainLayout>
						<Stack.Navigator>
							<Stack.Screen
								name="Home"
								options={{ headerShown: false, animation: "none" }}
							>
								{(props) => <Home {...props} />}
							</Stack.Screen>
							<Stack.Screen
								name="Information"
								options={{
									animation: "none",
									headerShown: false,
									modalBackgroundOpacity: 0.5,
								}}
								component={Information}
							></Stack.Screen>
							<Stack.Screen
								name="Rate"
								options={{
									headerShown: false,
									modalBackgroundOpacity: 0.5,
									animation: "none",
								}}
								component={Rate}
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
							<Stack.Screen
								name="Popup"
								options={{
									presentation: "transparentModal",
									headerShown: false,
									animation: "none",
								}}
								component={Popup}
							></Stack.Screen>
						</Stack.Navigator>
					</MainLayout>
				</NavigationContainer>
			</NavigationProvider>
		</DataProvider>
	);
}
