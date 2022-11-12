import { useState, createContext, useEffect } from "react";
import { BackHandler, Alert } from "react-native";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
	const handleBackPress = () => {
		if (navigationData.screen !== "Home") {
			setCurrentScreen("Home");
		}
	};

	useEffect(() => {
		BackHandler.addEventListener("hardwareBackPress", handleBackPress);

		return () => BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
	}, []);

	const [navigationData, setNavigationData] = useState({
		screen: "Home",
	});

	const setCurrentScreen = (screenName) => {
		setNavigationData({ screen: screenName });
	};

	const getCurrentScreen = () => navigationData;

	return (
		<NavigationContext.Provider value={{ setCurrentScreen, getCurrentScreen }}>
			{children}
		</NavigationContext.Provider>
	);
};
