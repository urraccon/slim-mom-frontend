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
import { Divider } from "@mui/material";
import { UserInfo } from "./components/UserInfo";
import { reactBreakpoints } from "../../../styles/breakpoints";
// import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import {
//   selectLoggedIn,
//   selectUserName,
// } from 'components/redux/auth/selectors';

const dividerStyle = {
  height: 32,
  border: 0,
  borderLeft: "2px solid #e0e0e0",
};

export const Header = () => {
  const mobileMax = useMediaQuery({ maxWidth: reactBreakpoints.mobileMax });
  const tablet = useMediaQuery({
    maxWidth: reactBreakpoints.tabletMax,
    minWidth: reactBreakpoints.tabletMin,
  });
  const desktopMin = useMediaQuery({ minWidth: reactBreakpoints.desktopMin });

  // const [privacy, setPrivacy] = useState('public');

  // const username = useSelector(selectUserName);
  // const loggedIn = useSelector(selectLoggedIn);

  // useEffect(() => {
  //   if (loggedIn) {
  //     setPrivacy('private');
  //   } else {
  //     setPrivacy('public');
  //   }
  // }, [loggedIn]);

  const privacy = "private";
  const username = "Alex";

  return (
    <Section>
      {privacy === "public" && (
        <>
          <PublicLayout>
            <PublicContainer>
              <Logo privacy="public" />
              {desktopMin && (
                <>
                  <Divider orientation="vertical" sx={dividerStyle} />
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
              {mobileMax && (
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
                      <Divider orientation="vertical" sx={dividerStyle} />
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
  );
};
