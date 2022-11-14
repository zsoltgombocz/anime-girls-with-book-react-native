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
		scroll: "down",
	});

	const setCurrentScreen = (screenName) => {
		setNavigationData({ ...navigationData, screen: screenName });
	};

	const getCurrentScreen = () => navigationData;
	const getCurrentScrollDirection = () => navigationData.scroll;

	const setScrollDirection = (dir) => {
		if (dir !== getCurrentScrollDirection()) {
			setNavigationData({ ...navigationData, scroll: dir });
		}
	};

	return (
		<NavigationContext.Provider
			value={{
				setCurrentScreen,
				getCurrentScreen,
				setScrollDirection,
				getCurrentScrollDirection,
			}}
		>
			{children}
		</NavigationContext.Provider>
	);
};
