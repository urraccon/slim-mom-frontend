import PropTypes from "prop-types";
import { StyledDivider } from "../styles/components/CustomDivider.styles";

export const CustomDivider = ({ dividerType }) => (
  <StyledDivider dividerType={dividerType} />
);

CustomDivider.propTypes = {
  dividerType: PropTypes.string,
};
