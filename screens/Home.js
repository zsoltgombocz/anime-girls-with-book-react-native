import { View } from "react-native";
import React, { useContext, useRef, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DataContext } from "../states/DataContext";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Masonry from "../components/masonry/Masonry";

const Home = () => {
	const { data } = useContext(DataContext);
	const [masonryData, setMasonryData] = useState(null);
	useEffect(() => {
		if (data) {
			if (data.length > 0) {
				setMasonryData(data);
			}
		}
	}, [data]);

	return <Masonry data={masonryData} />;
};

export default Home;
