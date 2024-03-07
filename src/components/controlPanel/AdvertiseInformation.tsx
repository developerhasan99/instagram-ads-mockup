import { Camera } from "lucide-react";
import { Input } from "../ui/input";
import { ChangeEvent, useRef } from "react";
import useAdsData from "@/store/adsData";

import default_profile_pic from "@/assets/images/default_profile_pic.svg";


export default function AdvertiseInformation() {
	const { profilePic, profileName, setProfileName, setProfilePic } = useAdsData()
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const handleOnchange = (e: ChangeEvent) => {
		const newValue = (e.target as HTMLInputElement).value;
		setProfileName(newValue);
	};

	const handleOnchange2 = (e: ChangeEvent) => {
		const newUrl = URL.createObjectURL(
			(e.target as HTMLInputElement).files?.[0] as File
		);
		setProfilePic(newUrl);
	};

	const handleClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	return (
		<>
			<h3 className="tracking-tight font-bold text-lg mb-2">
				Advertiser Information
			</h3>
			<p className="text-muted-foreground mb-3">
				Designate the Instagram profile that your ads will be linked to.
			</p>
			<div className="flex items-center gap-4 mb-8">
				<div className="relative">
					<img
						height={60}
						width={60}
						className="rounded-full"
						src={profilePic ? profilePic : default_profile_pic}
						alt="Profile image"
					/>
					<button
						onClick={handleClick}
						className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 shadow-lg"
					>
						<Camera color="white" />
					</button>
					<input
						onChange={handleOnchange2}
						className="hidden"
						ref={fileInputRef}
						type="file"
						accept="image/*"
					/>
				</div>
				<Input
					value={profileName}
					onChange={handleOnchange}
					className="flex-grow"
				/>
			</div>
		</>
	);
}
