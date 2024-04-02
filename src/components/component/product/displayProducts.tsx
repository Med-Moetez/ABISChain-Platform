import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

export function DisplayProducts(props: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Last {props?.name} Products</CardTitle>
        <CardDescription>Product details</CardDescription>
      </CardHeader>
      <CardContent className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.products?.map((item: any) => (
              <TableRow key={item?.id}>
                <TableCell>{item?.id}</TableCell>
                <TableCell>{item?.name}</TableCell>
                <TableCell>{item?.quantity}</TableCell>
                <TableCell>${item?.price}</TableCell>
                <TableCell>{item?.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
