import React, { useState, useEffect, useRef } from 'react';
import { Text, SafeAreaView, ScrollView, View, Alert } from 'react-native';
import * as commonStyle from '../../includes/main-style';
import Header from '../../components/header';
import Button from '../../components/button';
import { 
	Container,  
	GoogleImageCenter, 
	GoogleTouchCenter, 
	SaparatorButton, 
	Content, 
	Imagewrapper, 
	GoogleTouch, 
	GoogleImage, 
	OrText, 
	SaparatorOr,  
	SignInText, 
	WelcomeText, 
	TextInput, 
	FormContainer, 
	Saparator } from './style'

const Login=({ navigation }) =>{
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const goIn = async () => {
		let rjxemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
		let isEmailValid = rjxemail.test(email);
		if (!email.trim()) {
			showAlert("Please enter a email");
			return false;
		}
		else if (!password.trim()) {
			showAlert("Please enter valid password");
			return false;
		}
		else if (!isEmailValid) {
			showAlert("Please enter a valid email");
			return false;
		}
		else {
			//Api service will go here
			navigation.navigate('Welcome', {
            	username: email
          	});
			setEmail("");
			setPassword("");
		}
	}

	const showAlert = (msg) =>{
		Alert.alert(
			"",
			msg,
		);
	}

	return (
		<Container>
			<Content>
				<ScrollView>
					<SafeAreaView>
						<Header 
							{...navigation} />
						<SignInText>
							Let’s sign you in.
                    	</SignInText>

						<WelcomeText>
							Welcome back.{'\n'}
						</WelcomeText>

						<Saparator />

						<FormContainer>
							<TextInput
								placeholder="Email"
								placeholderTextColor={'#9AA1B0'}
								placeholderStyle={{ left: 20 }}
								onChangeText={text => setEmail(text)}
								value={email}
							/>
							<Saparator />
							<TextInput
								placeholder="Password"
								placeholderTextColor={'#9AA1B0'}
								placeholderStyle={{ left: 20 }}
								onChangeText={text => setPassword(text)}
								value={password}
								secureTextEntry={true}
							/>
						</FormContainer>

						<SaparatorOr />

						<OrText>
							or
                		</OrText>

						<Imagewrapper>
							<GoogleTouchCenter 
								onPress={() => showAlert("Cooming soon")}>
								<GoogleImageCenter 
									source={require('../../assets/google.png')} />
							</GoogleTouchCenter>
						</Imagewrapper>

						<SaparatorButton />

						<Button
							text="Sign In"
							onClick={() => goIn()}
							textColor="white"
							backgroundColor={commonStyle.themeColor()} />
					</SafeAreaView>
				</ScrollView>
			</Content>
		</Container>
	);
}
export default Login;