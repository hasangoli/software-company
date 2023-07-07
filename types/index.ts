export type MenuItemType = {
  title: string;
  href: string;
  hasBg?: boolean;
  children?: {
    title: string;
    href: string;
  }[];
};

export type ImagePropsType = {
  src: string;
  alt: string;
  width: string;
  height?: string;
  aspectRatio?: number;
  className?: string;
  imgClass?: string;
};

export type HeroProps = {
  image: string;
  title: string;
  description: string;
};

export type CustomLinkPropsTypes = {
  title: string;
  href: string;
};

export type SolutionProps = {
  image: string;
  title: string;
  description: string;
};

export type ProcessProps = {
  number: string;
  image: string;
  title: string;
};

export type HeaderProps = {
  logo: string;
  data: MenuItemType[];
};

export type SolutionsData = {
  title: string;
  mainTitle: string;
  description: string;
  data: SolutionProps[];
};

export type ProcessesData = {
  title: string;
  mainTitle: string;
  description: string;
  data: ProcessProps[];
};

export type SpecializedProps = {
  image: string;
  title: string;
};

export type SpecializedItemProps = {
  items: SpecializedProps[];
};

export type SpecializedDataProps = {
  title: string;
  mainTitle: string;
  data: SpecializedItemProps[];
};

export type TechnologiesProps = {
  title: string;
  mainTitle: string;
  logos: string[];
};

export type InputType = {
  name: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'date' | 'file' | 'password' | 'tel';
  id?: string;
  placeholder: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export type CustomButtonPropsTypes = {
  title: string;
  type: 'button' | 'submit';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export type SocialProps = {
  link: string;
  icon: string;
};

export type FooterItemProps = {
  title: string;
  icon: string;
};

export type FooterLink = {
  title: string;
  href: string;
};

export type FooterSide = {
  title: string;
  children: FooterLink[];
};

export type FooterProps = {
  logo: string;
  description: string;
  tel: FooterItemProps;
  email: FooterItemProps;
  address: FooterItemProps;
  links: FooterSide[];
  socials: SocialProps[];
};
