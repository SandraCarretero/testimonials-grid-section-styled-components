import Categories from '../categories/Categories';
import style from './summary.module.css';
const Summary = ({ children }) => {
	return (
		<div className={style.container}>
			<h1 className={style.tittle}>Summary</h1>
			<div>
				<Categories></Categories>
			</div>
			<a className={style.button} href='#'>
				Continue
			</a>
		</div>
	);
};
export default Summary;
