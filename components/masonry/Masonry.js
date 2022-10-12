import React, { useContext, useState, useEffect } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import { DataContext } from "../../states/DataContext";
import MasonryImage from "./MasonryImage";
import { encode as btoa } from "base-64";

const Masonry = ({ data = null }) => {
	const [cols, setCols] = useState([null, null]);
	const { getNextPage, page } = useContext(DataContext);

	const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
		const paddingToBottom = 300;
		return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
	};

	useEffect(() => {
		const constructRows = () => {
			const p = page.current_page;
			let colA = [];
			let colB = [];
			data.forEach((d, i) => {
				if (i % 2 === 0) {
					colB.push(d);
				} else {
					colA.push(d);
				}
			});
			setCols([colA, colB]);
		};

		if (data && data.length !== 0) {
			constructRows();
		}
	}, [data]);

	return data && data.length !== 0 ? (
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
		<>
			<ActivityIndicator color="black" />
		</>
	);
};

export default Masonry;
