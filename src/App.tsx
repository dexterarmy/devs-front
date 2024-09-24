// src/components/UserList.tsx
import React from "react";
import styled from "styled-components";

const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const Column = styled.div<{$span?:string}>`
float: left;
width : 100%;

@media only screen and (min-width: 768px){
width: ${(props:any) => (props.$span ? props.$span / 12 * 100 : "8.33")}%;
}
`

const App: React.FC = (props) => {
  return (
    <Row>
      <Column $span='1' >1</Column>
      <Column $span='1' >2</Column>
      <Column $span='1' >3</Column>
      <Column $span='1' >4</Column>
      <Column $span='1' >5</Column>
      <Column $span='1' >6</Column>
      <Column $span='1' >7</Column>
      <Column $span='1' >8</Column>
      <Column $span='1' >9</Column>
      <Column $span='1' >10</Column>
      <Column $span='1' >11</Column>
      <Column $span='1' >12</Column>
      
    </Row>
  )
};

export default App;
