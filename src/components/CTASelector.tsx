import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const CTAOptions: string[] = [
	"Book Now",
	"Download",
	"Install Now",
	"Learn More",
	"Listen Now",
	"Play Game",
	"Shop Now",
	"Sign Up",
	"Use App",
	"Watch More",
	"Watch Video",
	"Open Link",
];

function CTASelector() {
	return (
		<Select>
			<SelectTrigger>
				<SelectValue placeholder="Select CTA" />
			</SelectTrigger>
			<SelectContent>
				{CTAOptions.map((cta) => {
					return (
						<SelectItem key={Math.random()} value={cta}>
							{cta}
						</SelectItem>
					);
				})}
			</SelectContent>
		</Select>
	);
}

export default CTASelector;
