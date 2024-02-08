import instagram_logo from "@/assets/images/instagram-mockup-logo.svg";
import default_mockup_image from "@/assets/images/your-image-here.svg";
import play_icon from "../../assets/images/play-icon.webp";

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
import { useAppContext } from "@/context/context";

interface commonAdsProps {
	elementRef: React.MutableRefObject<null>;
}

const CommonAds: React.FC<commonAdsProps> = ({ elementRef }) => {
	const { tab, adsData, contentType } = useAppContext();

	return (
		<div className="p-3 mb-2" ref={elementRef}>
			<div className="border border-slate-950 rounded-lg max-w-[350px] w-full">
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
							src={adsData.profilePic}
							alt="Your Logo"
						/>
						<div>
							<h3 className="font-bold text-sm">{adsData.profileName}</h3>
							<p className="text-xs">Sponsored</p>
						</div>
					</div>
					<MoreHorizontal size={20} />
				</div>
				<div className="relative">
					<img
						className={tab === "instagram-story" ? "rounded-t" : ""}
						src={adsData.thumbnail ? adsData.thumbnail : default_mockup_image}
						alt="Your Image Here"
					/>
					{contentType === "video" && (
						<img
							className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
							height={60}
							width={60}
							src={play_icon}
							alt="Play Icon"
						/>
					)}
					{contentType === "carousel" && (
						<div className="absolute top-3 right-3 px-2 py-1 rounded-full text-white bg-gray-700/30 ">
							1/5
						</div>
					)}
				</div>

				{tab !== "video-post" && (
					<div className="px-3 py-2 border-b border-gray-400 flex justify-between items-center">
						<p className="text-xs">
							{adsData.cta ? adsData.cta : "Select CTA first"}
						</p>
						<ChevronRight size={18} />
					</div>
				)}

				<div className="p-3 flex justify-between">
					<div className="flex gap-2">
						<Heart size={16} />
						<MessageCircle size={16} />
						<Send size={16} />
					</div>
					{contentType === "carousel" && (
						<div className="flex items-center gap-2 pr-8">
							<div className="h-1 w-1 bg-gray-800 rounded"></div>
							<div className="h-1 w-1 bg-gray-800 rounded"></div>
							<div className="h-1 w-1 bg-gray-800 rounded"></div>
							<div className="h-1 w-1 bg-gray-800 rounded"></div>
							<div className="h-1 w-1 bg-gray-800 rounded"></div>
						</div>
					)}
					<Bookmark size={16} />
				</div>

				<p className="px-3 text-xs">{adsData.likes} Likes</p>
				<p className="p-3 text-xs leading-6">
					<strong className="pr-3">{adsData.profileName}</strong>
					{adsData.message
						? adsData.message
						: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}{" "}
					...more
				</p>
			</div>
		</div>
	);
};

export default CommonAds;
