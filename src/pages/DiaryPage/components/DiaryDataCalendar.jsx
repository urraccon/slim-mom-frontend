import {
  Container,
  Date,
  StyledDateCalendar,
  StyledPaper,
} from "./DiaryDateCalendar.styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import { ClickAwayListener, Popover } from "@mui/material";
import { ControlButton } from "../../../components/ControlButton";
import {
  formatDateToISO,
  formatDateToUI,
  isSameDay,
  parseToDayjs,
  todayDayjs,
} from "../../../utils/dateUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedDate,
  setSelectedDate,
} from "../../../features/dateSlice";

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
  const today = todayDayjs();
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState(null);
  const [date, setDate] = useState(today);
  const selectedDate = useSelector(selectSelectedDate);
  const dispatch = useDispatch();
  const formattedDate = formatDateToUI(date);

  useEffect(() => {
    if (selectedDate) {
      setDate(parseToDayjs(selectedDate));
    }
  }, [selectedDate]);

  function handleClick(evt) {
    setOpen(true);
    setTarget(evt.currentTarget);
  }

  function handleChange(newDate) {
    const matchDates = isSameDay(date, newDate);
    const isoNewDate = formatDateToISO(newDate);

    if (!matchDates) {
      setOpen(false);
      dispatch(setSelectedDate(isoNewDate));
    }
  }

  return (
    <Container>
      <Date>{formattedDate}</Date>
      <ControlButton
        buttonType="calendar"
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
                maxDate={today}
              />
            </LocalizationProvider>
          </StyledPaper>
        </ClickAwayListener>
      </Popover>
    </Container>
  );
};
