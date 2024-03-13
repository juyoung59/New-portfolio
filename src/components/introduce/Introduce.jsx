import React from "react";
import "./Introduce.css";

function Introduce() {
  return(
    <div className="Introduce">
      <h1 className="intro">안녕하세요,<br/> 프론트엔드 개발자 이주영입니다<span className="hand">🤚</span></h1>
      <div className="introduce-me">
        <p>코딩을 하기 위해 책상에 앉으면 시간이 얼마나 흐르는지</p>
        <p>인지하지 못할 정도로 집중하는 제 모습을 발견할 수 있었습니다.</p>
        <p>다양한 분야의 개발을 공부하면서 프론트엔드 개발을 할 때 가장 행복을 느껴</p>
        <p>프론트엔드 개발자가 되겠다는 꿈을 이어가고 있습니다.</p>
        <p>빠르게 변화하는 IT 산업 속에서</p>
        <p>변화에 뒤처지지 않고 항상 성장하는 개발자가 되고 싶습니다.</p>
      </div>
    </div>
  );
};

export default Introduce;