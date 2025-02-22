
import { output8, output9a } from "./CodeOutputs";
import { Capsule } from "./components/Capsule";
import CodeBlock from "./components/CodeBlock";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Code } from "./icons/Code";
import { File } from "./icons/File";
import { code8, code9a } from "./PracticalCodes";

export default function App() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            <div className="sticky mt-10 md:mt-0 top-0 z-10 bg-black/10 backdrop-blur-md py-1 shadow-md">
                <div className="mt-2 mb-4 gap-x-4 flex justify-center">
                    <Capsule
                        text="BCE Lab Manual"
                        variant="cap1"
                        onClick={() => { window.open("BCE_LAB.pdf"); }}
                        startIcon={<File />}
                    />
                    <Capsule
                        text="Try out C/C++ Code"
                        variant="cap2"
                        onClick={() => { window.open("https://www.programiz.com/cpp-programming/online-compiler/"); }}
                        startIcon={<Code />}
                    />
                </div>
            </div>

            <Intro />

            <div>
                <CodeBlock title="AIM-8: Write a Program to illustrate Arithmetic expressions" code={code8} output={output8} />
                <CodeBlock title="AIM-9: Write a Program to illustrate Arrays. Program-9a:" code={code9a} output={output9a} />
            </div>


            <div className="text-center">
                <h1 className="text-white text-3xl md:text-6xl lg:text-5xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
                    <span className="bg-gradient-to-r from-emerald-400 via-orange-600 to-blue-400 bg-clip-text text-transparent cursor-pointer">All the best! Regards, Shubhashish ;)</span>
                </h1>
            </div>
        </div>
    )
}