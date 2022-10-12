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

const DisplayImage = ({ route }) => {
	const { url, ratio } = route.params;
	const navigation = useNavigation();
	return (
		<TouchableHighlight
			className="h-full w-full top-0 flex justify-center absolute items-center z-50 pb-[65px] backdrop-blur-sm bg-white/50"
			blurRadius={10}
			onPress={() => {
				navigation.goBack();
			}}
			underlayColor="transparent"
		>
			<>
				<Image
					className={"rounded-lg w-11/12 h-max"}
					source={{ uri: url }}
					style={{ aspectRatio: ratio }}
				/>
			</>
		</TouchableHighlight>
	);
};

export default DisplayImage;
