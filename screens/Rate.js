import React, { useContext, useEffect } from "react";
import { Text, View, Linking, ScrollView } from "react-native";
import Bubble from "../components/Bubble";
import { StarIcon } from "react-native-heroicons/outline";
import { NavigationContext } from "../states/NavigationContext";
import RateStars from "../components/RateStars";

const Rate = () => {
	const { getCurrentScreen } = useContext(NavigationContext);
	return getCurrentScreen().screen === "Rate" ? (
		<ScrollView>
			<Bubble
				content={
					<View className="flex items-center">
						<Text>
							<StarIcon size={60} color={"white"} />
						</Text>
						<Text
							className="text-3xl mt-4 text-white"
							style={{ fontFamily: "Poppins" }}
						>
							Rate
						</Text>
					</View>
				}
			/>
			<View className="px-5 w-full h-full -top-[100px] flex items-center">
				<Text className={"text-2xl"} style={{ fontFamily: "Poppins" }}>
					Consider rating my app:{" "}
				</Text>
				<RateStars stars={5} />
			</View>
		</ScrollView>
	) : (
		<></>
	);
};

export default Rate;
