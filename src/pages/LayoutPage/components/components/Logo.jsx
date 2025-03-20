import { useMediaQuery } from "react-responsive";
import { Image } from "./Logo.styles";
import { logos } from "../../../../assets/assets";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const imageSource = (privacy, mobile, smallScreens) => {
  switch (privacy) {
    case "public":
      return mobile
        ? logos.mobile
        : smallScreens
        ? logos.tablet
        : logos.desktop;
    case "private":
      return smallScreens ? logos.tablet : logos.desktop;
    default:
      return null;
  }
};

export const Logo = ({ privacy }) => {
  const mobile = useMediaQuery({ maxWidth: 767 });
  const smallScreens = useMediaQuery({ maxWidth: 1279 });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <Image
        src={imageSource(privacy, mobile, smallScreens)}
        alt="slim mom logo"
        onClick={handleClick}
      />
    </>
  );
};

Logo.propTypes = {
  privacy: PropTypes.string,
};
