import { ReactElement } from "react";

const variantStyle = {
    cap1 : "bg-BgCap1 text-TextCap1",
    cap2 : "bg-BgCap2 text-TextCap2"
}

const defaultStyles = "px-4 py-2 hover:scale-110 flex  transition-all duration-200 rounded-full text-sm font-medium cursor-pointer items-center gap-2 border border-purple-500/20";

export const Capsule = ({variant , text , startIcon , onClick}: {
    variant: "cap1" | "cap2";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
}) => {
    return (
        <span
            onClick={onClick}
            className={`${variantStyle[variant]} ${defaultStyles}`}
        >   
            {startIcon}
            {text}
        </span>
    )
}