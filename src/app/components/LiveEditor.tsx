import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import React from "react";

const LiveCode = ({ code }: { code: string }) => {
  return (
    <LiveProvider code={code}>
      <div className="mb-2 border dark:border-gray-700 rounded-lg overflow-hidden">
        <LiveEditor className="live-editor !bg-gray-100 dark:!bg-gray-800 !text-gray-900 dark:!text-gray-100" />
      </div>
      <div className="mb-2 live-error rounded-lg">
        <LiveError />
      </div>
      <div className="live-preview p-4">
        <LivePreview />
      </div>
    </LiveProvider>
  );
};

export default LiveCode;
