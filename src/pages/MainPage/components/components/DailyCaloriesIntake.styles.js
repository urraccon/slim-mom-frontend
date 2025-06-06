import styled from "styled-components";
import { cssBreakpoints } from "../../../../styles/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    margin: auto;
  }
`;

export const Container = styled.div`
  width: 100%;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background: #264061;
  }

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    position: absolute;
    top: 40px;
    height: calc(100vh - 121.6px);
    overflow: auto;
    display: flex;

    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    width: 87.5%;
    margin: 0 auto;
    max-width: 450px;
    padding: 40px 0 119px;
    height: fit-content;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    margin: 64px 82px 79px;
  }
`;

export const RecommendedCalories = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    gap: 41px;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    gap: 20px;
  }
`;

export const RecommendedCaloriesTitle = styled.h4`
  margin: 0;
  color: #212121;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    font-size: 18px;
    line-height: 1.4em;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    font-size: 26px;
    text-align: center;
    line-height: 1.35em;
  }
`;

export const Value = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 48px;
  letter-spacing: 0.04em;
  text-align: center;
  color: #264061;
  line-height: 1.3;
`;

export const Space = styled.span`
  font-size: 26px;
`;

export const Kcal = styled.span`
  font-size: 16px;
`;

export const RestrictedFoods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (max-width: ${cssBreakpoints.lengths.largeMobileMax}) {
    width: 100%;
  }

  @media screen and (min-width: ${cssBreakpoints.lengths.tabletMin}) {
    width: 330px;
  }
`;

export const RestrictedFoodsTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.04em;
  color: #212121;
  line-height: 1.2em;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-height: 112px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #264061;
  }

  &::-webkit-scrollbar-track {
    background: #f0f1f3;
  }
`;

export const Item = styled.li`
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  text-transform: capitalize;
  line-height: 1.25;
  padding-right: 25px;
`;

export const Text = styled.p`
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  line-height: 1.2;
`;
