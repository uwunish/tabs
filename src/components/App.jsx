import React from "react";
import Tab from "./Tab";

function App() {
	function randomContent() {
		return "This is random tab 3";
	}

	const tabs = [
		{
			label: "Tab 1",
			content: "This is tab 1",
		},
		{
			label: "Tab 2",
			content: "This is tab 2",
		},
		{
			label: "Tab 3",
			content: randomContent(),
		},
	];

	function handleChange(index) {
		console.log(index);
	}

	return (
		<div className="app-container">
			<Tab tabsContent={tabs} onChange={handleChange} />
		</div>
	);
}

export default App;
