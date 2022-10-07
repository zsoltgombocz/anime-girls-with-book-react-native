import { useState, createContext, useEffect, useContext } from "react";
import { API_URL } from "@env";
import { api } from "../api/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchPage = async (page = 1, filter = "all") => {
			api(API_URL)
				.get(`?page=${page}&filter=${filter}`)
				.then(({ data }) => setData(data))
				.catch((err) => {
					console.error(err);
					setData(null);
				});
		};

		setTimeout(() => {
			fetchPage();
		}, 1000);
	}, []);

	return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
};
