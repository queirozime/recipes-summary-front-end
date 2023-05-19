import React, { useState } from "react";
import * as easings from 'd3-ease';
import { useSpring } from '@react-spring/web';
import { MenuBook } from '@material-ui/icons'
import { Icon, Menu, MenuItem, MenuSubItemText, Section, VerticalNavBarContainer } from "./nav-styles";

const VerticalNavbar: React.FC = () => {
    const MAX_WIDTH = 15
    const MIN_WIDTH = 15
    const [isOpen, setIsOpen] = useState(false)

    const { width } = useSpring({
        to: { width: isOpen ? MAX_WIDTH : MIN_WIDTH },
        from: { width: isOpen ? MIN_WIDTH : MAX_WIDTH },
        config: {
          duration: 500,
          easing: easings.easeExp,
        },
      });

    return (
        <VerticalNavBarContainer style={{ width: width.to((v) => `${v}rem`) }}>
            <Section>
                <Menu>
                  <MenuItem
                    as="button"
                    onClick={() => {
                      
                    }}
                  >
                    <Icon> <MenuBook /> </Icon>
                    <MenuSubItemText>{'Receitas'}</MenuSubItemText>
                  </MenuItem>
                </Menu>

            </Section>
        </VerticalNavBarContainer>
    )
}

export default VerticalNavbar;