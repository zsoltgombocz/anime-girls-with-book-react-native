import { View, Text, Image, Animated, ScrollView } from "react-native";
import React, { useContext, useRef, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DataContext } from "../states/DataContext";
import AppLoader from "../components/AppLoader";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import FastImage from "react-native-fast-image";

const Home = () => {
	const { data } = useContext(DataContext);
	const fadeIn = useRef(new Animated.Value(0)).current;
	const [expand, setExpand] = useState(true);
	const [scroll, setScroll] = useState(0);
	const [scrollDirection, setScrollDirection] = useState("");

	useEffect(() => {
		if (data.length > 0) {
			setExpand(false);
		}
	}, [data]);

	const handleScroll = (e) => {
		let currentOffset = e.nativeEvent.contentOffset.y;
		const dif = currentOffset - (scroll || 0);

		if (Math.abs(dif) < 3) {
			setScrollDirection("unclear");
		} else if (dif <= 0) {
			setScrollDirection("up");
		} else {
			setScrollDirection("down");
		}

		setScroll(currentOffset);
	};

	return (
		<View className="h-full w-screen bg-gray">
			<View className="bg-navbar top-0 h-10 m-0 p-0 absolute w-screen"></View>
			<SafeAreaView className="h-screen text-center flex justify-center items-center m-0 p-0">
				<Header show={!expand} text={"All Girls With Book"} />
				<FastImage
					style={{ width: 200, height: 200 }}
					source={{
						uri: "https://unsplash.it/400/400?image=1",
						headers: { Authorization: "someAuthToken" },
						priority: FastImage.priority.normal,
					}}
					resizeMode={FastImage.resizeMode.contain}
				/>
			</SafeAreaView>
			<Navigation expanded={expand} scroll={scrollDirection} />
		</View>
	);
};

export default Home;
