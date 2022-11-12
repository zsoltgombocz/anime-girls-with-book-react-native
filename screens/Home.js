import { View } from "react-native";
import React, { useContext, useRef, useEffect, useState } from "react";
import { DataContext } from "../states/DataContext";
import Header from "../components/header/Header";
import Masonry from "../components/masonry/Masonry";
import CategorySelect from "../components/CategorySelect";

const Home = () => {
	const { data, categories, currentFilter } = useContext(DataContext);
	const [masonryData, setMasonryData] = useState(null);
	useEffect(() => {
		if (data) {
			setMasonryData(data);
		}
	}, [data]);

	return (
		<>
			<View className="relative w-full h-full">
				<Header
					text={
						currentFilter === 0
							? "All Girls With Books"
							: "Category: " + categories[currentFilter]
					}
				/>
				{categories && <CategorySelect selectables={categories} />}
				<Masonry data={masonryData} />
			</View>
		</>
	);
};

export default Home;
