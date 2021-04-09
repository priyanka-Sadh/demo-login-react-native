import React from 'react';
import { 
    Container, 
    RegisterButtonText, 
    LoginButtonText, 
    Content, 
    PageTitle, 
    LoginButton, 
    ButtonWrapper, 
    ButtonContainerSap } from "./style";
import LinearGradient from 'react-native-linear-gradient';
import { getResponsiveScreenHeight} from '../../includes/main-style';

const landing=({ navigation }) =>{
    return (
        <Container>
            <Content>
                <PageTitle>POS SYSTEM</PageTitle>
                <ButtonWrapper>
                    <ButtonContainerSap />
                    <LinearGradient 
                        start={{ x: 2.0, y: 2.0 }} 
                        end={{ x: 0.0, y: .0 }} 
                        colors={['#FFFFFF', '#EAAF42',]} 
                        style={{ borderRadius: getResponsiveScreenHeight(4) }}>
                        
                        <LoginButton onPress={() => navigation.navigate("Login")}>
                            <LoginButtonText>
                                Sign In
                            </LoginButtonText>
                        </LoginButton>

                    </LinearGradient>
                </ButtonWrapper>
            </Content>
        </Container>
    );
}

export default landing;