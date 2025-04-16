import Image from "next/image";

import designExample3Image from "../assets/images/design-example-3.png";
import designExample4Image from "../assets/images/design-example-4.png";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-20 overflow-x-clip">
            <div className="container relative">
                <div className="absolute top-10 -left-[100px] hidden lg:block">
                    <Image
                        src={designExample3Image}
                        alt="designExampleImage"
                        className="w-[300px] rounded-lg"
                    ></Image>
                </div>
                <div className="absolute -top-8 -right-24 hidden lg:block">
                    <Image
                        src={designExample4Image}
                        alt="designExampleImage"
                        className="w-[300px] rounded-lg"
                    ></Image>
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Andreas" />
                </div>
                <div className="absolute right-40 top-16 hidden lg:block">
                    <Pointer name="Andreas" color="red" />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-600 to-pink-600 font-semibold rounded-full">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl font-medium text-center mt-5 lg:w-[50rem] mx-auto">
                    Your One-Stop Solution for Digital Excellence
                </h1>
                <p className="text-center text-xl text-white/50 mt-6 lg:w-[49rem] mx-auto">
                    From captivating content and stunning visuals to
                    cutting-edge web development and eCommerce store setup — we
                    offer a full suite of creative and technical services under
                    one roof. Whether you need expert content writing, graphic
                    design, video editing, game development, or support with
                    your Amazon and Shopify stores, our team delivers impactful
                    results tailored to your needs. We also provide reliable
                    call center solutions to ensure seamless customer
                    engagement.
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
