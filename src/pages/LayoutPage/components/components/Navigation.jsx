import { useMediaQuery } from "react-responsive";
import {
  NavBtn,
  NavMenu,
  OverlayNavBtn,
  OverlayNavContainer,
  OverlayNavMenu,
  StyledNavLink,
} from "./Navigation.styles";
import PropTypes from "prop-types";
import { useState } from "react";
import { reactBreakpoints } from "../../../../styles/breakpoints";
import { CustomModal } from "../../../../components/CustomModal";
import { ControlButton } from "../../../../components/ControlButton";

export const Navigation = ({ privacy }) => {
  const tabletMax = useMediaQuery({ maxWidth: reactBreakpoints.tabletMax });

  const [open, setOpen] = useState(false);

  return (
    <>
      {privacy === "public" && (
        <NavMenu>
          <NavBtn>
            <StyledNavLink to="login" navLinkContext="header">
              Log in
            </StyledNavLink>
          </NavBtn>
          <NavBtn>
            <StyledNavLink to="registration" navLinkContext="header">
              Registration
            </StyledNavLink>
          </NavBtn>
        </NavMenu>
      )}
      {privacy === "private" &&
        (tabletMax ? (
          <>
            {open ? (
              <ControlButton
                onClick={() => setOpen(false)}
                iconName="close"
                iconContext="navigation"
              />
            ) : (
              <ControlButton onClick={() => setOpen(true)} iconName="menu" />
            )}
            <CustomModal open={open} modalType="navigation">
              <OverlayNavContainer>
                <OverlayNavMenu>
                  <OverlayNavBtn>
                    <StyledNavLink
                      to="diary"
                      onClick={() => setOpen(false)}
                      navLinkContext="overlay"
                    >
                      Diary
                    </StyledNavLink>
                  </OverlayNavBtn>
                  <OverlayNavBtn>
                    <StyledNavLink
                      to="calculator"
                      onClick={() => setOpen(false)}
                      navLinkContext="overlay"
                    >
                      Calculator
                    </StyledNavLink>
                  </OverlayNavBtn>
                </OverlayNavMenu>
              </OverlayNavContainer>
            </CustomModal>
          </>
        ) : (
          <NavMenu>
            <NavBtn>
              <StyledNavLink to="diary" navLinkContext="header">
                Diary
              </StyledNavLink>
            </NavBtn>
            <NavBtn>
              <StyledNavLink to="calculator" navLinkContext="header">
                Calculator
              </StyledNavLink>
            </NavBtn>
          </NavMenu>
        ))}
    </>
  );
};

Navigation.propTypes = {
  privacy: PropTypes.string,
};
