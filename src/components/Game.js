import React from 'react';

const Game = props => {
	const { active, view, eid, hnn, vnn, q, vs, hs, d, t, rz, v, h, p } = props;
	const final = q === 'F';
	const homeScore = q !== 'P' ? hs : null;
	const visitorScore = q !== 'P' ? vs : null;
	const homeWin = homeScore > visitorScore ? ' game__team--winner' : '';
	const visitorWin = visitorScore > homeScore ? ' game__team--winner' : '';
	const gameTime = final ? 'Final' : d + ' ' + t;
	const finalClass = final ? ' game--final' : '';
	const redZone = rz == 1 ? ' game--redzone' : '';
	const homePos = p === h ? ' game__team--pos' : '';
	const visitorPos = p === v ? ' game__team--pos' : '';
	const toggleTrue = () => true;
	const toggleGame = view ? props.toggleGame : toggleTrue;
	const disabledGame = view && (active === false) ? ' game--disabled' : '';
	return (
		<div className={'game' + finalClass + redZone + disabledGame}>
			{view && <button type="button" onClick={toggleGame.bind(null, eid)}>X</button>}
			<div className={'game__team' + visitorWin + visitorPos}><span className="game__teamname">{vnn}</span> {visitorScore}</div>
			<div className={'game__team' + homeWin + homePos}><span className="game__teamname">{hnn}</span> {homeScore}</div>
			<div className="game__time">{gameTime}</div>
		</div>
	);
};

export default Game;
