import { Github } from "../icons/Github"
import { Redirect } from "../icons/Redirect"
import { Button } from "../ui/Button"

export const Navbar = () => {
    return (
            <div className="flex justify-center">
                <div className="w-290  h-16 border-1 mt-2 border-gray-600 rounded-2xl flex flex-col md:flex-row md:justify-around items-center">
                    <div className="md:hover:scale-110 cursor-pointer transition-all duration-500">
                        <img src="webLogo.png" className="w-48" alt="websiteLogo"/>
                    </div>

                    <div className="flex justify-center md:mt-0 mt-4 items-center gap-4">
                        <Button text="Made By Shubh" variant="primary" endIcon={<Redirect/>} onClick={() => {window.open("https://github.com/Shubhashish-Chakraborty/bce-code-solution")}}/>
                        <div onClick={() => {window.open("https://github.com/Shubhashish-Chakraborty")}} className="hover:scale-110 cursor-pointer transition-all duration-300">
                            <Github/>
                        </div>
                    </div>
                </div>
            </div>
    )
}