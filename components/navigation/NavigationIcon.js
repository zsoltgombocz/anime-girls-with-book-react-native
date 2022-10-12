import { Text, Animated, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
	HomeIcon,
	FunnelIcon,
	InformationCircleIcon,
	XMarkIcon,
	StarIcon,
} from "react-native-heroicons/outline";

import { PlusIcon } from "react-native-heroicons/solid";

const NavigationIcon = ({ active, scale, icon, onPress }) => {
	const [iconJSX, setIconJSX] = useState(null);
	useEffect(() => {
		setIconJSX(iconComponent(icon, active));
	}, [icon, active]);

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
			case "start":
				return <StarIcon size={35} color={color} />;
			case "close":
				return <XMarkIcon size={35} color={color} />;
			default:
				return <HomeIcon size={35} color={color} />;
		}
	};

	return (
		<TouchableOpacity onPress={onPress} underlayColor="white">
			<Animated.View
				style={{ transform: [{ scale }] }}
				className="w-20 h-full flex justify-center items-center"
			>
				{iconJSX && <Text>{iconJSX}</Text>}
			</Animated.View>
		</TouchableOpacity>
	);
};

export default NavigationIcon;
