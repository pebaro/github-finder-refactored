import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

import Repos from '../repos/Repos'

const User = ({
	user, triggerGetUser, triggerGetUserRepos, loading, repos, match
}) => {
	useEffect(() => {
		triggerGetUser(match.params.login)
		triggerGetUserRepos(match.params.login)
	}, [])

	const {
		name,
		company,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable
	} = user

	if (loading) return <Spinner />

	return (
		<Fragment>
			<Link
				to='/'
				className='btn btn-light'
			>
				Back To Search
			</Link>
			<div className="card grid-2">
				<div className="all-center">
					<img
						src={avatar_url}
						className='round-img'
						alt='user avatar'
						style={{ width: '150px' }}
					/>
					<h1>{name}</h1>
					{
						location && <p>Location: {location}</p>
					}
					<span className="text-left">

					</span>
	
				</div>
				<div>
					{
						bio && (
							<Fragment>
								<h3>Bio</h3>
								<p>{bio}</p>
							</Fragment>
						)
					}

					<a
						href={html_url}
						className='btn btn-dark my-1'
						target='_blank'
						rel="noreferrer"
					>Visit GitHub Profile</a>

					<ul>
						<li>
							{
								hireable
									? <span className='profile-label'>Hireable: <i className="fas fa-check text-sucess hireable"/></span>
									: <span className='profile-label'>Hireable: <i className="fas fa-times-circle text-danger" /></span>
							}
						</li>
						<li>
							{
								login &&
								<Fragment>
										<span className='profile-label'>Username: </span>  {login}
								</Fragment>
							}
						</li>
						<li>
							{
								company &&
								<Fragment>
										<span className='profile-label'>Company: </span>  {company}
								</Fragment>
							}
						</li>
						<li>
							{
								blog &&
								<Fragment>
										<span className='profile-label'>Website: </span>  
										<a href={blog} target='_blank' rel="noreferrer">
											{blog}
										</a>
								</Fragment>
							}
						</li>
					</ul>
				</div>
			</div>

			<div className="card text-center">
				<div className="badge badge-primary">
					Followers: {followers}
				</div>
				<div className="badge badge-success">
					Following: {following}
				</div>
				<div className="badge badge-dark">
					Public Repos: {public_repos}
				</div>
				<div className="badge badge-light">
					Public Gists: {public_gists}
				</div>
			</div>

			<Repos repos={repos} />
		</Fragment>
	)
}

User.propTypes = {
	loading: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired,
	repos: PropTypes.array.isRequired,
	triggerGetUser: PropTypes.func.isRequired,
	triggerGetUserRepos: PropTypes.func.isRequired
}

export default User
