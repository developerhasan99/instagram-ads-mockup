import { useState } from "react";
import {
	Bookmark,
	ChevronDown,
	ChevronRight,
	Heart,
	MessageCircle,
	MoreHorizontal,
	PlusSquare,
	Send,
} from "lucide-react";
import TabTriggers from "./components/TabTriggers";
import Headings from "./components/Headings";
import ContentTypes from "./components/ContentTypes";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import DropZone from "./components/DripZone";
import CTASelector from "./components/CTASelector";
import { Textarea } from "./components/ui/textarea";
import AdvertiseInformation from "./components/AdvertiseInformation";

import instagram_logo from "./assets/images/instagram-mockup-logo.svg";
import your_logo from "./assets/images/your-logo.png";
import default_mockup_image from "./assets/images/ig_ads_mockup_default_img.png";

function App() {
	const [tab, setTab] = useState("mobile-app-install");
	const [contentType, setContentType] = useState("image");

	const [adsData, setAdsData] = useState({
		profilePic: "",
		profileName: "Your Page Here",
		thumbnail: "",
		cta: "",
		likes: "",
		message: "",
	});

	return (
		<div className="max-w-screen-lg m-auto py-8 px-4">
			<h2 className="font-bold text-2xl tracking-tight mb-3">
				Select your ads type:
			</h2>
			<TabTriggers tab={tab} setTab={setTab} />
			<div className="grid md:grid-cols-9 gap-8">
				<div className="md:col-span-5">
					<Headings tab={tab} />
					<ContentTypes
						tab={tab}
						contentType={contentType}
						setContentType={setContentType}
					/>
					<AdvertiseInformation />
					{/* Image Section Starts */}
					<h3 className="tracking-tight font-bold text-lg mb-2">Your Image</h3>
					<p className="text-muted-foreground mb-3">
						Select attention-grabbing, visually striking pictures to engage your
						target audience. Recommended image dimensions: 1000 x 1000 pixels.
					</p>
					<DropZone />
					{/* Call to action section starts */}
					<h3 className="tracking-tight font-bold text-lg mb-2">
						Your Call to Action
					</h3>
					<p className="text-muted-foreground mb-3">
						Urge people to take action with a clear call-to-action button.
					</p>
					<CTASelector />
					{/* Likes count  */}
					<h3 className="tracking-tight font-bold text-lg mb-2 mt-8">Likes</h3>
					<p className="text-muted-foreground mb-3">
						Establish the desired number of likes for your post. Only numerical
						inputs allowed.
					</p>
					<Input type="number" />
					<h3 className="tracking-tight font-bold text-lg mb-2 mt-8">
						Message
					</h3>
					<p className="text-muted-foreground mb-3">
						Pique interest by providing additional details about what is being
						advertised. Keep it concise - a maximum of 90 characters is
						suggested.
					</p>
					<Textarea className="mb-8" />
					<Button className="mb-8">Reset All Fields</Button>
				</div>
				<div className="md:col-span-4 flex justify-center">
					<div>
						<div className="border border-slate-950 rounded-lg w-[350px]  sticky top-8">
							<div className="flex justify-between p-2 border-b border-gray-300">
								<div className="flex items-center">
									<img src={instagram_logo} alt="Instagram" />
									<ChevronDown size={18} />
								</div>
								<div className="flex gap-3 items-center">
									<PlusSquare size={14} />
									<Heart size={14} />
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="14"
										width="14"
										viewBox="0 0 512 512"
									>
										<path d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z" />
									</svg>
								</div>
							</div>
							<div className="p-4 flex justify-between">
								<div className="flex gap-2 items-center">
									<img
										className="rounded-full"
										height={40}
										width={40}
										src={your_logo}
										alt="Your Logo"
									/>
									<div>
										<h3 className="font-bold text-sm">Your Page Here</h3>
										<p className="text-xs">Sponsored</p>
									</div>
								</div>
								<MoreHorizontal size={20} />
							</div>
							<img src={default_mockup_image} alt="Your Image Here" />
							<div className="px-3 py-2 border-b border-gray-400 flex justify-between items-center">
								<p className="text-xs">Install Now</p>
								<ChevronRight size={18} />
							</div>
							<div className="p-3 flex justify-between">
								<div className="flex gap-2">
									<Heart size={16} />
									<MessageCircle size={16} />
									<Send size={16} />
								</div>
								<Bookmark size={16} />
							</div>
							<p className="px-3 text-xs">20 Likes</p>
							<p className="p-3 text-xs leading-6">
								<strong className="pr-3">Your Page Here</strong> Lorem ipsum
								dolor sit amet, consectetur adipiscing elit. ...more
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
