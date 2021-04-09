import styled from 'styled-components';
import {getResponsiveScreenHeight, getModerateScale,getResponsiveScreenWidth} from '../../includes/main-style';

export const ButtonContainer = styled.TouchableOpacity`
	height:${getResponsiveScreenHeight(6)}
	border-radius: ${getResponsiveScreenHeight(2)}
	justify-content : center
	align-items : center
	paddingRight : 14%
	paddingLeft : 14%
 	
`;

export const ButtonText = styled.Text`
	fontSize: ${getModerateScale(18)}
	color: black;
	text-align: center;
	alignSelf: center;
    fontFamily:Montserrat-Bold	
`;
