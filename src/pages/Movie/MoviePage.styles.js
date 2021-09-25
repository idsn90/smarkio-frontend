import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;

  img {
    max-height: 700px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  span + span {
    margin-top: 20px;
  }

  .span {
  }

  #title {
    font-weight: bold;
    font-size: 22px;
  }

  #overview {
    max-width: 350px;
    text-align: justify;
  }

  #date {
    font-weight: bold;
    font-size: 18px;
  }
`;
