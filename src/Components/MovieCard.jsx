import React from 'react';

const MovieCard = ({
	title,
	release_date,
	poster_path,
	vote_average,
	overview,
	id,
}) => {
	return (
		<div className='card__body col-lg-3 col-md-4 col-sm-6'>
			<div className='movie-card'>
				<div className='rate'>
					<span
						className={`badge rounded-pill badge-pill ${vote_average >= 7.5? 'bg-success': vote_average >= 5.5? 'bg-warning': 'bg-danger'}`}
					>
						{vote_average}
					</span>
				</div>
				<div className='img-card'>
					<img
						className='poster-img'
						src={
							poster_path
								? `${'https://image.tmdb.org/t/p/w500/'}${poster_path}`
								: 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'
						}
						alt={`${title}`}
					/>
				</div>
				<div className='details'>
					<p>{title}</p>
					<p>Release Date: {release_date}</p>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
