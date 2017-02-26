import React from 'react';
import Game from './Game';

const ScoreBoard = props => {
	const { gms, w, events, view } = props;
	const games = gms.map((game, i) => {
		if (game.active !== false || view) {
			return <Game key={i} {...game} view={view} {...events} />;
		}
	});
	const editActive = view ? ' scoreboard__button--active' : '';
	return (
		<div className="scoreboard">
			<header className="scoreboard__header">
				<h1 className="scoreboard__title">Week {w}</h1>
				<button type="button" className={'scoreboard__button' + editActive} onClick={events.toggleView}>Edit</button>
			</header>
			{games}
		</div>
	);
};

export default ScoreBoard;
