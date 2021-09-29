import React, { useState, useEffect } from "react";
import styled from "styled-components";

import {
  SCORE_INTERVAL,
  SCORE_INTERVAL_NUMBER,
  SCORE_DIVISOR,
  POINT_COLOR
} from "../constants";

const StyledPoint = styled.div`
  margin-left: auto;
  color: ${POINT_COLOR};
`;

const ScoreRecords = ({ score }: any) => {
  const [pt, setPt] = useState(score);
  useEffect(() => {
    let i = SCORE_INTERVAL_NUMBER;
    const interval = setInterval(() => {
      i -= 1;
      setPt((n: number) => Math.floor(n + (score - n) / SCORE_DIVISOR));
      if (i <= 0) {
        setPt(score);
        clearInterval(interval);
      }
    }, SCORE_INTERVAL);
    return function cleanup() {
      clearInterval(interval);
    };
  }, [score]);
  return <StyledPoint>{pt}pt</StyledPoint>;
};

export default ScoreRecords;
