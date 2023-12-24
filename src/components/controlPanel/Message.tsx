import { Textarea } from "../ui/textarea";

const Message = () => {
	return (
		<>
			<h3 className="tracking-tight font-bold text-lg mb-2 mt-8">Message</h3>
			<p className="text-muted-foreground mb-3">
				Pique interest by providing additional details about what is being
				advertised. Keep it concise - a maximum of 90 characters is suggested.
			</p>
			<Textarea className="mb-8" />
		</>
	);
};

export default Message;
