import styled from 'styled-components';

const StyledCard = styled.div`
	background-color: blue;
	grid-area: ${({ $grid }) => $grid};
	border-radius: 10px;
	background-color: ${({ $bgcolor }) => $bgcolor};
	box-shadow: 0px 0px 19px -3px rgba(0, 0, 0, 0.35);
	position: relative;
`;
const Profile = styled.div`
	display: grid;
	align-items: center;
	gap: 0px;
	padding-top: 26px;
	margin-left: 32px;
	margin-right: 32px;
	margin-bottom: 32px;
	height: fit-content;
`;
const StyledProfile = styled.div`
	display: flex;
	gap: 17px;
`;
const StyledProfilePhoto = styled.div`
	img {
		width: 32px;
		border-radius: 50%;
	}
	text-align: center;
	border: 2px solid ${({ $borderColor }) => $borderColor};
	border-radius: 50%;
`;
const StyledProfileInfo = styled.div`
	margin-top: 0x;
`;
const StyledName = styled.p`
	color: white;
	font-size: 13px;
	margin: 2px;
	color: ${({ $color }) => $color};
`;
const StyledProfession = styled.p`
	color: white;
	font-size: 11px;
	opacity: 50%;
	margin: 2px;
	color: ${({ $color }) => $color};
`;
const StyledPrincipalText = styled.h1`
	color: ${({ $color }) => $color};
	font-size: 20px;
	font-weight: 500;
	margin-top: 18px;
	font-family: 'Barlow Semi Condensed';
	margin-bottom: 0;
	z-index: 1;
`;
const StyledSecondaryText = styled.p`
	color: ${({ $color }) => $color};
	font-size: 13px;
	font-weight: 500;
	margin-top: 18px;
	font-family: 'Barlow Semi Condensed';
	margin-top: 16px;
	margin-bottom: 0;
	opacity: 70%;
	@media only screen and (max-width: 425px) {
		margin-bottom: 20px;
	}
`;
const StyledImgBg = styled.div`
	position: absolute;
	top: 0;
	right: 80px;
	z-index: 0;
	@media only screen and (max-width: 425px) {
		right: 10px;
	}
`;

export {
	StyledCard,
	Profile,
	StyledProfilePhoto,
	StyledProfileInfo,
	StyledName,
	StyledProfession,
	StyledPrincipalText,
	StyledProfile,
	StyledSecondaryText,
	StyledImgBg
};
