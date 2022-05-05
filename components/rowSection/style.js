import styled from "styled-components";

export const RowSectionContainer = styled.div`
  
  background: ${({ theme }) => theme.yellowOne};
  text-align: center;
  padding: 1.75rem 0;
  margin: 3.1rem 0;
  font-family: 'Work Sans', sans-serif;
  
  span {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.blackOne};
  }
`