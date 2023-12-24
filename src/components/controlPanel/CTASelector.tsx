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
		<>
			<h3 className="tracking-tight font-bold text-lg mb-2">
				Your Call to Action
			</h3>
			<p className="text-muted-foreground mb-3">
				Urge people to take action with a clear call-to-action button.
			</p>
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
		</>
	);
}

export default CTASelector;
