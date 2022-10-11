import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
	Animated,
	Dimensions,
	Image,
	View,
	Text,
	ActivityIndicator,
	TouchableHighlight,
} from "react-native";
import Capsule from "../Capsule";

const DisplayImage = ({ route }) => {
	const { url, ratio } = route.params;
	const navigation = useNavigation();
	const [imageRatio, setImageRation] = useState(1);
	return (
		<TouchableHighlight
			className="h-screen flex justify-center bottom-0 absolute items-center bg"
			blurRadius={10}
			onPress={() => {
				navigation.goBack();
			}}
			underlayColor="transparent"
		>
			<View className="flex items-center justify-center">
				<View className=""></View>
				<Image
					className={"rounded-lg w-full"}
					source={{ uri: url }}
					style={{ aspectRatio: ratio }}
				/>
			</View>
		</TouchableHighlight>
	);
};

export default DisplayImage;
