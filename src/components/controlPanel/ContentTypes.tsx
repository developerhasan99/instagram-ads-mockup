import image_type_mockup from "@/assets/images/ig_ads_mockup_type_image.svg";
import video_type_mockup from "@/assets/images/ig_ads_mockup_type_video.svg";
import carousel_type_mockup from "@/assets/images/ig_ads_mockup_type_carousel.svg";

import { Button } from "../ui/button";
import useAdsData from "@/store/adsData";

type ContentType = {
	key: string;
	imageSrc: string;
	text: string;
};

type ContentTypesTabType = {
	[key: string]: ContentType[];
};

const contentTypesTab: ContentTypesTabType = {
	"mobile-app-install": [
		{
			key: "image",
			imageSrc: image_type_mockup,
			text: "Image",
		},
		{ key: "video", imageSrc: video_type_mockup, text: "Video" },
		{ key: "carousel", imageSrc: carousel_type_mockup, text: "Carousel" },
	],
	"website-clicks": [
		{
			key: "image",
			imageSrc: image_type_mockup,
			text: "Image",
		},
		{ key: "video", imageSrc: video_type_mockup, text: "Video" },
		{ key: "carousel", imageSrc: carousel_type_mockup, text: "Carousel" },
	],
	"video-post": [],
	"photo-post": [],
	"instagram-story": [
		{ key: "image", imageSrc: image_type_mockup, text: "Image" },
		{ key: "video", imageSrc: video_type_mockup, text: "Video" },
	],
};

function ContentTypes() {
	const { adType, contentType, setContentType } = useAdsData();

	const handleContentTypeChange = (nextContentType: string) => {
		setContentType(nextContentType);
	};

	return (
		<>
			{contentTypesTab[adType].length !== 0 && (
				<>
					<h3 className="tracking-tight font-bold text-lg mb-3">
						Select your content type:
					</h3>
					<div className="flex gap-4 mb-10">
						{contentTypesTab[adType].map((contentTab) => {
							return (
								<Button
									onClick={() => {
										handleContentTypeChange(contentTab.key);
									}}
									key={Math.random()}
									className="inline-block max-w-[170px] h-auto p-2 rounded-md"
									variant={
										contentType === contentTab.key ? "default" : "outline"
									}
								>
									<div className="mb-2 flex justify-center">
										<img src={contentTab.imageSrc} alt={contentTab.text} />
									</div>
									{contentTab.text}
								</Button>
							);
						})}
					</div>
				</>
			)}
		</>
	);
}

export default ContentTypes;
