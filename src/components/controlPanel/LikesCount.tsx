import { Input } from "../ui/input";

const LikesCount = () => {
	return (
		<>
			<h3 className="tracking-tight font-bold text-lg mb-2 mt-8">Likes</h3>
			<p className="text-muted-foreground mb-3">
				Establish the desired number of likes for your post. Only numerical
				inputs allowed.
			</p>
			<Input type="number" />
		</>
	);
};

export default LikesCount;
