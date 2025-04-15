import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tags(props: HTMLAttributes<HTMLElement>) {
    const { className, children, ...rest } = props;
    return (
        <div
            className={twMerge(
                "inline-flex border border-[#BA935E] text-[#BA935E] gap-2 px-3 py-1 rounded-full uppercase items-center ",
                className
            )}
            {...rest}
        >
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
}
