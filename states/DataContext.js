import { useState, createContext, useEffect, useContext } from "react";
import { API_URL } from "@env";
import { api } from "../api/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [categories, setCategories] = useState([]);
	const [page, setPage] = useState([]);
	const [requestInProgress, setRequestInProgress] = useState(false);

	useEffect(() => {
		getCategories();
		setTimeout(() => {
			fetchPage();
		}, 1000);
	}, []);

	const fetchPage = async (page = 1, filter = "all") => {
		try {
			const { data } = await api(API_URL).get(`?page=${page}&filter=${filter}`);
			const { total, total_page, current_page, from, to } = data;
			setPage({ total, total_page, current_page, from, to, filter });

			setData((prev) => prev.concat(data.data));
		} catch (error) {
			return new Error(error);
		}
	};

	const getNextPage = async () => {
		if (requestInProgress) return;
		if (page.current_page + 1 > page.total_page) return;

		setRequestInProgress(true);
		await fetchPage(page.current_page + 1, page.filter);
		setRequestInProgress(false);
	};

	const getCategories = async () => {
		try {
			const { data } = await api(API_URL).get(`categories`);
			let categs = data;
			categs.unshift("all");
			setCategories(categs);
		} catch (error) {
			return new Error(error);
		}
	};

	const clearData = () => {
		setData([]);
	};

	return (
		<DataContext.Provider value={{ data, getNextPage, fetchPage, categories, page, clearData }}>
			{children}
		</DataContext.Provider>
	);
};
