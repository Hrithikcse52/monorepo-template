// "use client";
// import { useState } from "react";

export function CounterButton(): JSX.Element {
  // const [count, setCount] = useState(0);

  return (
    <div className="tw-bg-gray-100 tw-rounded-lg tw-p-6 tw-font-medium">
      <p className="mb-6">
        This component is from{" "}
        <code className="p-1 bg-gray-200 rounded">ui</code>
      </p>
      <div>
        <button
          className="tw-bg-black tw-text-white tw-border-none tw-py-2 tw-px-4 tw-rounded tw-inline-block tw-cursor-pointer"
          // onClick={() => {
          //   // setCount((c) => c + 1);
          // }}
          type="button"
        >
          {/* Count: {count} */}
        </button>
      </div>
    </div>
  );
}
