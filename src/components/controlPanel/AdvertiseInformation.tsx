import { Camera } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useAppContext } from "@/context/context";
import { ChangeEvent } from "react";

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
			<div className="flex gap-4 mb-8">
				<Button variant="secondary" style={{ width: 80 }}>
					<Camera />
				</Button>
				<Input
					value={adsData.profileName}
					onChange={handleOnchange}
					className="flex-grow"
				/>
			</div>
		</>
	);
}
