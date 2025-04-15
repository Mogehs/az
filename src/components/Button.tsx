import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const classes = cva("px-6 h-12 rounded-full font-medium border", {
    variants: {
        variant: {
            primary: "bg-[#062538] text-white border-[#062538]",
            secondary: "bg-black text-black bg-transparent border-[#062538]",
        },
    },
});
export default function Button(
    props: {
        variant: "primary" | "secondary";
    } & HTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, ...rest } = props;
    return (
        <button
            className={classes({
                variant,
                className,
            })}
            {...rest}
        />
    );
}
