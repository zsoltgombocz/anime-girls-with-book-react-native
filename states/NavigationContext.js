import { useState, createContext, useEffect } from "react";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
	const ScreenTitleMap = {
		Home: "All Girls With Book",
		Filter: "Filtered Girls",
	};

	const [navigationData, setNavigationData] = useState({
		screen: "Home",
		screenTitle: ScreenTitleMap["Home"] || "",
	});

	const setCurrentScreen = (screenName, customTitle, forceEmpty = false) => {
		let screenTitle = title(screenName, customTitle, forceEmpty);
		setNavigationData({ ...navigationData, screen: screenName, screenTitle });
	};

	const getCurrentScreen = () => navigationData;

	const title = (screenName, title, forceEmpty = false) =>
		!forceEmpty ? (title ? title : ScreenTitleMap[screenName] || screenName) : "";

	const setTitle = (customText) => {
		let screenTitle = title(navigationData.screen, customText);
		setNavigationData({ ...navigationData, screenTitle });
	};

	return (
		<NavigationContext.Provider value={{ setCurrentScreen, getCurrentScreen, setTitle }}>
			{children}
		</NavigationContext.Provider>
	);
};
