import * as commonStyle from '../../includes/main-style';
import styled from 'styled-components';
export const Container = styled.View`
	flex:1
`;
export const Content = styled.View`
	flex:1
	padding : 20px
	backgroundColor : black
`;
export const WelcomeText = styled.Text`
	color : ${commonStyle.themeColor()}
	alignSelf : center
	fontSize : ${commonStyle.getModerateScale(26)}px;
	fontFamily: Montserrat-SemiBold
`;
export const Body = styled.View`
	justifyContent : center
	alignItems : center
	flex:1
`;
export const Username = styled.Text`
	color : ${commonStyle.themeColor()}
	fontSize : ${commonStyle.getModerateScale(12)}px;
	fontFamily: Montserrat-SemiBold
	marginTop : 20px
	alignSelf : center
`;

