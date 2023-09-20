import React, { useState } from 'react';
import Select from './Select';
import data from './data.json';

const App = () => {
	const [selectedOption, setSelectedOption] = useState(null)

	const handleSelect = (option) => {
		setSelectedOption(option)
	}

	return (
		<div>
			<h1>Select</h1>
			<Select data={data} onSelect={handleSelect} />
		</div>
	)
}

export default App;
