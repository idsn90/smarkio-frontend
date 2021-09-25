import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  img {
    max-width: 250px;
  }
`;

export const Nav = styled.div`
  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    color: #232f3a;
  }

  a + a {
    margin-left: 20px;
  }
`;
