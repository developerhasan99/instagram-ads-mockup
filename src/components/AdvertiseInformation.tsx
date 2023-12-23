import { Camera } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function AdvertiseInformation() {
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
				<Input className="flex-grow" />
			</div>
		</>
	);
}
