import React, { Component } from 'react';
import Header from '../../components/header';
import {
	Container,
	WelcomeText,
	Username,
	Content,
	Body
} from './style'
const Welcome = ({ route, navigation }) => {
	const { username } = route.params;

	return (
		<Container>
			<Content>
				<Header {...navigation} />
				<Body>
					<WelcomeText>HELLO</WelcomeText>
					<Username>{username}</Username>
				</Body>
			</Content>
		</Container>
	);
}

export default Welcome;
