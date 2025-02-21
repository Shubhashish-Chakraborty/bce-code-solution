
import { Capsule } from "./components/Capsule";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { File } from "./icons/File";

export default function App() {
    return (
        <div className="h-screen bg-black">
            <Navbar/>

            <div className="mt-16 gap-x-4 flex justify-center">
                <Capsule text="BCE Lab Manual" variant="cap1" onClick={() => {window.open("BCE_LAB.pdf")}} startIcon={<File/>}/>
                {/* <Capsule text="TESTTESTTEST" variant="cap2"/> */}
            </div>

            <Intro/>
        </div>
    )
}