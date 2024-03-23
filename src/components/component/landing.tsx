import { Package2Icon } from "lucide-react";
import Link from "next/link";
import first from "@/assets/landing/1.jpg";
import second from "@/assets/landing/2.jpg";
import third from "@/assets/landing/3.jpg";
import fourth from "@/assets/landing/4.jpg";
import Image from "next/image";

export function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 px-8 ">
        <section className="flex  justify-between  py-6">
          <div className="container grid items-center gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                <Package2Icon className="w-4 h-4 mr-2" /> ABISChain Platform
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                The Future of Supply Chain Management
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                ABISChain integrates blockchain technology and AI agents to
                revolutionize supply chain transparency, efficiency, and
                security. Experience real-time tracking and automated inventory
                management.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contact Us
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="#"
                >
                  Tour the Platform
                </Link>
              </div>
            </div>
            <Image
              alt="Supplychain"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-video"
              height="200"
              src={first}
              width="400"
            />
          </div>
        </section>

        <section className="w-full py-6 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:gap-10">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-video"
                height="310"
                src={second}
                width="550"
              />
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Real-time Tracking
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Track every step of your supply chain in real time.
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  ABISChain's real-time tracking system provides complete
                  visibility into your supply chain operations, allowing you to
                  monitor the movement of goods at every stage.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-6 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:gap-10">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Automated Inventory Management
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Optimize inventory with automated management.
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  ABISChain's AI-powered automated inventory management system
                  leverages machine learning and predictive analytics to
                  optimize inventory levels, reduce stockouts, and minimize
                  excess inventory, leading to improved operational efficiency
                  and cost savings.
                </p>
              </div>
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-video"
                height="310"
                src={third}
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-6 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-video"
              height="310"
              src={fourth}
              width="550"
            />
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:gap-10">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Transparency
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Enhance transparency across the supply chain.
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  ABISChain's blockchain-based platform ensures transparency by
                  recording all transactions and data exchanges on an immutable
                  ledger, providing a trusted and auditable record of the supply
                  chain's activities.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Efficiency
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Drive efficiency with automated processes.
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  ABISChain's AI-powered automated processes streamline supply
                  chain operations, enabling faster decision-making, reducing
                  manual errors, and optimizing resource allocation for improved
                  efficiency and productivity.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-6 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6" />
        </section>
      </main>
    </div>
  );
}
