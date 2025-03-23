import type { PageBlock } from "@/types/Page";

interface GetInTouchBlockProps {
    block: PageBlock;
}

const PageBlockGetInTouchBlock = ({ block }: GetInTouchBlockProps) => {
    return (
        <div className="container mx-auto py-12 bg-primary-50">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">{block.title}</h2>
                <p className="mb-6">{block.description}</p>
                <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
                    {block.buttonText || 'Contact Us'}
                </button>
            </div>
        </div>
    );
};

export default PageBlockGetInTouchBlock; 