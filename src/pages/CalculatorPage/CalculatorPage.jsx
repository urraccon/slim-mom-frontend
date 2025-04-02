import { RightSideBar } from "../../components/RightSideBar";
import { reactBreakpoints } from "../../styles/breakpoints";
import {
  Background,
  Container,
  Layout,
  Leaf,
  OuterBackground,
  Section,
} from "./CalculatorPage.styles";
import { CalculatorCaloriesForm } from "./components/CalculatorCaloriesForm";
import { useMediaQuery } from "react-responsive";

export const CalculatorPage = () => {
  const desktopMin = useMediaQuery({ minWidth: reactBreakpoints.desktopMin });

  return (
    <>
      <Section>
        <Layout>
          <Container>
            <CalculatorCaloriesForm />
            <RightSideBar />
          </Container>
        </Layout>
      </Section>
      {desktopMin && (
        <>
          <Leaf />
          <Background />
          <OuterBackground />
        </>
      )}
    </>
  );
};
