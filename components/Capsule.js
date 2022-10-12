import React from "react";
import { View, Text } from "react-native";

const Capsule = ({ text, extraClass, textClass }) => {
	return (
		<View
			style={{ alignSelf: "flex-start", fontFamily: "Poppins" }}
			className={"rounded-full border border-navbar px-1 " + extraClass}
		>
			<Text style={{ fontFamily: "Poppins" }} className={"text-xs " + textClass}>
				{text}
			</Text>
		</View>
	);
};

export default Capsule;
