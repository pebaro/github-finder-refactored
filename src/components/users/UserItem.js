import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({ singleUser: { login, avatar_url, html_url } }) => {
	return (
		<div className="card text-center">
			<img
				src={avatar_url}
				alt='avatar'
				className='github-avatar'
			/>

			<h3>{login}</h3>

			<Link
				to={`/user/${login}`}
				className="btn btn-dark btn-sm my-1"
				rel="noreferrer"
			>More info</Link>
		</div>
	)
}

UserItem.propTypes = {
	singleUser: PropTypes.object.isRequired
}

export default UserItem
