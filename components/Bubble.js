import React, { useEffect, useRef } from "react";
import { Dimensions, Text, Animated } from "react-native";

const Bubble = ({ scale = 1.1, content }) => {
	const animationScale = useRef(new Animated.Value(0)).current;
	const opacity = useRef(new Animated.Value(0)).current;
	useEffect(() => {
		Animated.stagger(200, [
			Animated.spring(animationScale, { toValue: scale, useNativeDriver: false }),
			Animated.parallel([
				Animated.spring(opacity, { toValue: 1, duration: 500, useNativeDriver: false }),
			]),
		]).start();

		return () => {
			Animated.stagger(200, [
				Animated.spring(opacity, { toValue: 0, useNativeDriver: false }),
				Animated.parallel([
					Animated.spring(animationScale, {
						toValue: 0,
						duration: 500,
						useNativeDriver: false,
					}),
				]),
			]).start();
		};
	}, []);
	const deviceWidth = Dimensions.get("window").width;
	return (
		<Animated.View
			className="w-full bg-navbar rounded-full flex items-center -top-[150px]"
			style={{
				height: deviceWidth * scale,
				width: deviceWidth * scale,
				left: (deviceWidth - deviceWidth * scale) / 2,
				transform: [{ scale: animationScale }],
			}}
		>
			<Animated.View className="w-2/4 flex h-3/4 top-1/4 items-center justify-center">
				{content}
			</Animated.View>
		</Animated.View>
	);
};

export default Bubble;
