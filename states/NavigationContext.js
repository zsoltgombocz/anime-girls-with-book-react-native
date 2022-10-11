import { useState, createContext } from "react";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
	const [navigationData, setNavigationData] = useState({
		screen: "Home",
	});

	const setCurrentScreen = (screenName) => {
		setNavigationData({ ...navigationData, screen: screenName });
	};

	const getCurrentScreen = () => navigationData.screen;

	return (
		<NavigationContext.Provider value={{ setCurrentScreen, getCurrentScreen }}>
			{children}
		</NavigationContext.Provider>
	);
};
