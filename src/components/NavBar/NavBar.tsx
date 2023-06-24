import { useContext } from "react";
import { IconContext } from "react-icons";
import { BiPhotoAlbum } from "react-icons/bi";
import styled, { useTheme } from "styled-components";
import { Paragraph } from "../Typography";

const StyledNav = styled.nav`
  // position
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;

  // size
  width: 100%;
  height: ${({ theme }) => theme.misc.navBar.height};

  // color
  background-color: ${({ theme }) => theme.colors.accent.primary};
  /* background-color: transparent; */
  box-shadow: ${({ theme }) => theme.misc.boxShadow};

  transition: background-color 0.3s, box-shadow 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavContentContainer = styled.div`
  height: inherit;
  margin: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LinkContainer = styled.span`
  a {
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.base.white};
  }
`;

const Links = () => {
  return <LinkContainer></LinkContainer>;
};

const ScrollCheck = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.misc.navBar.height};
`;

const NavBar = () => {
  const { colors } = useTheme();

  return (
    <>
      <StyledNav>
        <NavContentContainer>
          <IconContext.Provider
            value={{ size: "3rem", color: colors.base.white }}
          >
            <BiPhotoAlbum />
          </IconContext.Provider>
          <div style={{ flexGrow: 1 }} />
          <Links />
          <Paragraph>
            <strong>Flashback</strong>
          </Paragraph>
        </NavContentContainer>
      </StyledNav>
      <ScrollCheck />
    </>
  );
};

export default NavBar;
