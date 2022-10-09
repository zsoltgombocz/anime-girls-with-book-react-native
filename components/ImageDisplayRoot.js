import React, { useContext } from "react";
import { ImageDisplayContext } from "../states/ImageDisplayContext";
import DisplayImage from "./masonry/DisplayImage";

const ImageDisplayRoot = () => {
	const { data, setData } = useContext(ImageDisplayContext);

	if (!data.show) return null;

	return <DisplayImage url={data.url} ratio={data.ratio} setter={setData} />;
};

export default ImageDisplayRoot;
