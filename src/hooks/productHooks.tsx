import { useQuery, useQueryClient, useMutation } from "react-query";
import productService from "../services/product";

const useMinedProducts = () => {
  return useQuery(["minedProducts"], () => productService.getMinedProducts());
};

const usePendingProducts = () => {
  return useQuery(["pendingProducts"], () =>
    productService.getPendingProducts()
  );
};

const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (formData: any) => {
      return productService.addProduct(formData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("pendingProducts");
      },
    }
  );
};
const useBlockById = (id: any) => {
  return useQuery(["block"], () => productService.getBlockById(id));
};

export { useMinedProducts, usePendingProducts, useCreateProduct, useBlockById };
