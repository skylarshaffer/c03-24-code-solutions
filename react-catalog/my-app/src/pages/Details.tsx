import { useEffect, useState } from 'react';
import { type Product, readProduct, toDollars } from '../lib';
import { useParams, Link, useNavigate } from 'react-router-dom';

export function Details() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const product = await readProduct(productId);
        setProduct(product);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadProduct(+productId);
    }
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !product) {
    return (
      <div>
        Error Loading Product {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  const { name, imageUrl, longDescription, shortDescription, price } = product;
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="flex-auto p-6">
          <Link to="/" className="p-3 text-gray-600 cursor-pointer">
            &lt; Back to Catalog
          </Link>
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-80 object-contain"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-3/5">
              <h2 className="px-4 font-bold">{name}</h2>
              <h3 className="px-4 font-bold">{toDollars(price)}</h3>
              <p>{shortDescription}</p>
            </div>
          </div>
          <div className="px-4">
            <p className="whitespace-pre-wrap">{longDescription}</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          alert(`Added ${product.name} to cart`);
          navigate('/');
        }}>
        Add to Cart
      </button>
    </div>
  );
}
