import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Linking, TouchableHighlight, View } from "react-native";
import { StarIcon } from "react-native-heroicons/outline";

import { PACKAGE_NAME, APPLE_STORE_ID } from "@env";

const RateStars = ({ stars }) => {
	const [starPressed, setStarPressed] = useState(0);
	const [types, setTypes] = useState([0, 0, 0, 0, 0]);

	const navigation = useNavigation();

	useEffect(() => {
		let starArray = [];
		for (let i = 1; i <= stars; i++) {
			starArray.push(starPressed >= i ? 1 : 0);
		}

		if (starPressed > 0) {
			navigation.navigate("Popup", {
				title: "Thank you!",
			});

			openStore();
		}
		setTypes(starArray);
	}, [starPressed]);

	const openStore = () => {
		if (Platform.OS != "ios") {
			Linking.openURL(`market://details?id=${PACKAGE_NAME}`).catch((err) =>
				alert("Please check for Google Play Store")
			);
		} else {
			Linking.openURL(`itms://itunes.apple.com/in/app/apple-store/${APPLE_STORE_ID}`).catch(
				(err) => alert("Please check for the App Store")
			);
		}
	};

	const rateStars = (stars, type) => {
		let JSXarray = [];
		for (let i = 1; i <= stars; ++i) {
			JSXarray.push(
				<TouchableHighlight
					onPress={() => setStarPressed(i)}
					underlayColor="transparent"
					key={i}
				>
					{type[i - 1] === 0 ? (
						<StarIcon size={60} color="black" />
					) : (
						<StarIcon size={60} color="#C20114" />
					)}
				</TouchableHighlight>
			);
		}
		return JSXarray;
	};
	return <View className="flex flex-row m-10">{rateStars(stars, types)}</View>;
};

export default RateStars;
