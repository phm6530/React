import ProductItem from './ProductItem';
import classes from './Products.module.css';
// import uuid4 from 'uuid4';

const Products = (props) => {

  const products = [
        { 
          id : 1,
          title : 'My First Book',
          price : 10,
          description : 'My frist Book desciprtion'
        },
        { 
          id : 2,
          title : 'My Second Book',
          price : 11,
          description : 'My Second Book desciprtion'
        }
  ]

  // console.log(products)

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {/* 뿌리기 Ok */}
        {products.map((product, idx) =>{
            return <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
          />
        })}
      </ul>
    </section>
  );
};

export default Products;
