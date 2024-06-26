import { ChevronUp, X, MoreHorizontal } from "lucide-react";
import default_thumbnail from "@/assets/images/default_thumbnail.svg";
import play_icon from "../../assets/images/play-icon.webp";
import useAdsData from "@/store/adsData";
import default_profile_pic from "@/assets/images/default_profile_pic.svg";


interface commonAdsProps {
	elementRef: React.MutableRefObject<null>;
}
const InstagramAds: React.FC<commonAdsProps> = ({ elementRef }) => {

	const { profilePic, profileName, thumbnail, cta, adType, contentType } = useAdsData()

	return (
		<div className="p-3 mb-2" ref={elementRef}>
			<div className="border  border-slate-950 rounded-lg">
				<div className="relative">
					<div className="absolute top-3 right-2 left-2 bg-slate-300 h-[5px] rounded">
						{" "}
						<div className="bg-white h-[5px] w-1/3 rounded-full"></div>{" "}
					</div>
					<div className="p-4 flex justify-between bg-transparent absolute right-0 left-0 top-3 rounded text-white">
						<div className="flex gap-2 items-center">
							<img
								className="rounded-full"
								height={40}
								width={40}
								src={profilePic ? profilePic : default_profile_pic}
								alt="Your Logo"
							/>
							<div>
								<h3 className="font-bold text-sm">{profileName}</h3>
								<p className="text-xs">Sponsored</p>
							</div>
						</div>
						<div className="flex gap-3">
							<MoreHorizontal size={20} />
							<X />
						</div>
					</div>
					<img
						className={adType === "instagram-story" ? "rounded-t " : ""}
						src={thumbnail ? thumbnail : default_thumbnail}
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
				</div>
				<div className="grid justify-center mt-2 mb-5">
					<div className="ml-[45px]">
						{" "}
						<ChevronUp />
					</div>
					<div className="rounded-full bg-black text-white px-5 py-3">
						{cta ? cta : "Install Now"}
					</div>
				</div>
			</div>
		</div>
	);
};

export default InstagramAds;
