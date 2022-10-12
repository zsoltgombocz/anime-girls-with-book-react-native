import React, { useContext, useEffect } from "react";
import { Text, View, Linking, ScrollView } from "react-native";
import Bubble from "../components/Bubble";
import { InformationCircleIcon } from "react-native-heroicons/outline";
import { NavigationContext } from "../states/NavigationContext";

const Information = () => {
	const { getCurrentScreen } = useContext(NavigationContext);
	return getCurrentScreen().screen === "Information" ? (
		<ScrollView>
			<Bubble
				content={
					<View className="flex items-center">
						<Text>
							<InformationCircleIcon size={60} color={"white"} />
						</Text>
						<Text
							className="text-3xl mt-4 text-white"
							style={{ fontFamily: "Poppins" }}
						>
							Information
						</Text>
					</View>
				}
			/>
			<View className="px-5 w-full h-full -top-[100px]">
				<Text className={"text-xl"} style={{ fontFamily: "Poppins" }}>
					This application uses self scraped images. The source of the images can be found{" "}
					<Text
						style={{ color: "blue" }}
						onPress={() =>
							Linking.openURL(
								"https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books"
							)
						}
					>
						on GitHub
					</Text>{" "}
					and the API that serves these images available here:{" "}
					<Text
						style={{ color: "blue" }}
						onPress={() =>
							Linking.openURL("https://anime-girls-with-book-api.vercel.app/")
						}
					>
						https://anime-girls-with-book-api.vercel.app/
					</Text>
				</Text>

				<Text className={"text-xl mt-5"} style={{ fontFamily: "Poppins" }}>
					The API and this mobile app can be found on my GitHub here:{" "}
					<Text
						style={{ color: "blue" }}
						onPress={() =>
							Linking.openURL("https://github.com/zsoltgombocz?tab=repositories")
						}
					>
						https://github.com/zsoltgombocz?tab=repositories
					</Text>
				</Text>
			</View>
		</ScrollView>
	) : (
		<></>
	);
};

export default Information;
