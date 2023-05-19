import styled, { css } from 'styled-components';
import { animated } from '@react-spring/web';

export const VerticalNavBarContainer = styled(animated.div)`
  background-color: #FCF5DD;
  height: 100%;
  overflow: hidden;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 30;
  border-radius: 1rem;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
  font-family: 'Poppins';

  ${VerticalNavBarContainer} {
    position: sticky;
    min-height: 100vh;
    flex-shrink: 0;
    left: 0;
    top: 0;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.75rem;
  gap: 2rem;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-left: 1rem;
`;

export const Divider = styled.div`
  margin: 1rem 1rem;
  width: calc(100% - 2rem);
  height: 1px;
  background-color: gray;
`;

const FocusedMenuItemCss = css`
  background-color: rgba(0, 0, 0, 0.2);
`;

export const MenuItem = styled.button<{ $focused?: boolean }>`
  padding: 0.8rem 0.8rem;
  margin: 0;

  background-color: transparent;
  border: none;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;

  border-radius: 0.5rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  ${(p) => p.$focused && FocusedMenuItemCss}
`;

const IconSize = '2.5rem';

export const Icon = styled.div`
  color: black;
  width: ${IconSize};
  height: ${IconSize};
  svg {
    width: ${IconSize};
    height: ${IconSize};
    color: inherit;
  }
`;

export const NavToggleIconButton = styled(Icon)`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0.8rem 0.8rem;
  margin-right: 0.75rem;
  margin-left: auto;
  color: green;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const MenuItemText = styled.p`
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  white-space: nowrap;
  color: black;

  text-align: left;

  padding-left: 1rem;
  margin: 0;

  flex: 1;
`;

export const MenuSubItemText = styled(MenuItemText)`
  font-size: 1.2rem;
`;

export const Logo = styled(animated.div)`
  padding: 0 0.6rem;
  padding-left: 1.5rem;
  margin: 0 0.75rem;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EE504F;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
`;

export const Button = styled.button`
  background: #EE504F;
  border-radius: 8px;
  padding: 0.5rem 2rem;
  font-family: 'Poppins';
  color: white;
  font-size: 1.5rem;
  border: none;
`;