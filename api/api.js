import axios from "axios";

export const api = (base_url) => {
	return axios.create({
		baseURL: base_url,
	});
};
