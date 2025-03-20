import { DiaryDateCalendar } from "./components/DiaryDataCalendar";
import {
  Block,
  Box,
  Container,
  Content,
  Gradient,
  Background,
  Layout,
  Leaf,
  Section,
  Wrapper,
  OuterBackground,
} from "./DiaryPage.styles";
import { DiaryAddProductForm } from "./components/DiaryAddProductForm";
import { DiaryProductList } from "./components/DiaryProductList/DiaryProductList";
import { useMediaQuery } from "react-responsive";
import { RightSideBar } from "../../components/RightSideBar/RightSideBar";
import { reactBreakpoints } from "../../styles/breakpoints";

export const DiaryPage = () => {
  const mobileMax = useMediaQuery({ maxWidth: reactBreakpoints.mobileMax });
  const tablet = useMediaQuery({
    minWidth: reactBreakpoints.tabletMin,
    maxWidth: reactBreakpoints.tabletMax,
  });
  const desktopMin = useMediaQuery({ minWidth: reactBreakpoints.desktopMin });

  return (
    <>
      <Section>
        <Layout>
          <Container>
            <Content>
              <Wrapper>
                <Block>
                  {mobileMax && (
                    <>
                      <Box>
                        <DiaryDateCalendar />
                        <DiaryProductList />
                      </Box>
                      <DiaryAddProductForm />
                    </>
                  )}
                  {(tablet || desktopMin) && (
                    <>
                      <Box>
                        <DiaryDateCalendar />
                        <DiaryAddProductForm />
                      </Box>
                      <DiaryProductList />
                    </>
                  )}
                  {desktopMin && <Gradient />}
                </Block>
              </Wrapper>
            </Content>
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
