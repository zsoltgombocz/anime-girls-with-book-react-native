import React, { useState, useRef, useEffect, useContext } from "react";
import { Text, TouchableHighlight, View, Animated, Dimensions } from "react-native";
import { FunnelIcon, XMarkIcon } from "react-native-heroicons/outline";
import { DataContext } from "../states/DataContext";
import { NavigationContext } from "../states/NavigationContext";
import Capsule from "./Capsule";

const CategorySelect = ({ selectables }) => {
	const [opened, setOpened] = useState(false);
	const [selected, setSelected] = useState(0);
	const circleHeight = useRef(new Animated.Value(65)).current;
	const circleWidth = useRef(new Animated.Value(65)).current;
	const radius = useRef(new Animated.Value(999)).current;
	const iconMargin = useRef(new Animated.Value(8)).current;
	const filterOpacity = useRef(new Animated.Value(0)).current;

	const { fetchPage, clearData } = useContext(DataContext);
	const { setTitle } = useContext(NavigationContext);

	const selectCategory = (index) => {
		setOpened(false);
		if (index !== 0) {
			setTitle("Category: " + selectables[index]);
		} else {
			setTitle("");
		}
		clearData();
		setSelected(index);
		fetchPage(1, selectables[index]);
	};
	useEffect(() => {
		if (opened) {
			Animated.parallel([
				Animated.spring(circleHeight, {
					toValue: 500,
					duration: 100,
					useNativeDriver: false,
				}),
				Animated.spring(circleWidth, {
					toValue: Dimensions.get("window").width - 40,
					duration: 100,
					useNativeDriver: false,
				}),
				Animated.spring(radius, {
					toValue: 50,
					duration: 100,
					useNativeDriver: false,
				}),
				Animated.spring(iconMargin, {
					toValue: 18,
					duration: 100,
					useNativeDriver: false,
				}),
				Animated.spring(filterOpacity, {
					toValue: 1,
					duration: 100,
					useNativeDriver: false,
				}),
			]).start();
		} else {
			Animated.stagger(50, [
				Animated.timing(filterOpacity, {
					toValue: 0,
					duration: 100,
					useNativeDriver: false,
				}),
				Animated.parallel([
					Animated.spring(circleHeight, {
						toValue: 65,
						duration: 100,
						useNativeDriver: false,
					}),
					Animated.spring(circleWidth, {
						toValue: 65,
						duration: 100,
						useNativeDriver: false,
					}),
					Animated.spring(radius, {
						toValue: 999,
						duration: 100,
						useNativeDriver: false,
					}),
					Animated.spring(iconMargin, {
						toValue: 8,
						duration: 100,
						useNativeDriver: false,
					}),
				]),
			]).start();
		}
	}, [opened]);

	const XIcon = <XMarkIcon color="white" size={35} />;
	const FilterIcon = <FunnelIcon color="white" size={35} />;
	return (
		<Animated.View
			className="bg-navbar flex items-center justify-center absolute bottom-[85px] z-50"
			style={{ height: circleHeight, width: circleWidth, borderRadius: radius, right: 20 }}
		>
			<Animated.View
				className={"z-50"}
				style={{ position: "absolute", top: 0, left: 0, margin: iconMargin }}
			>
				<TouchableHighlight onPress={() => setOpened(!opened)} underlayColor="transparent">
					<Text className="p-2">{opened ? XIcon : FilterIcon}</Text>
				</TouchableHighlight>
			</Animated.View>

			<Animated.ScrollView
				className="w-full h-full mt-16 mb-2"
				style={{ opacity: filterOpacity }}
			>
				<View className="flex items-center z-50">
					{opened &&
						selectables &&
						selectables.map((x, i) => (
							<TouchableHighlight
								key={x}
								className={"w-3/4"}
								onPress={() => selectCategory(i)}
								underlayColor="transparent"
							>
								<Capsule
									text={x === "all" ? "All" : x}
									extraClass={
										"w-full border-white mb-3 mx-auto p-2" +
										(i === selected ? " bg-red border-red" : "")
									}
									textClass={"text-xl text-white text-center"}
								/>
							</TouchableHighlight>
						))}
				</View>
			</Animated.ScrollView>
		</Animated.View>
	);
};

export default CategorySelect;
