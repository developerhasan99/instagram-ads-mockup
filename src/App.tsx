import TabTriggers from "./components/TabTriggers";
import ControlPanel from "./components/controlPanel/ControlPanel.tsx";
import MockupPreview from "./components/mockupPreview/MockupPreview.tsx";

const App: React.FC = () => {
	return (
		<div className="max-w-screen-lg m-auto py-8 px-4">
			<h2 className="font-bold text-2xl tracking-tight mb-3">
				Select your ads type:
			</h2>
			<TabTriggers />
			<div className="grid md:grid-cols-9 gap-8">
				<ControlPanel />
				<MockupPreview />
			</div>
		</div>
	);
};

export default App;
