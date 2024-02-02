import { useAppContext } from "@/context/context";
import { Input } from "../ui/input";

const LikesCount = () => {
	const { adsData, setAdsData } = useAppContext();
	const handleChange = (event: React.ChangeEvent) => {
		setAdsData({
			...adsData,
			likes: (event.target as HTMLInputElement).value,
		});
	};

	return (
		<>
			<h3 className="tracking-tight font-bold text-lg mb-2 mt-8">Likes</h3>
			<p className="text-muted-foreground mb-3">
				Establish the desired number of likes for your post. Only numerical
				inputs allowed.
			</p>
			<Input
				onChange={handleChange}
				type="number"
				value={adsData.likes}
				min={0}
			/>
		</>
	);
};

export default LikesCount;
