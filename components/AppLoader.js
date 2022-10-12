import { View, Text, Image, Animated } from "react-native";
import React, { useRef, useState, useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const AppLoader = ({ text }) => {
	const [imgSrc, setImgSrc] = useState(null);

	const scale = useRef(new Animated.Value(1)).current;
	const imageProgress = useRef(new Animated.Value(0)).current;
	const textBounce = useRef(new Animated.Value(1)).current;

	useLayoutEffect(() => {
		const loaders = [
			require("../assets/images/megumin_loading.gif"),
			require("../assets/images/loading.webp"),
			require("../assets/images/kazuma.gif"),
		];
		const random = loaders[Math.floor(Math.random() * loaders.length)];
		setImgSrc(random);
		Animated.parallel([
			Animated.spring(imageProgress, { toValue: 1, useNativeDriver: true }),
			Animated.timing(scale, { toValue: 1, useNativeDriver: true }),
			Animated.loop(
				Animated.stagger(500, [
					Animated.timing(textBounce, { toValue: 1.2, useNativeDriver: true }),
					Animated.timing(textBounce, { toValue: 1, useNativeDriver: true }),
				])
			),
		]).start();
	}, []);

	return (
		<View className="absolute bottom-0 w-screen h-screenflex flex-col items-center justify-between">
			<View className="flex flex-grow items-center justify-center">
				<Animated.View style={{ transform: [{ scale: textBounce }] }}>
					<Text style={{ fontFamily: "Poppins" }} className="text-4xl text-red">
						LOADING
					</Text>
				</Animated.View>
			</View>
			<Animated.Image
				style={{ opacity: imageProgress, transform: [{ scale }] }}
				source={imgSrc}
				className="mx-auto flex-shrink"
			/>
		</View>
	);
};

export default AppLoader;
