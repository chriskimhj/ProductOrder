import Card from '../UI/Card';
import classes from './AvailableProducts.module.css';
import ProductItem from './ProductItem/ProductItem';

const DUMMY_PRODUCTS = [
    {
      id: 'm1',
      name: 'Strawhat Luffy Hoodie',
      description: 'Captain of the StrawHat pirates on a hoodie.',
      price: 49.99,
    },
    {
      id: 'm2',
      name: 'Spy X Family Shirt',
      description: 'Mind reading Anya and Bond on a shirt.',
      price: 29.50,
    },
    {
      id: 'm3',
      name: 'Demon Slayer Crewneck',
      description: 'Nezuko in her wooden box on a sweater.',
      price: 39.99,
    },
    {
      id: 'm4',
      name: 'Jujutsu Kaisen Jacket',
      description: 'Gojo eyes on a uniform jacket',
      price: 59.99,
    },
  ];

const AvailableProducts = () => {
  const productsList = DUMMY_PRODUCTS.map( (product) => ( 
    <ProductItem 
      id={product.id}
      key={product.id} 
      name={product.name} 
      description={product.description} 
      price={product.price}>
    </ProductItem>
    ));

  return (
    <section className={classes.products}>
      <Card>
        <ul>
            {productsList}
        </ul>
      </Card>
    </section>
  );

};

export default AvailableProducts;