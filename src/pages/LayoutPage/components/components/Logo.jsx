import { useMediaQuery } from "react-responsive";
import { Image } from "./Logo.styles";
import { logos } from "../../../../assets/assets";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { reactBreakpoints } from "../../../../styles/breakpoints";

const imageSource = (privacy, mobileMax, tabletMax) => {
  switch (privacy) {
    case "public":
      return mobileMax
        ? logos.mobile
        : tabletMax
        ? logos.tablet
        : logos.desktop;
    case "private":
      return tabletMax ? logos.tablet : logos.desktop;
    default:
      return null;
  }
};

export const Logo = ({ privacy }) => {
  const mobileMax = useMediaQuery({ maxWidth: reactBreakpoints.mobileMax });
  const tabletMax = useMediaQuery({ maxWidth: reactBreakpoints.tabletMax });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <Image
        src={imageSource(privacy, mobileMax, tabletMax)}
        alt="slim mom logo"
        onClick={handleClick}
      />
    </>
  );
};

Logo.propTypes = {
  privacy: PropTypes.string,
};
