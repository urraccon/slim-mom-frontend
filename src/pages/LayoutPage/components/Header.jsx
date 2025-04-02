import { useMediaQuery } from "react-responsive";
import {
  Box,
  PrivateContainer,
  PrivateContent,
  PrivateLayout,
  PublicContainer,
  PublicLayout,
  Section,
} from "./Header.styles";
import { Logo } from "./components/Logo";
import { Navigation } from "./components/Navigation";
import { UserInfo } from "./components/UserInfo";
import { reactBreakpoints } from "../../../styles/breakpoints";
import { useSelector } from "react-redux";
import { useState } from "react";
import AuthRedirect from "../../../components/AuthRedirect";
import { StyledDivider } from "../../../styles/components/CustomDivider.styles";

export const Header = () => {
  const largeMobileMax = useMediaQuery({
    maxWidth: reactBreakpoints.largeMobileMax,
  });
  const tablet = useMediaQuery({
    maxWidth: reactBreakpoints.tabletMax,
    minWidth: reactBreakpoints.tabletMin,
  });
  const desktopMin = useMediaQuery({ minWidth: reactBreakpoints.desktopMin });

  const [privacy, setPrivacy] = useState("public");
  const user = useSelector((state) => state.auth.user);

  const username = user?.name;

  return (
    <>
      <AuthRedirect setPrivacy={setPrivacy} />
      <Section>
        {privacy === "public" && (
          <>
            <PublicLayout>
              <PublicContainer>
                <Logo privacy="public" />
                {desktopMin && (
                  <>
                    <StyledDivider
                      orientation="vertical"
                      dividerContext="header"
                    />
                  </>
                )}
                <Navigation privacy="public" />
              </PublicContainer>
            </PublicLayout>
          </>
        )}
        {privacy === "private" && (
          <>
            <PrivateLayout>
              <PrivateContainer>
                {largeMobileMax && (
                  <>
                    <PrivateContent>
                      <Box>
                        <Logo privacy="private" />
                        <Navigation privacy="private" />
                      </Box>
                    </PrivateContent>
                    <UserInfo username={username} />
                  </>
                )}
                {tablet && (
                  <>
                    <PrivateContent>
                      <Logo privacy="private" />
                      <Box>
                        <UserInfo username={username} />
                        <Navigation privacy="private" />
                      </Box>
                    </PrivateContent>
                  </>
                )}
                {desktopMin && (
                  <>
                    <PrivateContent>
                      <Box>
                        <Logo privacy="private" />
                        <StyledDivider
                          orientation="vertical"
                          dividerContext="header"
                        />
                        <Navigation privacy="private" />
                      </Box>
                      <UserInfo username={username} />
                    </PrivateContent>
                  </>
                )}
              </PrivateContainer>
            </PrivateLayout>
          </>
        )}
      </Section>
    </>
  );
};
