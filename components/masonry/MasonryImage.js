import React, { useState, useContext } from "react";
import { Dimensions, Image, View, Text, ActivityIndicator, TouchableHighlight } from "react-native";
import { ImageDisplayContext } from "../../states/ImageDisplayContext";
import Capsule from "../Capsule";
import DisplayImage from "./DisplayImage";

const MasonryImage = ({ imgObj, scrollEnableFc }) => {
	const [loaded, setLoaded] = useState(false);
	const [imageRatio, setImageRation] = useState(1);
	const { data, setData } = useContext(ImageDisplayContext);

	return (
		<View className="mb-4 z-1">
			<TouchableHighlight
				className="z-1 relative"
				onPress={() => {
					if (!data.showing) {
						setData({
							show: true,
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
						onLoad={({
							nativeEvent: {
								source: { width, height },
							},
						}) => {
							setImageRation(width / height);
							setLoaded(true);
						}}
						style={{ aspectRatio: imageRatio }}
						className={"rounded-lg z-1"}
						source={{ uri: imgObj.url }}
					/>
				</>
			</TouchableHighlight>
			{loaded && <Capsule text={imgObj.category} extraClass={"mt-2"} />}
		</View>
	);
};

export default MasonryImage;
