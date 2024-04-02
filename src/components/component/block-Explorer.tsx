"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useBlockById } from "@/hooks/blockchainHooks";
import { useEffect, useState } from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
export function BlockExplorer() {
  const [blockIndex, setBlockIndex] = useState(0);
  const { data, isLoading, isError } = useBlockById(blockIndex);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlockIndex(parseInt(e.target.value, 10));
  };
  return (
    <div className="px-4 md:px-6 py-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Block Explorer</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter the block number to view the block header and data.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="block-number">Block Number</Label>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            id="block-number"
            placeholder="Block number"
            onChange={handleChange}
          />
        </div>
      </div>
      {data?.index || data?.index == 0 ? (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              Block Header
            </h2>

            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
              {isLoading ? (
                <Segment>
                  <Dimmer active inverted></Dimmer>
                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                </Segment>
              ) : (
                <>
                  {data?.blockHeader &&
                    Object?.keys(data?.blockHeader)?.map((key, index) => (
                      <div>
                        <p key={index} className="text-base font-mono">
                          {key} :
                        </p>
                        <p className="text-sm font-mono">
                          {typeof data?.blockHeader?.[key] === "object"
                            ? JSON.stringify(data?.blockHeader?.[key])
                            : data?.blockHeader?.[key]}
                        </p>
                      </div>
                    ))}
                </>
              )}
            </div>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">
                Pruned Block
              </h2>
              <div className="grid gap-1.5">
                <p className="text-sm font-medium tracking-wide"></p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                <p className="text-sm font-mono">
                  {isLoading ? (
                    <Segment>
                      <Dimmer active inverted></Dimmer>

                      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                    </Segment>
                  ) : (
                    <>{data?.pruned ? "true" : "false"}</>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Block Data</h2>

            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
              {isLoading ? (
                <Segment>
                  <Dimmer active inverted></Dimmer>
                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                </Segment>
              ) : (
                <>
                  {data?.txns?.map((item: any, index: any) => (
                    <p key={index} className="text-sm font-mono">
                      {JSON.stringify(item)}
                    </p>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              Block Header
            </h2>

            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
              <Segment>
                <Dimmer active inverted></Dimmer>
                <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
              </Segment>
            </div>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">
                Pruned Block
              </h2>
              <div className="grid gap-1.5">
                <p className="text-sm font-medium tracking-wide"></p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                <p className="text-sm font-mono">
                  <Segment>
                    <Dimmer active inverted></Dimmer>

                    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                  </Segment>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Block Data</h2>

            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
              <Segment>
                <Dimmer active inverted></Dimmer>
                <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
              </Segment>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
