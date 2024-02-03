import { Button } from "../ui/button";

import Headings from "./Headings";
import YourImage from "./YourImage";
import CTASelector from "./CTASelector";
import ContentTypes from "./ContentTypes";
import AdvertiseInformation from "./AdvertiseInformation";
import LikesCount from "./LikesCount";
import Message from "./Message";
import { useAppContext } from "@/context/context";
import profile_pic from "../../assets/images/your-logo.svg";

const ControlPanel: React.FC = () => {
	const { tab, setAdsData } = useAppContext();
	const clearFields = () => {
		setAdsData({
			profilePic: `${profile_pic}`,
			profileName: "Your Page Here",
			thumbnail: "",
			cta: "",
			likes: "",
			message: "",
		});
	};

	return (
		<div className="md:col-span-5">
			<Headings />
			<ContentTypes />
			<AdvertiseInformation />
			<YourImage />
			{tab !== "video-post" && <CTASelector />}
			<LikesCount />
			<Message />
			<Button onClick={clearFields} className="mb-8">
				Reset All Fields
			</Button>
		</div>
	);
};

export default ControlPanel;
