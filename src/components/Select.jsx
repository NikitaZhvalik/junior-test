import { useState, useEffect, useRef } from 'react';

import './style.css';

const Select = ({ data, onSelect }) => {
	const [isFocused, setIsFocused] = useState(false)
	const [value, setValue] = useState('')
	const [names, setNames] = useState(data)
	const [selectedIndex, setSelectedIndex] = useState(-1)

	const handleSelect = (selectedValue) => {
		setValue(selectedValue.name)
		setIsFocused(false)
		setSelectedIndex(names.indexOf(selectedValue))
		onSelect(selectedValue)
	}

	const handleInputChange = (event) => {
		const inputValue = event.target.value.toLowerCase()
		setValue(inputValue)

		const filteredNames = data.filter((option) => option.name.toLowerCase().includes(inputValue))
		setNames(filteredNames)
		setSelectedIndex(-1)
	}

	const handleFocus = () => {
		setIsFocused(true)
	}

	const handleKeyDown = (event) => {
		if (event.key === 'ArrowUp') {
			event.preventDefault()
			setSelectedIndex((prevIndex) =>
				prevIndex > 0 ? prevIndex - 1 : names.length - 1
			)
		} 
		else if (event.key === 'ArrowDown') {
			event.preventDefault()
			setSelectedIndex((prevIndex) =>
				prevIndex < names.length - 1 ? prevIndex + 1 : 0
			)
		} 
		else if (event.key === 'Enter') {
			event.preventDefault()
			if (selectedIndex !== -1) {
				handleSelect(names[selectedIndex])
			}
		}
		if (event.key === 'Enter' && selectedIndex === -1) {
		handleInputChange(event)
		}
	}

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
		<input
			type="text"
			value={value}
			onChange={handleInputChange}
			onFocus={handleFocus}
			onKeyDown={handleKeyDown}
			placeholder="Select"
		/>
		{isFocused && (
			<ul ref={selectRef}>
			{names.map((option, index) => (
				<li
				key={option.name}
				onClick={() => handleSelect(option)}
				className={selectedIndex === index ? 'selected' : ''}
				>
				{option.name}
				</li>
			))}
			</ul>
		)}
		</div>
	)
}

export default Select;
