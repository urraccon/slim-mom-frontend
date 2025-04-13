import { useState } from "react";
import {
  Box,
  Container,
  Fields,
  Form,
  LeftColumn,
  RightColumn,
  Title,
  Wrapper,
} from "./CalculatorCaloriesForm.styles";
import { RadioComp } from "../../../components/Radio";
import {
  ageValidation,
  heightValidation,
  weightValidation,
} from "../../../utils/validator";
import { CustomTextField } from "../../../components/CustomTextField";
import { ActionButton } from "../../../components/ActionButton";
import { useSaveHealthDataMutation } from "../../../features/health/healthApi";

export const CalculatorCaloriesForm = () => {
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [desiredWeight, setDesiredWeight] = useState("");
  const [bloodType, setBloodType] = useState(1);
  const [heightErr, setHeightErr] = useState(false);
  const [ageErr, setAgeErr] = useState(false);
  const [currentWeightErr, setCurrentWeightErr] = useState(false);
  const [desiredWeightErr, setDesiredWeightErr] = useState(false);
  const [saveHealthData] = useSaveHealthDataMutation();

  const options = [1, 2, 3, 4];

  function handleSubmit(evt) {
    evt.preventDefault();

    const validHeight = heightValidation(height);
    const validAge = ageValidation(age);
    const validCurrentWeight = weightValidation(currentWeight);
    const validDesiredWeight = weightValidation(desiredWeight);

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

    if (!validCurrentWeight) {
      setCurrentWeightErr(true);
    } else {
      setCurrentWeightErr(false);
    }

    if (!validDesiredWeight) {
      setDesiredWeightErr(true);
    } else {
      setDesiredWeightErr(false);
    }

    if (validHeight && validAge && validCurrentWeight && validDesiredWeight) {
      saveHealthData({
        height,
        age,
        currentWeight,
        desiredWeight,
        bloodType: Number(bloodType),
      });
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
                  <CustomTextField
                    error={heightErr}
                    id="height"
                    label="Height *"
                    value={height}
                    onChange={(evt) => setHeight(evt.target.value)}
                    textFieldContext="calories-form"
                  />
                  <CustomTextField
                    error={ageErr}
                    id="age"
                    label="Age *"
                    value={age}
                    onChange={(evt) => setAge(evt.target.value)}
                    textFieldContext="calories-form"
                  />
                  <CustomTextField
                    error={currentWeightErr}
                    id="current-weight"
                    label="Current weight *"
                    value={currentWeight}
                    onChange={(evt) => setCurrentWeight(evt.target.value)}
                    textFieldContext="calories-form"
                  />
                </LeftColumn>
                <RightColumn>
                  <CustomTextField
                    error={desiredWeightErr}
                    id="desired-weight"
                    label="Desired weight *"
                    value={desiredWeight}
                    onChange={(evt) => setDesiredWeight(evt.target.value)}
                    textFieldContext="calories-form"
                  />
                  <RadioComp
                    id="blood-type"
                    options={options}
                    value={bloodType}
                    onChange={(evt) => setBloodType(evt.target.value)}
                  />
                </RightColumn>
              </Fields>
              <ActionButton buttonContext="calories-form">
                Start losing weight
              </ActionButton>
            </Form>
          </Box>
        </Container>
      </Wrapper>
    </>
  );
};
