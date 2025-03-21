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
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectIsAuthenticated,
  selectUser,
} from "../../../store/auth/authSelectors";
import { useNavigate } from "react-router-dom";

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

  const [privacy, setPrivacy] = useState("public");
  const [username, setUsername] = useState("");

  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      setPrivacy("private");
      navigate("/calculator");
    } else {
      setPrivacy("public");
      navigate("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (user) {
      setUsername(user.name);
    } else {
      setUsername("");
    }
  }, [user]);

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
