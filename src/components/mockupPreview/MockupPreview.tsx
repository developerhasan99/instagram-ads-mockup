import useExportToPNG from "@/hooks/useExportToPNG";
import { Button } from "../ui/button";
import CommonAds from "./CommonAds";
import { useAppContext } from "@/context/context";
import InstagramAds from "./InstagramAds";

const MockupPreview = () => {
	const { tab } = useAppContext();
	const { elementRef, captureAndExport } = useExportToPNG();

	return (
		<div className="md:col-span-4 flex justify-center">
			<div>
				<div className="sticky top-8 mx-[-0.75rem]">
					{tab !== "instagram-story" && <CommonAds elementRef={elementRef} />}
					{tab === "instagram-story" && (
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
