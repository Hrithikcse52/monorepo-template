"use client";
import { useState } from "react";
import { Button } from "../ui/button";

export function CounterButton(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div className="tw-bg-gray-100 tw-rounded-lg tw-p-6 tw-font-medium">
      <p className="mb-6">
        This component is from{" "}
        <code className="p-1 bg-gray-200 rounded">ui</code>
      </p>
      <div>
        <Button>Click me</Button>
      </div>
    </div>
  );
}
