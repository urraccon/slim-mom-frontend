import styled from "styled-components";
import { cssBreakpoints } from "../../../../styles/breakpoints";
import { NavLink } from "react-router-dom";

export const NavMenu = styled.ul`
  margin: 0;
  list-style-type: none;
  display: flex;
  gap: 14px;
  align-items: end;
  flex-wrap: wrap;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    padding: 9px 0 0 0;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths
      .tabletMin}) and (max-width: ${cssBreakpoints.lengths.tabletMax}) {
    padding: 7px 0 0 0;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    gap: 24px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.desktopMin}) {
    padding: 0 0 5px 0;
  }
`;

export const NavBtn = styled.li`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.2;
  text-transform: uppercase;
  color: #9b9faa;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #7a7a88;
  }

  &:active {
    color: #212121;
  }
`;

export const OverlayNavContainer = styled.div`
  display: flex;
  align-items: center;
  height: inherit;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    min-height: 488px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    min-height: 944px;
  }
`;

export const OverlayNavMenu = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  width: fit-content;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    margin: 60px auto 356px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    margin: 100px auto 758px;
    min-height: 86px;
  }
`;

export const OverlayNavBtn = styled.li`
  text-transform: uppercase;
  color: #9b9faa;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: 0.04em;

  &:hover {
    color: #f2f2f2;
  }

  &:active {
    color: white;
  }

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    font-size: 18px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    font-size: 24px;
  }
`;

export const StyledNavLink = styled(NavLink).withConfig({
  shouldForwardProp: (prop) => !["navLinkContext"].includes(prop),
})`
  text-decoration: none;
  color: inherit;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  cursor: pointer;

  ${({ navLinkContext }) => {
    switch (navLinkContext) {
      case "header":
        return `
  &.active {
    color: #212121;
  }
        `;

      case "overlay":
        return `
  &.active {
    color: white;
  }
        `;

      default:
        return null;
    }
  }}
`;
