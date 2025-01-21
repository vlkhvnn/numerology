import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  href: SelectedPage;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, href, selectedPage, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className={`${selectedPage === href ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${href}`}
      onClick={() => setSelectedPage(href)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;