import React from "react";
import { View, ScrollView, Image } from "react-native";

const Masonry = ({ rowA = [], rowB = [] }) => {
	return rowA && rowB && rowA.length > 0 && rowB.length > 0 ? (
		<ScrollView className="">
			<View className="flex-row w-screen mt-2 pb-20">
				<View className="flex flex-col w-6/12 pl-2 pr-1">
					<>{rowA.length > 0 && rowA.map((x) => x)}</>
				</View>
				<View className="flex flex-col w-6/12 pr-2 pl-1">
					<>{rowB.length > 0 && rowB.map((x) => x)}</>
				</View>
			</View>
		</ScrollView>
	) : (
		<></>
	);
};

export default Masonry;
