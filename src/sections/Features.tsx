import FeatureCard from "@/components/FeatureCard";
import Tags from "@/components/Tags";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-20">
            <div className="container">
                <div className="flex justify-center">
                    <Tags>Features</Tags>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6">
                    Where power meets{" "}
                    <span className="text-[#B8945E]">simplicity</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Real-tiem Collaboration"
                        description="Work seamlessly with conflict free team"
                        className="col-span-2 lg:col-span-1"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="avatr 1"
                                    className="rounded-full"
                                ></Image>
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-30">
                                <Image
                                    src={avatar2}
                                    alt="avatr 2"
                                    className="rounded-full"
                                ></Image>
                            </Avatar>{" "}
                            <Avatar className="-ml-6 border-indigo-500 z-20">
                                <Image
                                    src={avatar3}
                                    alt="avatr 3"
                                    className="rounded-full"
                                ></Image>
                            </Avatar>
                            <Avatar className="-ml-6 bg-transparent">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                                    {Array.from({ length: 3 }).map(
                                        (_, index) => (
                                            <span
                                                key={index}
                                                className="size-1.5 rounded-full inline-flex bg-white"
                                            ></span>
                                        )
                                    )}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Interactive prototyping"
                        description=" Engage your clients with prototypes that react
                                    to user actions"
                        className="col-span-2 lg:col-span-1"
                    >
                        <div className="aspect-video flex items-center justify-center ">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                                We've acheived{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-[#B8945E] rounded-full p-1 bg-clip-text text-transparent">
                                    incredible{" "}
                                </span>
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="
                                    Powerful commands to help you work more quickkly"
                        className="col-span-2 md:col-start-2 lg:col-span-1"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28">shift</Key>
                            <Key>alt</Key>
                            <Key>C</Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center pt-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-netural-900 border border-white/10 inline-flex px-3 py-1.5 rounded-2xl gap-3 items-center"
                        >
                            <span className="bg-[#B8945E] text-[#062538] size-5 rounded-full inline-flex items-center justify-center text-xl">
                                &#10038;
                            </span>
                            <span className="font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
