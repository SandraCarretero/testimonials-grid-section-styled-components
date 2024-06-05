import Score from '../score/Score';
import style from './result.module.css';
const Result = ({ children }) => {
	return (
		<div className={style.container}>
			<h1 className={style.title}>Your Result</h1>
			<div className={style.scorecontainer}>
				<h1 className={style.score}>76</h1>
				<p className={style.target}>of 100</p>
			</div>
			<Score></Score>
		</div>
	);
};
export default Result;
