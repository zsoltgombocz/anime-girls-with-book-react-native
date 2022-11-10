import { View, Text, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = ({ show, text }) => {
	const height = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		if (show) {
			Animated.spring(height, {
				toValue: 60,
				duration: 1000,
				useNativeDriver: false,
			}).start();
		}
	}, [show]);
	return (
		<Animated.View
			style={{ height }}
			className="bg-navbar m-0 w-full flex justify-center items-center w-100 shadow-2xl z-20 rounded-b-md"
		>
			<Text style={{ fontFamily: "Poppins" }} className="text-white text-xl">
				{text}
			</Text>
		</Animated.View>
	);
};

export default Header;
