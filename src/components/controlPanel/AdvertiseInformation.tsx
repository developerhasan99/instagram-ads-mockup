import { Camera } from "lucide-react";
import { Input } from "../ui/input";
import { useAppContext } from "@/context/context";
import { ChangeEvent } from "react";
import profile_pic from "../../assets/images/your-logo.svg";

export default function AdvertiseInformation() {
	const { adsData, setAdsData } = useAppContext();

	const handleOnchange = (e: ChangeEvent) => {
		setAdsData({
			...adsData,
			profileName: (e.target as HTMLInputElement).value,
		});
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
						src={profile_pic}
						alt="Profile image"
					/>
					<button className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 shadow-lg">
						<Camera color="white" />
					</button>
				</div>
				<Input
					value={adsData.profileName}
					onChange={handleOnchange}
					className="flex-grow"
				/>
			</div>
		</>
	);
}
