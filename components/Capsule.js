import React from "react";
import { View, Text } from "react-native";

const Capsule = ({ text, extraClass }) => {
	return (
		<View
			style={{ alignSelf: "flex-start", fontFamily: "Poppins_300Light" }}
			className={"rounded-full border border-navbar px-1 " + extraClass}
		>
			<Text classname="text-xs">{text}</Text>
		</View>
	);
};

export default Capsule;
