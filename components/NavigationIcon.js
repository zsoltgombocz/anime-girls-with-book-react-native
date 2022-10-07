import { Text, Animated, TouchableOpacity } from "react-native";
import React from "react";
import {
	HomeIcon,
	Cog6ToothIcon,
	FunnelIcon,
	InformationCircleIcon,
} from "react-native-heroicons/outline";

import { PlusIcon } from "react-native-heroicons/solid";

const iconComponent = (icon, active) => {
	const color = active ? "#C20114" : "#fff";
	switch (icon) {
		case "home":
			return <HomeIcon size={35} color={color} />;
		case "filter":
			return <FunnelIcon size={35} color={color} />;
		case "plus":
			return <PlusIcon size={35} color={color} />;
		case "info":
			return <InformationCircleIcon size={35} color={color} />;
		case "settings":
			return <Cog6ToothIcon size={35} color={color} />;
	}
};

const NavigationIcon = ({ active, scale, icon, onPress }) => {
	const iconComp = iconComponent(icon, active);
	return (
		<TouchableOpacity onPress={onPress} underlayColor="white">
			<Animated.View
				onPress={onPress}
				style={{ transform: [{ scale }] }}
				className="w-20 h-full flex justify-center items-center"
			>
				<Text>{iconComp}</Text>
			</Animated.View>
		</TouchableOpacity>
	);
};

export default NavigationIcon;
