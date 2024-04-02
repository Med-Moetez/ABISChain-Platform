"use client";
import { useMinedProducts, usePendingProducts } from "@/hooks/productHooks";
import AddProduct from "./product/addProduct";
import { DisplayProducts } from "./product/displayProducts";

export function Products() {
  const { data: minedProducts } = useMinedProducts();
  const { data: pendingProducts } = usePendingProducts();
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="flex flex-col gap-4 md:gap-8">
          <DisplayProducts name="Mined" products={minedProducts?.txns} />
          <DisplayProducts name="Pending" products={pendingProducts} />
          <AddProduct />
        </div>
      </main>
    </div>
  );
}
