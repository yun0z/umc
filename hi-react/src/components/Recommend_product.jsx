import Product_list from './Product_list';
import Product from '../images/상품_1.jpg';
import Product_2 from '../images/상품_2.jpg';

const Recommend_product = () => {
  return (
    <div className="recommend_product">
      <Product_list
        product_img={Product}
        product_link={'https://www.kurly.com/goods/5066745'}
        product_name={'[콜린스 다이닝] 한우 나주식 곰탕'}
        product_sales={'10%'}
        product_price={'7,650원'}
      />
      <Product_list
        product_img={Product_2}
        product_link={'https://www.kurly.com/goods/5043436'}
        product_name={'[메르시] 스톡 초콜릿 3종'}
        product_sales={'10%'}
        product_price={'17,000원'}
      />
    </div>
  );
};
export default Recommend_product;
