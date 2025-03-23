import type { PageBlock } from "@/types/Page";
import PageBlockParagraphBlock from "./PageBlockParagraphBlock";
import PageBlockTwoColumnParagraphBlock from "./PageBlockTwoColumnParagraphBlock";
import PageBlockStatisticsBlock from "./PageBlockStatisticsBlock";
import PageBlockGetInTouchBlock from "./PageBlockGetInTouchBlock";
import PageBlockBannerBlock from "./PageBlockBannerBlock";

const PageBlock = ({ blocks, heroRef }: { blocks: PageBlock[], heroRef: React.RefObject<HTMLDivElement | null> }) => {
    return blocks.map((block) => {
        switch (block.blockType) {
            case 'paragraph':
                return <PageBlockParagraphBlock block={block} />
        }
        switch (block.blockType) {
            case 'twoColumnParagraph':
                return <PageBlockTwoColumnParagraphBlock block={block} />
        }
        switch (block.blockType) {
            case 'statistics':
                return <PageBlockStatisticsBlock block={block} />
        }
        switch (block.blockType) {
            case 'getInTouch':
                return <PageBlockGetInTouchBlock block={block} />
        }
        switch (block.blockType) {
            case 'banner':
                return <PageBlockBannerBlock block={block} />
        }
    })
}

export default PageBlock;