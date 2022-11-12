import { Text, Animated } from "react-native";
import React, { useRef, useEffect } from "react";

const Header = ({ text }) => {
	const height = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.spring(height, {
			toValue: 60,
			duration: 1000,
			useNativeDriver: false,
		}).start();
	}, []);
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
