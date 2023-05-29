import React, { useState } from "react";
import * as easings from 'd3-ease';
import { useSpring } from '@react-spring/web';
import { useNavigate } from "react-router-dom";
import { AccountCircle, FormatListBulleted, LocalDining } from '@material-ui/icons'
import { Icon, Logo, Menu, MenuItem, MenuSubItemText, Section, VerticalNavBarContainer } from "./nav-styles";
import { BrandIcon } from "../../assets/icons";

const VerticalNavbar: React.FC = () => {
    const MAX_WIDTH = 15
    const MIN_WIDTH = 15
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    
    const isSelected = (page: string) => {
      return window.location.pathname === page
    }
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
              <Logo onClick={() => navigate('/')}>
                <BrandIcon />
              </Logo>
              <Menu>
                <MenuItem
                  as="button"
                  onClick={() => {
                    navigate('/user')
                  }}
                  $focused={isSelected('/user')}
                >
                  <Icon> <AccountCircle /> </Icon>
                  <MenuSubItemText>{'Usuário'}</MenuSubItemText>
                </MenuItem>
                <MenuItem
                  as="button"
                  onClick={() => {
                    navigate('/')
                  }}
                  $focused={isSelected('/')}
                >
                  <Icon> <LocalDining /> </Icon>
                  <MenuSubItemText>{'Receitas'}</MenuSubItemText>
                </MenuItem>
                <MenuItem
                  as="button"
                  onClick={() => {
                    navigate('/lists')
                  }}
                  $focused={isSelected('/lists')}
                >
                  <Icon> <FormatListBulleted /> </Icon>
                  <MenuSubItemText>{'Listas'}</MenuSubItemText>
                </MenuItem>
              </Menu>
            </Section>
          </VerticalNavBarContainer>
    );

}
export default VerticalNavbar;