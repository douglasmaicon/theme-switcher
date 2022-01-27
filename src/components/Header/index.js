import React, { useContext } from "react";
import Switch from "react-switch";
import {Container} from './styles';
import { ThemeContext } from "styled-components";

const Header = ({toggleTheme}) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <h3>Theme Switcher usando "styled-components"</h3>
           
            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={true}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={colors.switchOff}
                onColor={colors.switchOn}                
            />
        </Container>
    )
};

export default Header;