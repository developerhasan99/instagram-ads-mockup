import { Input } from "../ui/input";
import useAdsData from "@/store/adsData";

const LikesCount = () => {
	const { likes, setLikes } = useAdsData();

	const handleChange = (event: React.ChangeEvent) => {
		const numLike = parseInt((event.target as HTMLInputElement).value || '0')
		setLikes(numLike)
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
				value={likes}
				min={0}
			/>
		</>
	);
};

export default LikesCount;
