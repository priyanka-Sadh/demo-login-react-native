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
export const SignInText = styled.Text`
	color : white
	fontSize : ${commonStyle.getModerateScale(30)}px;
	fontFamily: Montserrat-Bold
    marginTop:${commonStyle.getResponsiveScreenHeight(5)}px
`;
export const WelcomeText = styled.Text`
	color : #FEFEFE
	fontSize : ${commonStyle.getModerateScale(28)}px;
	fontFamily: Montserrat-Regular
    marginTop:${commonStyle.getResponsiveScreenHeight(5)}px
`;
export const FormContainer = styled.View`
	justifyContent : center
    marginTop:${commonStyle.getResponsiveScreenHeight(2)}px

`;
export const TextInput = styled.TextInput`
	background : black
	height : ${commonStyle.getModerateScale(50)}px
	border-radius: 5px;
	borderColor: #FEFEFE; borderWidth: 1
	color : white
	fontSize: ${commonStyle.getModerateScale(12)}px
	width : 100%
	align-self : center
	justifyContent : center
	alignItems : center
	paddingLeft:10px
`;
export const Saparator = styled.View`
	marginTop:${commonStyle.getResponsiveScreenHeight(4)}px
`
export const ForgotWrapper = styled.TouchableOpacity`
	marginTop:${commonStyle.getResponsiveScreenHeight(2)}px
`
export const ForgotText = styled.Text`
	color : #9AA1B0
	fontSize : ${commonStyle.getModerateScale(14)}px
	fontFamily: Montserrat-SemiBold
    alignSelf:flex-end
`;

export const SaparatorOr = styled.View`
	marginTop:${commonStyle.getResponsiveScreenHeight(6)}px
`
export const OrText = styled.Text`
	color : #9AA1B0
	fontSize : ${commonStyle.getModerateScale(14)}px
	fontFamily: Montserrat-SemiBold
    alignSelf:center
`;

export const Imagewrapper = styled.View`
	marginTop:${commonStyle.getResponsiveScreenHeight(2)}px
	flexDirection : row
	alignSelf:center
`;

export const GoogleTouchCenter = styled.TouchableOpacity`
	marginTop:${commonStyle.getResponsiveScreenHeight(0)}px
	alignSelf:center
`;
export const GoogleTouch = styled.TouchableOpacity``

export const GoogleImageCenter = styled.Image`
	marginTop:${commonStyle.getResponsiveScreenHeight(0)}px
`;

export const GoogleImage = styled.Image`
	marginLeft:${commonStyle.getModerateScale(15)}px
`;

export const SaparatorButton = styled.View`
	marginTop:30
`;