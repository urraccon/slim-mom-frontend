import {
  Box,
  Container,
  Fields,
  Form,
  LeftColumn,
  RightColumn,
  Title,
  Wrapper,
} from "./DailyCaloriesFrom.styles";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { DailyCaloriesIntake } from "./components/DailyCaloriesIntake";
import { Field } from "../../../components/Field";
import { ButtonComp } from "../../../components/Button";
import { ModalComp } from "../../../components/Modal";
import {
  ageValidation,
  heightValidation,
  weightValidation,
} from "../../../utils/validator";
import { RadioComp } from "../../../components/Radio";
import { reactBreakpoints } from "../../../styles/breakpoints";

const btnStyle = (mobileMax, desktopMin) => ({
  alignSelf: mobileMax ? "center" : "start",
  marginLeft: desktopMin ? 323 : 0,
});

export const DailyCaloriesForm = () => {
  const mobileMax = useMediaQuery({ maxWidth: reactBreakpoints.mobileMax });
  const desktopMin = useMediaQuery({ minWidth: reactBreakpoints.desktopMin });

  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [curWt, setCurWt] = useState("");
  const [desWt, setDesWt] = useState("");
  const [bldTyp, setBldTyp] = useState("1");
  const [heightErr, setHeightErr] = useState(false);
  const [ageErr, setAgeErr] = useState(false);
  const [curWtErr, setCurWtErr] = useState(false);
  const [desWtErr, setDesWtErr] = useState(false);
  const [open, setOpen] = useState(false);

  const options = [1, 2, 3, 4];

  function handleSubmit(evt) {
    evt.preventDefault();

    const validHeight = heightValidation(height);
    const validAge = ageValidation(age);
    const validCurWt = weightValidation(curWt);
    const validDesWt = weightValidation(desWt);

    if (!validHeight) {
      setHeightErr(true);
    } else {
      setHeightErr(false);
    }

    if (!validAge) {
      setAgeErr(true);
    } else {
      setAgeErr(false);
    }

    if (!validCurWt) {
      setCurWtErr(true);
    } else {
      setCurWtErr(false);
    }

    if (!validDesWt) {
      setDesWtErr(true);
    } else {
      setDesWtErr(false);
    }

    if (validHeight && validAge && validCurWt && validDesWt) {
      setOpen(true);
    }
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Box>
            <Title>Calculate your daily calorie intake right now</Title>
            <Form onSubmit={handleSubmit}>
              <Fields>
                <LeftColumn>
                  <Field
                    error={heightErr}
                    id="height"
                    label="Height *"
                    value={height}
                    onChange={(evt) => setHeight(evt.target.value)}
                  />
                  <Field
                    error={ageErr}
                    id="age"
                    label="Age *"
                    value={age}
                    onChange={(evt) => setAge(evt.target.value)}
                  />
                  <Field
                    error={curWtErr}
                    id="current-weight"
                    label="Current weight *"
                    value={curWt}
                    onChange={(evt) => setCurWt(evt.target.value)}
                  />
                </LeftColumn>
                <RightColumn>
                  <Field
                    error={desWtErr}
                    id="desired-weight"
                    label="Desired weight *"
                    value={desWt}
                    onChange={(evt) => setDesWt(evt.target.value)}
                  />
                  <RadioComp
                    id="blood-type"
                    options={options}
                    value={bldTyp}
                    onChange={(evt) => setBldTyp(evt.target.value)}
                  />
                </RightColumn>
              </Fields>
              <ButtonComp style={btnStyle(mobileMax, desktopMin)} type="submit">
                Start losing weight
              </ButtonComp>
            </Form>
          </Box>
        </Container>
      </Wrapper>
      <ModalComp
        type="daily-calories"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DailyCaloriesIntake />
      </ModalComp>
    </>
  );
};
