import React, { useContext, useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { DataContext } from "../../states/DataContext";
import MasonryImage from "./MasonryImage";
import { encode as btoa } from "base-64";

import { DATA_PER_PAGE } from "@env";

const Masonry = ({ data = null }) => {
	const [cols, setCols] = useState([null, null]);
	const { getNextPage } = useContext(DataContext);

	const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
		const paddingToBottom = 300;
		return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
	};

	useEffect(() => {
		const constructRows = () => {
			const page = data.length / DATA_PER_PAGE;
			let colA = [];
			let colB = [];
			for (let i = 1; i <= page; i++) {
				colA = colA.concat(
					data.slice((i - 1) * DATA_PER_PAGE, i * DATA_PER_PAGE - DATA_PER_PAGE / 2)
				);
				colB = colB.concat(
					data.slice(i * DATA_PER_PAGE - DATA_PER_PAGE / 2, i * DATA_PER_PAGE)
				);
			}
			setCols([colA, colB]);
		};

		if (data && data.length >= DATA_PER_PAGE) {
			constructRows();
		}
	}, [data]);

	return data ? (
		<ScrollView
			removeClippedSubviews={true}
			className="relative"
			onScroll={({ nativeEvent }) => {
				if (isCloseToBottom(nativeEvent)) {
					getNextPage();
				}
			}}
			scrollEventThrottle={400}
		>
			<View className="flex-row w-screen mt-2 pb-20">
				<View className="flex flex-col w-6/12 pr-2 pl-1">
					{cols[1] &&
						cols[1].map((x, i) => (
							<MasonryImage key={x.url + btoa(JSON.stringify(x)) + i} imgObj={x} />
						))}
				</View>
				<View className="flex flex-col w-6/12 pl-2 pr-1">
					{cols[0] &&
						cols[0].map((x, i) => (
							<MasonryImage key={x.url + btoa(JSON.stringify(x)) + i} imgObj={x} />
						))}
				</View>
			</View>
		</ScrollView>
	) : (
		<></>
	);
};

export default Masonry;
