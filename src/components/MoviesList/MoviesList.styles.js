import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;
  padding: 50px;
  width: 100%;

  @media only screen and (max-width: 1920px) {
    grid-template-columns: repeat(4, auto);
  }

  @media only screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, auto);
  }

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, auto);
  }

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 590px) {
    padding: 0;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  align-items: center;
  transition: transform 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  img {
    width: 250px;
    height: 310px;
    border-radius: 4px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
  }
`;
