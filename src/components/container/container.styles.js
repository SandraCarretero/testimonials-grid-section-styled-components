import styled from 'styled-components';

const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 10px;
	grid-template-areas:
		'first first second third'
		'fourth five five third';

	height: 500px;
	margin: 100px auto;
	width: 85%;
	@media only screen and (max-width: 425px) {
		display: block;
	}
`;
export { StyledContainer };
