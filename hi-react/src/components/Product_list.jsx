const Product_list = ({ product_img, product_link, product_name, product_sales, product_price }) => {
  return (
    <div className="product_list">
      <a className="product_top" href={product_link}>
        <img className="product_img" src={product_img} />
      </a>
      <a className="product_bottom" href={product_link}>
        <div>
          <h3>{product_name}</h3>
          <div>
            {product_sales} <span>{product_price}</span>
          </div>
          <div>후기 999+</div>
        </div>
      </a>
    </div>
  );
};
export default Product_list;
