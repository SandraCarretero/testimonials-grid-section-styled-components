import style from './categories.module.css';
const Categories = ({ children, icon }) => {
	return (
		<div className={style.container}>
			<div className={`${style.category} ${style.redcat}`}>
				<img src='icon-reaction.svg' alt='' />
				<h1 className={`${style.tittle} ${style.red}`}>Reaction</h1>
				<p className={style.score}>
					80/<span>100</span>
				</p>
			</div>
			<div className={`${style.category} ${style.yellowcat}`}>
				<img src='icon-memory.svg' alt='' />
				<h1 className={`${style.tittle} ${style.yellow}`}>Memory</h1>
				<p className={style.score}>
					92/<span>100</span>
				</p>
			</div>
			<div className={`${style.category} ${style.greencat}`}>
				<img src='icon-verbal.svg' alt='' />
				<h1 className={`${style.tittle} ${style.green}`}>Verbal</h1>
				<p className={style.score}>
					61/<span>100</span>
				</p>
			</div>
			<div className={`${style.category} ${style.bluecat}`}>
				<img src='icon-visual.svg' alt='' />
				<h1 className={`${style.tittle} ${style.blue}`}>Visual</h1>
				<p className={style.score}>
					73/<span>100</span>
				</p>
			</div>
		</div>
	);
};
export default Categories;
