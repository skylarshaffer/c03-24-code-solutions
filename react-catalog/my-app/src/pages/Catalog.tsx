import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product, readCatalog, toDollars } from '../lib';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProducts() {
      try {
        const values = await readCatalog();
        setProducts(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="px-4">Catalog</h1>
      <hr className="py-1" />
      <div className="flex flex-wrap">
        {products?.map((product) => (
          <div
            key={product.productId}
            className="w-full md:w-1/2 lg:w-1/3 pr-4 pl-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  product: Product;
};
function ProductCard({ product }: CardProps) {
  return (
    <Link
      to={'details/' + product.productId}
      className="block cursor-pointer text-gray-900 rounded border border-gray-300 mb-4 shadow-sm">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-80 object-contain"
      />
      <div className="flex-auto p-6">
        <h5 className="text-gray-900 text-lg font-semibold mb-3">
          {product.name}
        </h5>
        <h6 className="text-gray-500  mb-3">{toDollars(product.price)}</h6>
        <p className="text-gray-900 font-normal mb-3">
          {product.shortDescription}
        </p>
      </div>
    </Link>
  );
}
