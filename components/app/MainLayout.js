import { View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DataContext } from "../../states/DataContext";
import Navigation from "../navigation/Navigation";
import { useFonts } from "expo-font";
import { NavigationContext } from "../../states/NavigationContext";

const MainLayout = ({ children }) => {
	const { data, categories } = useContext(DataContext);
	const [expand, setExpand] = useState(true);
	const { getCurrentScrollDirection } = useContext(NavigationContext);

	const [fontsLoaded] = useFonts({
		Poppins: require("../../assets/fonts/Poppins.ttf"),
	});

	useEffect(() => {
		if (data) {
			if (data.length > 0 && categories.length > 0) {
				setExpand(false);
			}
		}
	}, [data]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View className="h-full w-screen relative">
			<View className="bg-navbar top-0 h-10 m-0 p-0 absolute w-screen z-20"></View>

			<SafeAreaView className="h-full text-center flex m-0 p-0">{children}</SafeAreaView>
			<Navigation
				expanded={expand}
				hide={getCurrentScrollDirection() === "up" ? false : true}
			/>
		</View>
	);
};

export default MainLayout;
