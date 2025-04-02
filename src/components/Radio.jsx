import { Radio } from "@mui/material";
import PropTypes from "prop-types";
import {
  StyledFormControl,
  StyledFormControlLabel,
  StyledFormLabel,
  StyledRadioGroup,
  StyledSvgIcon,
} from "../styles/components/CustomRadio.styles";

const RadioChecked = () => (
  <StyledSvgIcon>
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="#e0e0e0"
      strokeWidth="1"
      fill="none"
    />
    <circle cx="12" cy="12" r="5" fill="#fc842d" />
  </StyledSvgIcon>
);

const RadioIcon = () => (
  <StyledSvgIcon>
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="#e0e0e0"
      strokeWidth="1"
      fill="none"
    />
  </StyledSvgIcon>
);

export const RadioComp = ({ value, onChange, options, id }) => {
  return (
    <StyledFormControl>
      <StyledFormLabel id={id}>Blood Type *</StyledFormLabel>
      <StyledRadioGroup value={value} onChange={onChange} row>
        {options?.map((option) => (
          <StyledFormControlLabel
            key={option}
            value={option}
            control={
              <Radio
                disableTouchRipple
                disableRipple
                checkedIcon={<RadioChecked />}
                icon={<RadioIcon />}
              />
            }
            label={option}
          />
        ))}
      </StyledRadioGroup>
    </StyledFormControl>
  );
};

RadioComp.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  id: PropTypes.string,
};
