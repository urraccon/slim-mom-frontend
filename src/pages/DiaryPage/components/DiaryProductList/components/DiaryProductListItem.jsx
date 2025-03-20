import PropTypes from "prop-types";
import {
  Box,
  Calories,
  Container,
  Flex,
  Item,
  Kcal,
  Name,
  Quantity,
} from "./DiaryProductListItem.styles";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "react-responsive";
import { reactBreakpoints } from "../../../../../styles/breakpoints";

const btnStyle = (mobileMax) => ({
  padding: 0,
  minWidth: 0,
  borderRadius: 0,
  color: "#9B9FAA",
  transition: "background-color 0.3s ease",
  height: "fit-content",
  marginTop: mobileMax ? "4px" : "2px",

  "&:hover": {
    backgroundColor: "#f0f0f0",
  },

  "&:active": {
    backgroundColor: "#e0e0e0",
  },
});

const iconStyle = (mobileMax) => ({
  fontSize: mobileMax ? 17 : 20,
  stroke: "#9B9FAA",
  strokeWidth: 1,
});

export const DiaryProductListItem = ({ name, calories, quantity }) => {
  const mobileMax = useMediaQuery({ maxWidth: reactBreakpoints.mobileMax });

  return (
    <Item>
      <Container>
        <Box>
          <Flex>
            <Name>{name}</Name>
            <Quantity>{quantity} g</Quantity>
          </Flex>
          <Calories>
            {calories}
            <Kcal> kcal</Kcal>
          </Calories>
        </Box>
        <Button sx={btnStyle(mobileMax)} disableRipple>
          <CloseIcon style={iconStyle(mobileMax)} />
        </Button>
      </Container>
    </Item>
  );
};

DiaryProductListItem.propTypes = {
  name: PropTypes.string,
  calories: PropTypes.number,
  quantity: PropTypes.number,
};
