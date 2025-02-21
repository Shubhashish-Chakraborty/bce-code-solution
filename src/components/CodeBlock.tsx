import React, { useState } from "react";

interface CodeBlockProps {
    title: string;
    code: string;
    output?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ title, code, output }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        } catch (error) {
            console.error("Failed to copy code:", error);
        }
    };

    return (
        <div className="my-6 rounded-lg overflow-hidden shadow-lg bg-slate-800 text-gray-100">
            {/* Title */}
            <h3 className="px-4 py-2 bg-gray-700 text-lg font-semibold">{title}</h3>

            {/* Code Container */}
            <div className="relative">
                {/* Header with copy button */}
                <div className="flex justify-end px-4 py-2 bg-gray-700">
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-400 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M8 3a1 1 0 011-1h2a1 1 0 011 1v1h1a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h1V3zM5 5h10v8H5V5z" />
                        </svg>
                        {isCopied ? "Copied!" : "Copy"}
                    </button>
                </div>

                {/* Code Block */}
                <pre className="p-4 overflow-x-auto text-sm">
                    <code className="whitespace-pre-wrap break-words">{code}</code>
                </pre>
            </div>

            {/* Output Section */}
            {output && (
                <div className="p-4 bg-gray-700">
                    <h4 className="text-lg font-semibold mb-2">Output</h4>
                    <pre className="text-sm whitespace-pre-wrap break-words">{output}</pre>
                </div>
            )}
        </div>
    );
};

export default CodeBlock;