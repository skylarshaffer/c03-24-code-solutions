export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  longDescription: string;
};

export async function readCatalog(): Promise<Product[]> {
  const response = await fetch('/api/products');
  if (response.ok !== true) {
    throw new Error('fetch error');
  }
  return await response.json();
}

export async function readProduct(
  productId: number
): Promise<Product | undefined> {
  const response = await fetch(`/api/products/${productId}`);
  if (response.ok !== true) {
    throw new Error('fetch error');
  }
  return await response.json();
}
