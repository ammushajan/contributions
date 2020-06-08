import styled from "styled-components";

export const Section = styled.section`
  margin: 0 auto;
  max-width: 1200px;
`;
export const Background = styled.section`
  background-color: ${props => (props.primary ? "lightgrey" : "white")};
  padding: 20px;
`;
export const Heading = styled.h1`
  color: navy;
`;
export const DIV = styled.div``;
export const Fundname = styled.p`
  color: navy;
`;

export const Card = styled.div`
  box-shadow: 0 9px 21px 0 rgba(128, 152, 213, 0.08);
  background-color: #ffffff;
  width: 373px;
  height: 172px;
  padding: 20px;
  margin: 20px 0;
`;

export const BalanceName = styled.h2`
  color: navy;
`;
export const Balance = styled.h2`
  color: #8ab28a;
`;

export const Button = styled.button`
  color: navy;
  background-color: ${props => (props.primary ? "navy" : "white")};
`;
export const Userdetail = styled.h4`
  color: #505050;
`;

export const ContributionCard = styled.div`
  background-color: #f2f2f2;
  width: 32%;
  padding: 20px;
  margin: 20px;
`;
export const ContributionWrapper = styled.div`
  display: flex;
`;
