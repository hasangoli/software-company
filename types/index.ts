export interface MenuItemType {
  title: string;
  href: string;
  hasBg?: boolean;
  children?: {
    title: string;
    href: string;
  }[];
}

export interface ImagePropsType {
  src: string;
  alt: string;
  width: string;
  height?: string;
  aspectRatio?: number;
  className?: string;
}

export interface hero {
  image: string;
  title: string;
  description: string;
}

export interface CustomLinkPropsTypes {
  title: string;
  href: string;
}

export interface SolutionProps {
  image: string;
  title: string;
  description: string;
}

export interface ProcessProps {
  number: string;
  image: string;
  title: string;
}

export interface header {
  logo: string;
  data: MenuItemType[];
}

export interface solutionsData {
  title: string;
  mainTitle: string;
  description: string;
  data: SolutionProps[];
}

export interface processesData {
  title: string;
  mainTitle: string;
  description: string;
  data: ProcessProps[];
}

export interface SpecializedProps {
  image: string;
  title: string;
}

export interface SpecializedItemProps {
  items: SpecializedProps[];
}

export interface SpecializedDataProps {
  title: string;
  mainTitle: string;
  data: SpecializedItemProps[];
}
