
import { Capsule } from "./components/Capsule";
import CodeBlock from "./components/CodeBlock";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { File } from "./icons/File";

export default function App() {
    const codeTest = `#include <iostream>
using namespace std;

int main() {
    cout << "Hello world!!" << endl;
    return 0;
}`
    return (
        <div className="h-screen bg-black">
            <Navbar/>

            <div className="mt-16 gap-x-4 flex justify-center">
                <Capsule text="BCE Lab Manual" variant="cap1" onClick={() => {window.open("BCE_LAB.pdf")}} startIcon={<File/>}/>
                {/* <Capsule text="TESTTESTTEST" variant="cap2"/> */}
            </div>

            <Intro/>

            <div>
                <CodeBlock title="Website Under Development Wait for some time to complete!!" code={codeTest} output="Hello World!!"/>
                <CodeBlock title="Website Under Development Wait for some time to complete!!" code={codeTest} output="Hello World!!"/>
            </div>
        </div>
    )
}