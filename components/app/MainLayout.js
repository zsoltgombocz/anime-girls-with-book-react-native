import { View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DataContext } from "../../states/DataContext";
import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import { useFonts } from "expo-font";
import { NavigationContext } from "../../states/NavigationContext";

const MainLayout = ({ children }) => {
	const { data, categories } = useContext(DataContext);
	const [expand, setExpand] = useState(true);
	const [scroll, setScroll] = useState(0);
	const [scrollDirection, setScrollDirection] = useState("");
	const { getCurrentScreen } = useContext(NavigationContext);

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

	const handleScroll = (e) => {
		let currentOffset = e.nativeEvent.contentOffset.y;
		const dif = currentOffset - (scroll || 0);

		if (Math.abs(dif) < 3) {
			setScrollDirection("unclear");
		} else if (dif <= 0) {
			setScrollDirection("up");
		} else {
			setScrollDirection("down");
		}

		setScroll(currentOffset);
	};

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View className="h-full w-screen relative">
			<View className="bg-navbar top-0 h-10 m-0 p-0 absolute w-screen z-20"></View>

			<SafeAreaView className="h-full text-center flex m-0 p-0">
				{getCurrentScreen().screenTitle !== "" ? (
					<Header show={!expand} text={getCurrentScreen().screenTitle} />
				) : (
					<></>
				)}
				{children}
			</SafeAreaView>
			<Navigation expanded={expand} scroll={scrollDirection} />
		</View>
	);
};

export default MainLayout;
//
