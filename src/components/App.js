import { useState, useEffect, useRef } from 'react';
import data from './data.json';

const App = () => {
	const [isFocused, setIsFocused] = useState(false)
	const [value, setValue] = useState('')
	const [names, setNames] = useState(data)

	const handleSelect = (selectedValue) => {
		setValue(selectedValue.name)
		setIsFocused(false)
	};

	const handleInputChange = (event) => {
		const inputValue = event.target.value.toLowerCase()
		setValue(inputValue)

		const filteredNames = data.filter((option) =>
		option.name.toLowerCase().includes(inputValue)
		)
		setNames(filteredNames)
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
		document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const handleClickOutside = (event) => {
		if (selectRef.current && !selectRef.current.contains(event.target)) {
			setIsFocused(false)
		}
	}

	const selectRef = useRef(null)

	return (
		<div>
			<h1>Select</h1>
			<input
				type="text"
				value={value}
				onChange={handleInputChange}
				onFocus={handleFocus}
				placeholder="Select"
			/>
			{isFocused && (
				<ul ref={selectRef}>
				{names.map((option) => (
					<li key={option.name} onClick={() => handleSelect(option)}>
					{option.name}
					</li>
				))}
				</ul>
			)}
		</div>
	)
}

export default App;
