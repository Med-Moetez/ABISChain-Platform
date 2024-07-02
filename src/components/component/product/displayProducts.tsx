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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
              <TableHead>User</TableHead>
              <TableHead>Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.products?.map((item: any) => (
              <TableRow key={item?.no}>
                <TableCell>{item?.no}</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={item?.user?.userImageUrl} />
                    <AvatarFallback>{item?.user?.userFullName}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Proto</TableHead>
                        <TableHead>Attack_type</TableHead>
                        <TableHead>service</TableHead>
                        <TableHead>flow_duration</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key={item?.data?.flow_duration}>
                        <TableCell>{item?.data?.flow_duration}</TableCell>

                        <TableCell>{item?.data?.proto}</TableCell>
                        <TableCell>{item?.data?.Attack_type}</TableCell>
                        <TableCell>{item?.data?.service}</TableCell>
                        <TableCell>{item?.data?.flow_duration}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
