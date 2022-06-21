import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ submitUsersSearch, showClearUsers, triggerClearUsers, setAlert }) => {

	const [text, setText] = useState('')
	
	const onSubmit = e => {
		e.preventDefault()

		if (text === '') {
			setAlert('Please enter a search term or phrase...', 'light')
		} else {
			submitUsersSearch(text)
			setText('')
		}
	}

	const onChange = e => setText(e.target.value)

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input
					type="text"
					name="text"
					placeholder="Search Users..."
					value={text}
					onChange={onChange}
				/>
				<input
					type="submit"
					value="Search Users"
					className="btn btn-dark btn-block"
				/>
			</form>
			{
				showClearUsers &&
				(
					<button
						className="btn btn-light btn-block"
						onClick={triggerClearUsers}
					>
						Clear Results
					</button>
				)
			}
		</div>
	)
}
Search.propTypes = {
	submitUsersSearch: PropTypes.func.isRequired,
	triggerClearUsers: PropTypes.func.isRequired,
	showClearUsers: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
}

export default Search
