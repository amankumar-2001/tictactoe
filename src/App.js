import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Cell = styled.div`
  height: 200px;
  border: 1px solid black;
  width: 400px;
  font-size: 50px;

  &:hover {
    background: grey;
  }
`;

const Modal = styled.div``;
const ReplayButton = styled.button``;

function App() {
  const [values, setValues] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);
  const [winner, setWinner] = useState("");
  const checkPos = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  const [cnt, setCnt] = useState(0);

  const changeTheValue = (i, j) => {
    let temp = values;
    setCnt(cnt ^ 1);

    if (cnt) {
      temp[i][j] = 0;
    } else {
      temp[i][j] = 1;
    }

    setValues(temp);
  };

  useEffect(() => {
    let result = 0;
    checkPos.forEach((arr) => {
      if (
        values[arr[0][0]][arr[0][1]] === values[arr[1][0]][arr[1][1]] &&
        values[arr[2][0]][arr[2][1]] === values[arr[1][0]][arr[1][1]] &&
        values[arr[2][0]][arr[2][1]] !== -1
      ) {
        result = 1;
      }
    });

    if (result) {
      setWinner(cnt ? "X" : "O");
      setValues([
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
      ]);
    }
  }, [cnt]);

  return (
    <div className="App">
      {winner ? (
        <>
          <Modal>{winner} is winner</Modal>
          <ReplayButton
            onClick={() => {
              setWinner("");
            }}
          >
            Replay
          </ReplayButton>
        </>
      ) : (
        <Container>
          <Row>
            <Cell
              onClick={() => {
                changeTheValue(0, 0);
              }}
            >
              {values[0][0] === -1 ? "" : values[0][0] === 0 ? "O" : "X"}
            </Cell>
            <Cell
              onClick={() => {
                changeTheValue(0, 1);
              }}
            >
              {values[0][1] === -1 ? "" : values[0][1] === 0 ? "O" : "X"}
            </Cell>
            <Cell
              onClick={() => {
                changeTheValue(0, 2);
              }}
            >
              {values[0][2] === -1 ? "" : values[0][2] === 0 ? "O" : "X"}
            </Cell>
          </Row>
          <Row>
            <Cell
              onClick={() => {
                changeTheValue(1, 0);
              }}
            >
              {values[1][0] === -1 ? "" : values[1][0] === 0 ? "O" : "X"}
            </Cell>
            <Cell
              onClick={() => {
                changeTheValue(1, 1);
              }}
            >
              {values[1][1] === -1 ? "" : values[1][1] === 0 ? "O" : "X"}
            </Cell>
            <Cell
              onClick={() => {
                changeTheValue(1, 2);
              }}
            >
              {values[1][2] === -1 ? "" : values[1][2] === 0 ? "O" : "X"}
            </Cell>
          </Row>
          <Row>
            <Cell
              onClick={() => {
                changeTheValue(2, 0);
              }}
            >
              {values[2][0] === -1 ? "" : values[2][0] === 0 ? "O" : "X"}
            </Cell>
            <Cell
              onClick={() => {
                changeTheValue(2, 1);
              }}
            >
              {values[2][1] === -1 ? "" : values[2][1] === 0 ? "O" : "X"}
            </Cell>
            <Cell
              onClick={() => {
                changeTheValue(2, 2);
              }}
            >
              {values[2][2] === -1 ? "" : values[2][2] === 0 ? "O" : "X"}
            </Cell>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default App;
