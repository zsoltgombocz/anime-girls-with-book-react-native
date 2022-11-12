import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Image, View, ActivityIndicator, TouchableHighlight } from "react-native";
import Capsule from "../Capsule";

const MasonryImage = ({ imgObj }) => {
	const [loaded, setLoaded] = useState(false);
	const [imageRatio, setImageRation] = useState(
		imgObj.dimensions.width / imgObj.dimensions.height
	);
	const navgiation = useNavigation();

	return (
		<View className="mb-4 z-1">
			<TouchableHighlight
				className="z-1 relative"
				onPress={() => {
					if (loaded) {
						navgiation.navigate("ImagePreview", {
							url: imgObj.url,
							ratio: imageRatio,
						});
					}
				}}
				underlayColor="white"
			>
				<>
					{!loaded && (
						<View className="absolute w-full h-full items-center justify-center">
							<ActivityIndicator color="black" />
						</View>
					)}
					<Image
						onLoad={() => {
							setLoaded(true);
						}}
						style={{ aspectRatio: imageRatio }}
						className={"rounded-lg z-1"}
						source={{ uri: imgObj.url }}
					/>
				</>
			</TouchableHighlight>
			{loaded && <Capsule text={imgObj.category} extraClass={"mt-1"} />}
		</View>
	);
};

export default MasonryImage;
