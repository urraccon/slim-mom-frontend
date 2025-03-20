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

export const DiaryPage = () => {
  const mobile = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const desktop = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      <Section>
        <Layout>
          <Container>
            <Content>
              <Wrapper>
                <Block>
                  {mobile && (
                    <>
                      <Box>
                        <DiaryDateCalendar />
                        <DiaryProductList />
                      </Box>
                      <DiaryAddProductForm />
                    </>
                  )}
                  {(tablet || desktop) && (
                    <>
                      <Box>
                        <DiaryDateCalendar />
                        <DiaryAddProductForm />
                      </Box>
                      <DiaryProductList />
                    </>
                  )}
                  {desktop && <Gradient />}
                </Block>
              </Wrapper>
            </Content>
            <RightSideBar />
          </Container>
        </Layout>
      </Section>
      {desktop && (
        <>
          <Leaf />
          <Background />
          <OuterBackground />
        </>
      )}
    </>
  );
};
