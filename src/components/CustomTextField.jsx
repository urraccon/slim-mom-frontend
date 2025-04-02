import PropTypes from "prop-types";
import { StyledTextField } from "../styles/components/CustomTextField.styled";
import { useState } from "react";

export const CustomTextField = ({
  id,
  value,
  onChange,
  label,
  error,
  type = "text",
  textFieldContext,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = value?.length > 0;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <StyledTextField
      id={id}
      value={value}
      onChange={onChange}
      label={label}
      error={error}
      variant="standard"
      hasValue={hasValue}
      isFocused={isFocused}
      onFocus={handleFocus}
      onBlur={handleBlur}
      type={type}
      slotProps={{
        htmlInput: {
          autoComplete: "off",
        },
      }}
      textFieldContext={textFieldContext}
    ></StyledTextField>
  );
};

CustomTextField.propTypes = {
  error: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  textFieldContext: PropTypes.string,
};
