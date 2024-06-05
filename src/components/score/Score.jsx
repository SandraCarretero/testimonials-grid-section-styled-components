import style from './score.module.css';
const Score = () => {
	return (
		<div className={style.container}>
			<h1 className={style.title}>Great</h1>
			<p>Your performance exceed 65% of the people conducting the test here!</p>
		</div>
	);
};
export default Score;
