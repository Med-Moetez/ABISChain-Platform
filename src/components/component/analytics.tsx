"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveWaffle } from "@nivo/waffle";
import { useBlockchainStats } from "@/hooks/blockchainHooks";

export function Analytics() {
  const { data: blockchainStats } = useBlockchainStats();
  let totalSum =
    blockchainStats?.dataType?.financeValue +
    blockchainStats?.dataType?.healthValue +
    blockchainStats?.dataType?.itValue;

  // Calculate percentages
  let financePercentage =
    (blockchainStats?.dataType?.financeValue / totalSum) * 100;
  let healthPercentage =
    (blockchainStats?.dataType?.healthValue / totalSum) * 100;
  let itPercentage = (blockchainStats?.dataType?.itValue / totalSum) * 100;

  const datatype = { financePercentage, healthPercentage, itPercentage };

  const typesstats = blockchainStats?.typesStats;

  const minedtransactionscount = blockchainStats?.blockchainTransactionsCount;
  const pendingtransactionscount = blockchainStats?.pendingTransactionsCount;
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grid min-h-[calc(100vh_-_theme(spacing.14))] gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="flex flex-col">
            <CardHeader>
              <CardDescription>Mined blocks</CardDescription>
              <CardTitle>Blockchain Blocks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-8xl self-center">
                {blockchainStats?.blocksCount || 0}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Transactions</CardDescription>
              <CardTitle>Mined / pending transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <MyResponsiveWaffle
                minedtransactionscount={minedtransactionscount}
                pendingtransactionscount={pendingtransactionscount}
                className="aspect-[4/3]"
              />
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardDescription>Agents types</CardDescription>
              <CardTitle>Agents types</CardTitle>
            </CardHeader>
            <CardContent>
              <LabelledpiNodeseChart
                typesstats={typesstats}
                className="aspect-[4/3]"
              />
            </CardContent>
          </Card>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="flex flex-col">
            <CardHeader>
              <CardDescription>Block Transactions</CardDescription>
              <CardTitle>Number of transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart
                txnlengths={blockchainStats?.txnLengths}
                className="aspect-[4/3]"
              />
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardDescription>Blockchain Data types</CardDescription>
              <CardTitle>Data types</CardTitle>
            </CardHeader>
            <CardContent>
              <LabelledpieChart datatype={datatype} className="aspect-[4/3]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Pruning Info</CardDescription>
              <CardTitle>Last Block details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center">
                <div>Pruner</div>
                <div className="font-semibold ml-auto">
                  {blockchainStats?.prunerId || "Not yet"}
                </div>
              </div>
              <div className="flex items-center">
                <div>lastTime Pruned</div>
                <div className="font-semibold ml-auto">
                  {blockchainStats?.lastTimePruned || "Not yet"}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ArrowLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function CalendarClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <path d="M17.5 17.5 16 16.25V14" />
      <path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
    </svg>
  );
}

function StackedbarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", desktop: 111, mobile: 99 },
          { name: "Feb", desktop: 157, mobile: 87 },
          { name: "Mar", desktop: 129, mobile: 89 },
          { name: "Apr", desktop: 187, mobile: 151 },
          { name: "May", desktop: 119, mobile: 127 },
          { name: "Jun", desktop: 20, mobile: 121 },
        ]}
        keys={["desktop", "mobile"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb", "#e11d48"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A stacked bar chart"
      />
    </div>
  );
}

function DotChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveScatterPlot
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear" }}
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function GroupedbarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", desktop: 111, mobile: 99 },
          { name: "Feb", desktop: 157, mobile: 87 },
          { name: "Mar", desktop: 129, mobile: 89 },
          { name: "Apr", desktop: 187, mobile: 151 },
          { name: "May", desktop: 119, mobile: 127 },
          { name: "Jun", desktop: 20, mobile: 121 },
        ]}
        keys={["desktop", "mobile"]}
        indexBy="name"
        groupMode="grouped"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb", "#e11d48"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A grouped bar chart"
      />
    </div>
  );
}

function LineChart(props: any) {
  const chartData = props?.txnlengths?.map((item: any, index: any) => {
    return { x: index, y: item };
  });
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: chartData || [],
          },
          // {
          //   id: "Mobile",
          //   data: [
          //     { x: "Jan", y: 60 },
          //     { x: "Feb", y: 48 },
          //     { x: "Mar", y: 177 },
          //     { x: "Apr", y: 78 },
          //     { x: "May", y: 96 },
          //     { x: "Jun", y: 204 },
          //   ],
          // },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{ tickSize: 0, tickValues: 5, tickPadding: 16 }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function LabelledpieChart(props: any) {
  const { datatype } = props;
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          {
            id: "Health",
            value: datatype?.healthPercentage || 0,
          },
          {
            id: "Finance",
            value: datatype?.financePercentage || 0,
          },
          {
            id: "IT",
            value: datatype?.itPercentage || 0,
          },
        ]}
        sortByValue
        margin={{ top: 30, right: 50, bottom: 30, left: 50 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={2}
        borderWidth={1}
        arcLinkLabelsThickness={1}
        enableArcLabels={false}
        colors={["#e11d48", "#2563eb", "#545454"]}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function LabelledpiNodeseChart(props: any) {
  const { typesstats } = props;
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          {
            id: "FullNode",
            value: typesstats?.fullNodeCount,
          },
          {
            id: "LightNode",
            value: typesstats?.lightNodeCount,
          },
        ]}
        sortByValue
        margin={{ top: 30, right: 50, bottom: 30, left: 50 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={2}
        borderWidth={1}
        arcLinkLabelsThickness={1}
        enableArcLabels={false}
        colors={["#e11d48", "#2563eb"]}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function MyResponsiveWaffle(props: any) {
  const total =
    props?.pendingtransactionscount + props?.minedtransactionscount || 0;
  const data = [
    {
      id: "Mined",
      label: "Mined",
      value: props?.minedtransactionscount || 0,
    },
    {
      id: "Pending",
      label: "Pending",
      value: props?.pendingtransactionscount || 0,
    },
  ];
  return (
    <div {...props}>
      <ResponsiveWaffle
        data={data}
        total={total}
        rows={18}
        columns={14}
        padding={1}
        valueFormat=".2f"
        margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
        colors={{ scheme: "nivo" }}
        borderRadius={3}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.3]],
        }}
        motionStagger={2}
        legends={[
          {
            anchor: "top-left",
            direction: "column",
            justify: false,
            translateX: -100,
            translateY: 0,
            itemsSpacing: 4,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 1,
            itemTextColor: "#777",
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                  itemBackground: "#f7fafb",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}
