import { View } from "react-native";
import React, { useContext, useRef, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DataContext } from "../states/DataContext";
import Navigation from "../components/navigation/Navigation";
import Header from "../components/header/Header";
import Masonry from "../components/masonry/Masonry";
import CategorySelect from "../components/CategorySelect";

const Home = () => {
	const { data, categories } = useContext(DataContext);
	const [masonryData, setMasonryData] = useState(null);
	useEffect(() => {
		if (data) {
			setMasonryData(data);
		}
	}, [data]);

	return (
		<View className="relative w-full h-full">
			{categories && <CategorySelect selectables={categories} />}
			<Masonry data={masonryData} />
		</View>
	);
};

export default Home;
