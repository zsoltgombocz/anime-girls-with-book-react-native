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

const DisplayImage = ({ url, ratio, setter }) => {
	const [imageRatio, setImageRation] = useState(1);
	return (
		<TouchableHighlight
			className="absolute w-screen h-screen top-0 left-0 z-10 flex-1 items-center"
			blurRadius={10}
			onPress={() => {
				setter({ show: false });
			}}
			underlayColor="transparent"
		>
			<View className="flex h-full items-center justify-center">
				<View className="bg-gray/70 w-screen h-full absolute"></View>
				<Image
					className={"rounded-lg z-10 w-full bg-gray"}
					source={{ uri: url }}
					style={{ aspectRatio: ratio }}
				/>
			</View>
		</TouchableHighlight>
	);
};

export default DisplayImage;
