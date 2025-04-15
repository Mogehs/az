import Tags from "@/components/Tags";

const text = `You aim to excel in content creation, design, development, and e-commerce — but switching between complex tools slows you down.`;

export default function Introduction() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tags>Introducing the layers</Tags>
                </div>
                <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                    <span>Your creative process deserves better</span>{" "}
                    <span className=" text-white/15">{text}</span>
                    <span className="text-[#BA935E]">
                        That&apos;s why we built Layers
                    </span>
                </div>
            </div>
        </section>
    );
}
