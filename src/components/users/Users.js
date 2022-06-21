import React from 'react'
import PropTypes from 'prop-types'

import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

const Users = ({ users, loading }) => {
	return loading ? <Spinner />
	: (
		<div style={userStyle}>
			{
				users.map(
					user => <UserItem key={user.id} singleUser={user} />
				)
			}
		</div>
	)
}

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
}

export default Users
