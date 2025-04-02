import PropTypes from "prop-types";
import { StyledDivider } from "../styles/components/CustomDivider.styles";

export const CustomDivider = ({ dividerContext }) => (
  <StyledDivider dividerContext={dividerContext} />
);

CustomDivider.propTypes = {
  dividerContext: PropTypes.string,
};
