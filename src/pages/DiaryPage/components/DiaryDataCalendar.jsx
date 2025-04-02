import {
  Container,
  Date,
  StyledDateCalendar,
  StyledPaper,
} from "./DiaryDateCalendar.styles";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import { useState } from "react";
import { ClickAwayListener, Paper, Popover } from "@mui/material";
import { ControlButton } from "../../../components/ControlButton";

dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  weekStart: 1,
});

const dateCalProps = {
  day: {
    disableRipple: true,
  },
  yearButton: {
    disableRipple: true,
  },
  nextIconButton: {
    disableRipple: true,
  },
  previousIconButton: {
    disableRipple: true,
  },
  switchViewButton: {
    disableRipple: true,
  },
};

export const DiaryDateCalendar = () => {
  const now = dayjs();

  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState(null);
  const [date, setDate] = useState(now);

  const formattedDate = dayjs(date).format("DD.MM.YYYY");

  function handleClick(evt) {
    setOpen(true);
    setTarget(evt.currentTarget);
  }

  function handleChange(newDate) {
    const oldDay = dayjs(date).format("D");
    const newDay = dayjs(newDate).format("D");

    if (oldDay !== newDay) {
      setOpen(false);
      setDate(newDate);
    }
  }

  return (
    <Container>
      <Date>{formattedDate}</Date>
      <ControlButton
        buttonContext="calendar"
        onClick={handleClick}
        iconName="calendar"
      />
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={target}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <StyledPaper>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StyledDateCalendar
                value={date}
                onChange={handleChange}
                slotProps={dateCalProps}
              />
            </LocalizationProvider>
          </StyledPaper>
        </ClickAwayListener>
      </Popover>
    </Container>
  );
};
