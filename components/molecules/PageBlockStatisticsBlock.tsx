import type { PageBlock } from "@/types/Page";

interface StatisticsBlockProps {
    block: PageBlock;
}

const PageBlockStatisticsBlock = ({ block }: StatisticsBlockProps) => {
    return (
        <div className="container mx-auto py-12 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {block.statistics?.map((stat, index) => (
                    <div key={index} className="text-center">
                        <div className="text-4xl font-bold">{stat.value}</div>
                        <div className="text-gray-600">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PageBlockStatisticsBlock; 