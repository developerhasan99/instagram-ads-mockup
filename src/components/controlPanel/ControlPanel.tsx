import { Button } from "../ui/button";

import Headings from "./Headings";
import YourImage from "./YourImage";
import CTASelector from "./CTASelector";
import ContentTypes from "./ContentTypes";
import AdvertiseInformation from "./AdvertiseInformation";
import LikesCount from "./LikesCount";
import Message from "./Message";
import { useAppContext } from "@/context/context";

const ControlPanel: React.FC = () => {
	const { tab } = useAppContext();

	return (
		<div className="md:col-span-5">
			<Headings />
			<ContentTypes />
			<AdvertiseInformation />
			<YourImage />
			{tab !== "video-post" && <CTASelector />}
			<LikesCount />
			<Message />
			<Button className="mb-8">Reset All Fields</Button>
		</div>
	);
};

export default ControlPanel;
