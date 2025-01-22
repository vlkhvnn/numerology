export enum SelectedPage {
  About = "about",
  Services = "services",
  Rules = "rules",
  NumericalInfo = "numericalInfo",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string | JSX.Element; // Allow string or JSX for flexibility
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}