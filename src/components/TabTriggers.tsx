import { useState } from "react";
import { Button } from "./ui/button";
import {
	Image,
	Instagram,
	MousePointerClick,
	Smartphone,
	VideoIcon,
} from "lucide-react";

function TabTriggers() {
	const [tab, setTab] = useState("mobile-app-install");

	const handleTabChange = (target: string) => {
		setTab(target);
	};

	const tabTriggers = [
		{
			key: "mobile-app-install",
			icon: Smartphone,
			text: "Mobile App Install",
		},
		{
			key: "website-clicks",
			icon: MousePointerClick,
			text: "Website Clicks",
		},
		{
			key: "video-post",
			icon: VideoIcon,
			text: "Video Post",
		},
		{
			key: "photo-post",
			icon: Image,
			text: "Photo Post",
		},
		{
			key: "instagram-story",
			icon: Instagram,
			text: "Instagram Story",
		},
	];

	return (
		<div className="flex flex-wrap justify-center gap-3 bg-gray-200 p-2 rounded-lg mb-8">
			{tabTriggers.map((trigger) => {
				return (
					<Button
						onClick={() => {
							handleTabChange(trigger.key);
						}}
						key={Math.random()}
						className="inline-block flex-grow h-auto p-4"
						variant={tab === trigger.key ? "default" : "outline"}
					>
						<div className="mb-2 flex justify-center">
							<trigger.icon size={35} strokeWidth="1" />
						</div>
						{trigger.text}
					</Button>
				);
			})}
		</div>
	);
}

export default TabTriggers;
