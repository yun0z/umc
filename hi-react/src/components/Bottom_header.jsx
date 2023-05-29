import 카테고리 from '../images/카테고리.jpg';
const Bottom_header = () => {
  return (
    <div class="bottom_header">
      <div class="category">
        <div class="category_1">
          <img src={카테고리} />
          <a>카테고리</a>
        </div>
        <div class="category_2">
          <a>신상품</a>
          <a>베스트</a>
          <a>알뜰쇼핑</a>
          <a>특가/혜택</a>
        </div>
        <div class="category_3">
          <div>
            샛별・택배<span>배송안내</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bottom_header;
