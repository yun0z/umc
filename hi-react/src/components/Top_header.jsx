import 고객센터_화살표 from '../images/고객센터_화살표.jpg';
import 마켓컬리_로고 from '../images/마켓컬리_로고.jpg';
import icon from '../images/검색창_아이콘.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styled from 'styled-components';

styled.button`
  width: 30px;
  height: 30px;
  margin: 8px;
  border: none;
  cursor: pointer;
`;
const Top_header = () => {
  //react-router-dom
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const moveFunc = () => {
    setCount(count + 1); // count 값을 1 증가시킴
    navigate('/Membership_page');
  };
  //useeffect(회원 방문 수 +1)

  useEffect(() => {
    document.title = `회원 방문 수 : ${count}`;
  }, [count]); // count 값이 변경될 때마다 실행됨
  return (
    <div className="top_header">
      <div className="top_1">
        <Link to="/Membership_page" className="top_a" onClick={moveFunc}>
          회원가입
        </Link>
        <div className="top_line"></div>
        <a>로그인</a>
        <div className="top_line"></div>
        <div>
          <div>
            <a className="top_sub1">
              고객센터
              <img src={고객센터_화살표} className="img_arrow" />
            </a>
            <div className="top_sub2">
              <div>공지사항</div>
              <div>자주하는 질문</div>
              <div>1:1 문의</div>
              <div>대량주문 문의</div>
            </div>
          </div>
        </div>
      </div>
      <div className="top_2">
        <div className="top_logo">
          <img src={마켓컬리_로고}></img>
          <a className="market">마켓컬리</a>
          <div className="title_line"></div>
          <a className="beauty">뷰티컬리</a>
          <span className="N"></span>
        </div>
        <div className="top_search">
          <div className="search_detail">
            <input type="text" placeholder="검색어를 입력해주세요"></input>
            <button type="button">
              <img src={icon} alt="123" />
            </button>
          </div>
        </div>
        <div className="icon3">
          <div className="icon_detail">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Top_header;
