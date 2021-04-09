import React from 'react';
import {ButtonContainer, ButtonText,ButtonImage} from './style';
import LinearGradient from 'react-native-linear-gradient';
import {getResponsiveScreenHeight} from '../../includes/main-style';

const CustomButton = props => (
	<LinearGradient start={{x: 2.0, y: 2.0}} end={{x: 0.0, y: .0}} colors={[ '#FFFFFF','#EAAF42',]} style={{borderRadius:getResponsiveScreenHeight(6)}}>
		<ButtonContainer
			onPress={props.onClick}
			backgroundColor={props.backgroundColor}
		> 
			<ButtonText textColor={props.textColor}>{props.text}</ButtonText>
		</ButtonContainer>
	</LinearGradient>
);
export default CustomButton;
