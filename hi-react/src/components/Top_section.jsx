import 마켓컬리_로고 from '../images/마켓컬리_로고.jpg';
import 카테고리 from '../images/카테고리.jpg';

const Top_section = () => {
  return (
    <div className="top_section">
      <div className="search_bar">
        <div className="three_icon">
          <button className="button_color">회원가입</button>
          <div> </div>
          <button className="button_color2">로그인</button>
          <div> </div>
          <button className="button_color3">고객센터</button>
        </div>
        <div className="search_window">
          <img src={마켓컬리_로고}></img>
          <div>
            <button className="logo_button">마켓컬리</button>
            <button className="logo_button2">뷰티컬리</button>
            <span>N</span>
          </div>
          <div className="search_box">
            <input type="text" placeholder="검색어를 입력해 주세요" />
            <button></button>
          </div>
          <div className="icons">
            <div>
              <button className="position"></button>
              <button className="heart"></button>
              <button className="shoplist"></button>
            </div>
          </div>
        </div>
        <div className="menu_bar">
          <div className="category">
            <img src={카테고리} />
            <span>카테고리</span>
          </div>

          <div className="menu_bar_detail">
            <span>신상품</span>
            <span>베스트</span>
            <span>알뜰쇼핑</span>
            <span>특가혜택</span>
          </div>

          <div className="menu_bar_detail2">
            <button>샛별택배 배송안내</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Top_section;
