import { useState, createContext, useEffect, useContext } from "react";
import { API_URL } from "@env";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getAllImages = async () => {
			let images = [];
			fetch(API_URL)
				.then((response) => response.json())
				.then((data) => {
					data.map((f) => images.push(...f.content));
					setData(images);
				});
		};

		setTimeout(() => {
			getAllImages();
		}, 1000);
	}, []);

	return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
};
