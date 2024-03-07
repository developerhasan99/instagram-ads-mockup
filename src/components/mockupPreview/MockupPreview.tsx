import useExportToPNG from "@/hooks/useExportToPNG";
import { Button } from "../ui/button";
import CommonAds from "./CommonAds";
import InstagramAds from "./InstagramAds";
import useAdsData from "@/store/adsData";

const MockupPreview = () => {
	const { adType } = useAdsData();
	const { elementRef, captureAndExport } = useExportToPNG();

	return (
		<div className="md:col-span-4 flex justify-center">
			<div>
				<div className="sticky top-8 mx-[-0.75rem]">
					{adType !== "instagram-story" && <CommonAds elementRef={elementRef} />}
					{adType === "instagram-story" && (
						<InstagramAds elementRef={elementRef} />
					)}
					<div className="px-3">
						<Button onClick={captureAndExport} className="w-full">
							Download Mockup
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MockupPreview;
