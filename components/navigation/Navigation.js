import { Animated } from "react-native";
import React, { useEffect, useRef, useContext } from "react";

import { Dimensions } from "react-native";
import AppLoader from "../app/AppLoader";
import NavigationIcon from "./NavigationIcon";
import { useNavigation } from "@react-navigation/native";
import { NavigationContext } from "../../states/NavigationContext";

const Navigation = ({ expanded }) => {
	const windowHeight = Dimensions.get("window").height;
	const height = useRef(new Animated.Value(windowHeight + 200)).current;
	const scale = useRef(new Animated.Value(0)).current;
	const loaderScale = useRef(new Animated.Value(0)).current;

	const navigation = useNavigation();
	const { getCurrentScreen, setCurrentScreen } = useContext(NavigationContext);

	const spinValue = useRef(new Animated.Value(0)).current;

	const scrollHeightChange = useRef(new Animated.Value(65)).current;

	useEffect(() => {
		if (expanded) {
			Animated.spring(loaderScale, { toValue: 1, useNativeDriver: true }).start();
			Animated.loop(
				Animated.timing(spinValue, {
					toValue: 1,
					duration: 3000,
					useNativeDriver: true,
				})
			).start();
		} else {
			Animated.stagger(500, [
				Animated.spring(height, { toValue: 65, duration: 1000, useNativeDriver: false }),
				Animated.parallel([
					Animated.spring(scale, { toValue: 1, duration: 100, useNativeDriver: false }),
				]),
			]).start();
		}
	}, [expanded]);

	/*useEffect(() => {
		if (scroll === "up" && hidden === true) {
			setHidden(false);

			Animated.timing(height, { toValue: 65, useNativeDriver: false }).start();
		} else if (scroll === "down" && hidden === false) {
			setHidden(true);

			Animated.timing(height, { toValue: 0, useNativeDriver: false }).start();
		}
	}, [scroll]);*/

	const navigate = (screen) => {
		navigation.navigate(screen);
		setCurrentScreen(screen);
	};
	return (
		<Animated.View
			className={`bg-navbar w-full bottom-0 absolute shadow rounded-t-md`}
			style={{
				height: height,
				shadowColor: "#171717",
				shadowOffset: { width: -2, height: 4 },
				shadowOpacity: 0.2,
				shadowRadius: 3,
			}}
		>
			{expanded ? (
				<>
					<AppLoader />
				</>
			) : (
				<Animated.View
					className="flex-row flex align-between justify-between h-full"
					style={{ height: scrollHeightChange }}
				>
					<NavigationIcon
						onPress={() => navigate("Home")}
						active={getCurrentScreen().screen === "Home" ? true : false}
						scale={scale}
						icon={"home"}
					/>

					<NavigationIcon
						onPress={() => navigate("Information")}
						active={getCurrentScreen().screen === "Information" ? true : false}
						scale={scale}
						icon={"info"}
					/>

					<NavigationIcon
						onPress={() => navigate("Rate")}
						active={getCurrentScreen().screen === "Rate" ? true : false}
						scale={scale}
						icon={"start"}
					/>
				</Animated.View>
			)}
		</Animated.View>
	);
};

export default Navigation;
