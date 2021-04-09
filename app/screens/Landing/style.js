import * as commonStyle from '../../includes/main-style';
import styled from 'styled-components';

export const Container = styled.View`
	flex:1
`;

export const Content = styled.View`
	flex:1
	padding : 20px
	justifyContent : center
	alignItems : center
	backgroundColor : black
`;

export const PageTitle = styled.Text`
	color : ${commonStyle.themeColor()}
	textAlign : center
	fontSize : ${commonStyle.getModerateScale(22)}px;
	fontFamily: Montserrat-SemiBold
    marginTop:${commonStyle.getResponsiveScreenHeight(5)}px
`;

export const ButtonWrapper = styled.View`
	marginTop : ${commonStyle.getResponsiveScreenHeight(8)}px
	alignSelf:center
`

export const LoginButton = styled.TouchableOpacity`
	height:${commonStyle.getResponsiveScreenHeight(6)}
	width:${commonStyle.getResponsiveScreenWidth(70)}
	border-radius: 18px;
	justifyContent : center
`;

export const ButtonContainerSap = styled.View`
	marginTop : ${commonStyle.getResponsiveScreenHeight(2)}px
`
export const LoginButtonText = styled.Text`
	color:black
	textAlign:center
	fontSize : ${commonStyle.getModerateScale(15)}px;
	fontFamily: Montserrat-Bold
`
