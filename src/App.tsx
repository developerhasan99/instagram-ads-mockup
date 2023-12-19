import TabTriggers from "./components/TabTriggers";

function App() {
	return (
		<div className="max-w-screen-lg m-auto py-8 px-4">
			<h2 className="font-bold text-2xl tracking-tight mb-3">
				Select your ads type:
			</h2>
			<TabTriggers />
			<div className="grid md:grid-cols-9 gap-8">
				<div className="md:col-span-5"></div>
				<div className="md:col-span-4  border border-1 border-gray-200 p-3 rounded-lg"></div>
			</div>
		</div>
	);
}

export default App;
