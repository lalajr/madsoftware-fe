import { PortableTextBlock } from '@portabletext/types';
import { Image } from 'sanity';

export type PageTitle = {
  highlightedText: string;
  mainText: string;
}

export type StatisticItem = {
  count: string;
  label: string;
}

export type PageBlockBase = {
  internalName: string;
  blockType: 'paragraph' | 'twoColumnParagraph' | 'statistics' | 'getInTouch' | 'banner';
}

export type ParagraphBlock = PageBlockBase & {
  blockType: 'paragraph';
  content: PortableTextBlock[];
}

export type TwoColumnParagraphBlock = PageBlockBase & {
  blockType: 'twoColumnParagraph';
  leftColumn: PortableTextBlock[];
  rightColumn: PortableTextBlock[];
}

export type StatisticsBlock = PageBlockBase & {
  blockType: 'statistics';
  statistics: StatisticItem[];
}

export type GetInTouchBlock = PageBlockBase & {
  blockType: 'getInTouch';
  email: string;
  phone: string;
  office: string;
}

export type BannerBlock = PageBlockBase & {
  blockType: 'banner';
  image: {
    asset: {
      url: string;
    };
  };
}

export type PageBlock = 
  | ParagraphBlock 
  | TwoColumnParagraphBlock 
  | StatisticsBlock 
  | GetInTouchBlock 
  | BannerBlock;

export type Page = {
  _id: string;
  internalName: string;
  title: PageTitle;
  blocks: PageBlock[];
}