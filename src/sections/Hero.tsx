import Image from "next/image";
import designExample1Image from "../assets/images/design-example-1.png";
import designExample2Image from "../assets/images/design-example-2.png";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -top-12 -left-[130px] hidden lg:block">
                    <Image
                        src={designExample1Image}
                        alt="designExampleImage"
                    ></Image>
                </div>
                <div className="absolute -top-20 -right-64 hidden lg:block">
                    <Image
                        src={designExample2Image}
                        alt="designExampleImage"
                    ></Image>
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Andreas" />
                </div>
                <div className="absolute right-56 top-16 hidden lg:block">
                    <Pointer name="Andreas" color="red" />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-600 to-pink-600 font-semibold rounded-full">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl font-medium text-center mt-5 lg:w-[65vw] mx-auto">
                    Impactful Websites, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-6 lg:w-[62vw] mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint dicta numquam veritatis quas incidunt reprehenderit!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corporis, architecto quod?
                </p>
                <form className="flex sm:flex-row items-center gap-4 sm:gap-0 border border-white/15 rounded-full p-2 mt-8 max-w-xl mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 h-12 w-full sm:w-auto flex-1"
                    />
                    <button
                        type="submit"
                        className="bg-[#BA935E] rounded-full h-12 px-6 whitespace-nowrap w-[32vw] sm:w-auto"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </section>
    );
}
