import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { View, Text, TouchableHighlight, Animated } from "react-native";
import { CheckCircleIcon } from "react-native-heroicons/outline";

const Popup = ({ route }) => {
	const { title } = route.params;
	const navigation = useNavigation();
	const textScale = useRef(new Animated.Value(0)).current;
	const boxScale = useRef(new Animated.Value(0)).current;

	const close = () => {
		Animated.stagger(100, [
			Animated.spring(textScale, { toValue: 0, duration: 200, useNativeDriver: true }),
			Animated.spring(boxScale, { toValue: 0, duration: 200, useNativeDriver: true }),
		]).start(() => navigation.goBack());
	};

	useEffect(() => {
		Animated.spring(boxScale, { toValue: 1, duration: 200, useNativeDriver: true }).start();
		Animated.spring(textScale, { toValue: 1, duration: 200, useNativeDriver: true }).start();
	}, []);

	return (
		<TouchableHighlight
			onPress={() => close()}
			underlayColor="transparent"
			className={"w-screen h-screen"}
		>
			<Animated.View
				style={{ transform: [{ scale: boxScale }] }}
				className={
					"absolute w-3/4 bg-white ed mx-auto my-auto self-center justify-self-center rounded-xl mt-10 flex items-center justify-center flex-row px-3 py-2"
				}
			>
				<Animated.Text
					style={{ fontFamily: "Poppins", transform: [{ scale: textScale }] }}
					className="text-center text-xl"
				>
					{title}
				</Animated.Text>
				<Animated.View
					style={{ transform: [{ scale: textScale }] }}
					className="text-center"
				>
					<Text>
						<CheckCircleIcon color="green" size={35} />
					</Text>
				</Animated.View>
			</Animated.View>
		</TouchableHighlight>
	);
};

export default Popup;
