import { View, Text, Image, Animated, ScrollView } from "react-native";
import React, { useContext, useRef, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DataContext } from "../states/DataContext";
import AppLoader from "../components/AppLoader";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Masonry from "../components/masonry/Masonry";
import MasonryImage from "../components/masonry/MasonryImage";

const Home = ({ fontsloaded }) => {
	const { data } = useContext(DataContext);
	const fadeIn = useRef(new Animated.Value(0)).current;
	const [expand, setExpand] = useState(true);
	const [scroll, setScroll] = useState(0);
	const [scrollDirection, setScrollDirection] = useState("");
	const [masonryData, setMasonryData] = useState([null, null]);

	useEffect(() => {
		if (data && data.data && fontsloaded) {
			if (data.data.length > 0) {
				console.log(data.data);
				let masonryImages = data.data.map((img) => <MasonryImage imgObj={img} />);
				setMasonryData([
					masonryImages.slice(0, masonryImages.length / 2),
					masonryImages.slice(masonryImages.length / 2),
				]);
				setExpand(false);
			}
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
			<SafeAreaView className="h-screen text-center flex m-0 p-0">
				<Header show={!expand} text={"All Girls With Book"} />
				<Masonry rowA={masonryData[0]} rowB={masonryData[1]} />
			</SafeAreaView>
			<Navigation expanded={expand} scroll={scrollDirection} />
		</View>
	);
};

export default Home;
