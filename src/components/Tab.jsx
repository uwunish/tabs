import React, { useState } from "react";

function Tab({ tabsContent, onChange }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	function handleClick(index) {
		setCurrentIndex(index);
		onChange(index);
	}

	return (
		<div className="tab-container">
			<div className="tab-heading">
				{tabsContent.map((tabItem, index) => (
					<div
						className={`tab-item ${
							currentIndex === index ? "active" : ""
						}`}
						onClick={() => handleClick(index)}
						key={tabItem.label}>
						<span className="label">{tabItem.label}</span>
					</div>
				))}
			</div>
			<div className="tab-content">
				{tabsContent[currentIndex] && tabsContent[currentIndex].content}
			</div>
		</div>
	);
}

export default Tab;
