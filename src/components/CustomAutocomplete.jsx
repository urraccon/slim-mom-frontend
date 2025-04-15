import PropTypes from "prop-types";
import { StyledTextField } from "../styles/components/CustomTextField.styled";
import { useState } from "react";
import {
  StyledCustomAutocomplete,
  StyledOption,
} from "../styles/components/CustomAutocomplete.styles";

const autocompleteProps = {
  popupIndicator: {
    disableRipple: true,
  },
  clearIndicator: {
    disableRipple: true,
  },
};

export const CustomAutocomplete = ({
  options,
  value,
  onChange,
  label,
  id,
  error,
  textFieldType,
  autocompleteType,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value?.title.length > 0;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <StyledCustomAutocomplete
      id={id}
      options={options}
      getOptionLabel={(option) => option.title}
      value={value}
      onChange={onChange}
      slotProps={autocompleteProps}
      renderOption={(props, option, { selected }) => (
        <StyledOption {...props} key={option._id} selected={selected}>
          {option.title}
        </StyledOption>
      )}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          label={label}
          error={error}
          variant="standard"
          hasValue={hasValue}
          isFocused={isFocused}
          onFocus={handleFocus}
          onBlur={handleBlur}
          textFieldType={textFieldType}
        />
      )}
      autocompleteType={autocompleteType}
    />
  );
};

CustomAutocomplete.propTypes = {
  options: PropTypes.array,
  value: PropTypes.number,
  onChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  textFieldType: PropTypes.string,
  autocompleteType: PropTypes.string,
};
