import Tags from "@/components/Tags";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionLogo from "@/assets/images/notion-logo.svg";
import slackLogo from "@/assets/images/slack-logo.svg";
import relumeLogo from "@/assets/images/relume-logo.svg";
import framerLogo from "@/assets/images/framer-logo.svg";
import githubLogo from "@/assets/images/github-logo.svg";
import IntegrationsColumn from "@/components/IntegerationsColumn";

const integrations = [
    {
        name: "Figma",
        icon: figmaIcon,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: notionLogo,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: slackLogo,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: relumeLogo,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: framerLogo,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: githubLogo,
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export type IntegerationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-20 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <Tags>Integerations</Tags>
                        <h2 className="text-6xl font-medium mt-4">
                            Plays well with{" "}
                            <span className="text-[#BA935E]">others</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            AZ seamlessly connects with you favorite tools,
                            making it easy to plug into any workflow and
                            collaborate across platforms.
                        </p>
                    </div>
                    <div className="h-[700px] mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] grid md:grid-cols-2 gap-4">
                        <IntegrationsColumn integrations={integrations} />
                        <IntegrationsColumn
                            integrations={integrations.slice().reverse()}
                            className="hidden md:flex"
                            reverse
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
