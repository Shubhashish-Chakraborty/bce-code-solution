
import { output8, output9a } from "./CodeOutputs";
import { Capsule } from "./components/Capsule";
import CodeBlock from "./components/CodeBlock";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Code } from "./icons/Code";
import { File } from "./icons/File";
import { code10a, code10b, code11, code12, code13, code14, code15, code16, code17, code18, code19, code20, code8, code9a, code9b } from "./PracticalCodes";

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
                <CodeBlock title="AIM-9: Write a Program to illustrate Arrays. Program-9b:" code={code9b} />
                <CodeBlock title="AIM-10: Write a Program to illustrate functions. Program-10a:" code={code10a} />
                <CodeBlock title="AIM-10: Write a Program to illustrate functions. Program-10b:" code={code10b} />
                <CodeBlock title="AIM-11: Write a Program to illustrate constructor & Destructor:" code={code11} />
                <CodeBlock title="AIM-12: Write a Program to illustrate Object and classes:" code={code12} />
                <CodeBlock title="AIM-13: Write a Program to illustrate Operator overloading:" code={code13} />
                <CodeBlock title="AIM-14: Write a Program to illustrate Function overloading:" code={code14} />
                <CodeBlock title="AIM-15: Write a Program to illustrate Derived classes & Inheritance:" code={code15} />
                <CodeBlock title="AIM-16: Write a Program to insert and delete and element from the Stack:" code={code16} />
                <CodeBlock title="AIM-17: Write a Program to insert and delete and element from the Queue:" code={code17} />
                <CodeBlock title="AIM-18: Write a Program to insert and delete and element from the Linked List:" code={code18} />
                <CodeBlock title="AIM-19: Write a Program to implement virtual function:" code={code19} />
                <CodeBlock title="AIM-20: Write a Program to implement friend function:" code={code20} />
            </div>


            <div className="text-center">
                <h1 className="text-white text-3xl md:text-6xl lg:text-5xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
                    <span className="bg-gradient-to-r from-emerald-400 via-orange-600 to-blue-400 bg-clip-text text-transparent cursor-pointer">All the best! Regards, Shubhashish ;)</span>
                </h1>
            </div>
        </div>
    )
}