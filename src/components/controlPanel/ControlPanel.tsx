import { Button } from "../ui/button";

import Headings from "./Headings";
import YourImage from "./YourImage";
import CTASelector from "./CTASelector";
import ContentTypes from "./ContentTypes";
import AdvertiseInformation from "./AdvertiseInformation";
import LikesCount from "./LikesCount";
import Message from "./Message";
import useAdsData from "@/store/adsData";

const ControlPanel: React.FC = () => {

	const { adType } = useAdsData()
	const clearFields = () => {

	};

	return (
		<div className="md:col-span-5">
			<Headings />
			<ContentTypes />
			<AdvertiseInformation />
			<YourImage />
			{adType !== "video-post" && <CTASelector />}
			{adType !== "instagram-story" && <LikesCount />}
			{adType !== "instagram-story" && <Message />}
			<Button
				onClick={clearFields}
				className={adType === "instagram-story" ? "my-8" : "mb-8"}
			>
				Reset All Fields
			</Button>
		</div>
	);
};

export default ControlPanel;
