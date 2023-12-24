import { Button } from "../ui/button";

import Headings from "./Headings";
import YourImage from "./YourImage";
import CTASelector from "./CTASelector";
import ContentTypes from "./ContentTypes";
import AdvertiseInformation from "./AdvertiseInformation";
import LikesCount from "./LikesCount";
import Message from "./Message";

const ControlPanel: React.FC = () => {
	return (
		<div className="md:col-span-5">
			<Headings />
			<ContentTypes />
			<AdvertiseInformation />
			<YourImage />
			<CTASelector />
			<LikesCount />
			<Message />
			<Button className="mb-8">Reset All Fields</Button>
		</div>
	);
};

export default ControlPanel;
