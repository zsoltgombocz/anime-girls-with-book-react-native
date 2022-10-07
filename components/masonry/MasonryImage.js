import React, { useState, useEffect } from "react";
import { Dimensions, Image, View, Text, ActivityIndicator } from "react-native";
import Capsule from "../Capsule";

const MasonryImage = ({ imgObj }) => {
	const [loaded, setLoaded] = useState(false);
	const [imageRatio, setImageRation] = useState(1);

	return (
		<View className="mb-4">
			{!loaded && (
				<View className="absolute w-full h-full items-center justify-center">
					<ActivityIndicator color="black" />
				</View>
			)}
			<Image
				onLoad={({
					nativeEvent: {
						source: { width, height },
					},
				}) => {
					setImageRation(width / height);
					setLoaded(true);
				}}
				style={{ aspectRatio: imageRatio }}
				className={"rounded-lg"}
				source={{ uri: imgObj.url }}
			/>
			{loaded && <Capsule text={imgObj.category} extraClass={"mt-2"} />}
		</View>
	);
};

export default MasonryImage;
