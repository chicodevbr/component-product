import Product from './components/Product';
import data from './data/data';

export default function App() {
  console.log('Teste no console do navegador');

  return (
    <div>
      <header>
        <div className="bg-red-600 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl text-yellow-100">
            React Products
          </h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4 grid grid-cols-4 gap-2">
          {data.map((product) => (
            <Product
              key={product.id}
              image={product.image}
              alt={product.name}
              name={product.name}
              unit={product.unit}
              price={product.price}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
