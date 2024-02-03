import { Camera } from "lucide-react";
import { Input } from "../ui/input";
import { useAppContext } from "@/context/context";
import { ChangeEvent, useEffect, useRef } from "react";
export default function AdvertiseInformation() {
	const { adsData, setAdsData } = useAppContext();

	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const handleOnchange = (e: ChangeEvent) => {
		setAdsData({
			...adsData,
			profileName: (e.target as HTMLInputElement).value,
		});
	};

	const handleOnchange2 = (e: ChangeEvent) => {
		setAdsData({
			...adsData,
			profilePic: URL.createObjectURL(
				(e.target as HTMLInputElement).files?.[0] as File
			),
		});
	};
	const handleClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	useEffect(() => {
		console.log(adsData.profilePic);
	}, [adsData.profilePic]);

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
						src={adsData.profilePic}
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
					value={adsData.profileName}
					onChange={handleOnchange}
					className="flex-grow"
				/>
			</div>
		</>
	);
}
