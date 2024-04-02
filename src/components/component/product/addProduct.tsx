"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { useCreateProduct } from "@/hooks/productHooks";
import { v4 as uuidv4 } from "uuid";

const formSchema = z.object({
  name: z.string().min(3),
  quantity: z.string(),
  price: z.string(),
  status: z.enum(["In Stock", "Out of Stock", "In Transit"]),
});

export default function AddProduct() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      quantity: "",
      price: "",
      status: "In Stock",
    },
  });

  const { mutate: addMutate, isLoading, isError } = useCreateProduct();

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    addMutate({
      id: await uuidv4(),
      ...values,
    });
    form.reset();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Product</CardTitle>
        <CardDescription>Enter product details</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter name"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Quantity</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter quantity"
                            type="number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>price</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter price"
                            type="number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an account type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="In Stock">In Stock</SelectItem>
                            <SelectItem value="Out of Stock">
                              Out of Stock
                            </SelectItem>
                            <SelectItem value="In Transit">
                              In Transit
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>
            <Button type="submit" className="mt-4 w-1/3 self-center">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
