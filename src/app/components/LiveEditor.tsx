import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import React from "react";

const LiveCode = ({ code }: { code: string }) => {
  return (
    <LiveProvider code={code}>
      <div className="mb-2 border p-2">
        <LiveEditor />
      </div>
      <div className="mb-2 bg-red-100 text-red-800 p-2">
        <LiveError />
      </div>
      <div className="border p-2">
        <LivePreview />
      </div>
    </LiveProvider>
  );
};

export default LiveCode;
