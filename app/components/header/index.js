import React from "react";
import { BackImage, BackTouch } from './style'
const Header = (props) => {
    return (
        <BackTouch onPress={()=>props.goBack()} >
            <BackImage source={require('../../assets/back-arrow.png')} />
        </BackTouch>
    )
}
export default Header;