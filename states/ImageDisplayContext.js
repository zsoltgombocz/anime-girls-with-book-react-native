import { useState, createContext, useEffect, useContext } from "react";
import { API_URL } from "@env";
import { api } from "../api/api";

export const ImageDisplayContext = createContext();

export const ImageDisplayProvider = ({ children }) => {
	const [data, setData] = useState({
		url: null,
		ratio: null,
		show: false,
	});

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<ImageDisplayContext.Provider value={{ data, setData }}>
			{children}
		</ImageDisplayContext.Provider>
	);
};
