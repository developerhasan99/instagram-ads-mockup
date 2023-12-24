import { useAppContext } from "@/context/context";

type HeadingType = {
	heading: string;
	subheading: string;
};

type HeadingsObjectType = {
	[key: string]: HeadingType;
};

const headings: HeadingsObjectType = {
	"mobile-app-install": {
		heading: "App Install",
		subheading:
			"Interact with your audience using visually appealing content to drive app installations and usage.",
	},
	"website-clicks": {
		heading: "Website Clicks",
		subheading:
			"Direct visitors to crucial parts of your website or encourage specific actions, such as purchasing a product.",
	},
	"video-post": {
		heading: "Video Post",
		subheading:
			"Encourage your desired outcome using video content to engage your audience.",
	},
	"photo-post": {
		heading: "Photo Post",
		subheading:
			"Achieve your desired outcome by utilizing photographs to connect with your audience.",
	},
	"instagram-story": {
		heading: "Instagram Story",
		subheading:
			"Connect with your target audience and achieve your desired outcome using visually appealing content.",
	},
};

function Headings() {
	const { tab } = useAppContext();
	return (
		<>
			<h3 className="tracking-tight font-bold text-3xl mb-3">
				{headings[tab].heading}
			</h3>
			<p className="text-muted-foreground mb-8">{headings[tab].subheading}</p>
		</>
	);
}

export default Headings;
