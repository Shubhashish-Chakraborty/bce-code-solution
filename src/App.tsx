
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

            <div className="mt-16 gap-x-4 flex justify-center">
                <Capsule text="BCE Lab Manual" variant="cap1" onClick={() => { window.open("BCE_LAB.pdf") }} startIcon={<File />} />
                <Capsule text="Try out C/C++ Code" variant="cap2" onClick={() => { window.open("https://www.programiz.com/cpp-programming/online-compiler/") }} startIcon={<Code />} />
            </div>

            <Intro />

            <div>
                <CodeBlock title="AIM-8: Write a Program to illustrate Arithmetic expressions" code={code8} output={output8}/>
                <CodeBlock title="AIM-9: Write a Program to illustrate Arrays. Program-9a:" code={code9a} output={output9a}/>
            </div>
        </div>
    )
}