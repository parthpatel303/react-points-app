import React, { memo } from "react";
import styled from "styled-components";
import ScoreRecords from "./ScoreRecords";
import { RANKING_COLOR } from "../constants";

const Container = styled.div`
  background-color: #111;
  position: absolute;
  width: 90%;
  height: 800px;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
`;


const ItemRank = styled.div`
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  color: white;
`;

const ItemContainer = styled.div`
  width: 96%;
  height: 80px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.3s ease 0s;
  border-bottom: 1px solid #424242;`

const ItemList = ({data}: any) => (
    <div>
        <Container>
            {data.map((item: any) => {
                return (
                    <ItemContainer key={item.userID} style={{
                        top: `${80 * ((item.ranking) - 1)}px`
                    }}>
                        <ItemRank style={{
                            backgroundColor: RANKING_COLOR[item.ranking - 1] || "#8eb9f5"
                        }}>{item.ranking}</ItemRank>
                        <span style={{
                            color: 'rgba(255,255,255,0.5)',
                            paddingLeft: '20px'
                        }}>{item.displayName}</span>
                        <ScoreRecords score={item.score}/>
                    </ItemContainer>
                )
            })}
        </Container>
    </div>
);

export default ItemList;
