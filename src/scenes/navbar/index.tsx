import InstagramIcon from "@/assets/social/Insta.png";
import TelegramIcon from "@/assets/social/Tg.png";
import WhatsAppIcon from "@/assets/social/Whatsapp.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { navItems } from "@/shared/constants";
import { SelectedPage } from "@/shared/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "./Link";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-m`}>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      page={item.label}
                      href={item.href as SelectedPage}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </div>
                <div className={`${flexBetween} gap-8`}>
                  {/* SOCIAL ICONS */}
                  <a
                    href="https://instagram.com/kamshat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Instagram"
                      src={InstagramIcon}
                      className="h-6 w-6 hover:opacity-80 transition"
                    />
                  </a>
                  <a
                    href="https://t.me/Kamshat_BZh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Telegram"
                      src={TelegramIcon}
                      className="h-6 w-6 hover:opacity-80 transition"
                    />
                  </a>
                  <a
                    href="https://wa.me/77080546175"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="WhatsApp"
                      src={WhatsAppIcon}
                      className="h-6 w-6 hover:opacity-80 transition"
                    />
                  </a>
                  <span className="text-m">+7(903)61-35-20</span>
                  <a href="mailto:kamshat@gmail.com" className="text-m">
                  kamshat@gmail.com
                  </a>
                </div>
              </div>
            ) : (
              <button
                className="absolute right-6 top-1 rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[250px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col gap-8 text-2xl">
            {/* NAV ITEMS */}
            <div className="flex flex-col gap-6 pl-4">
              {navItems.map((item) => (
                <Link
                key={item.href}
                page={item.label}
                href={item.href as SelectedPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                ))}
            </div>
            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-8 mt-10">
              <a
                href="https://instagram.com/kamshat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Instagram"
                  src={InstagramIcon}
                  className="h-8 w-8 hover:opacity-80 transition"
                />
              </a>
              <a
                href="https://t.me/Kamshat_BZh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Telegram"
                  src={TelegramIcon}
                  className="h-8 w-8 hover:opacity-80 transition"
                />
              </a>
              <a
                href="https://wa.me/77080546175"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="WhatsApp"
                  src={WhatsAppIcon}
                  className="h-8 w-8 hover:opacity-80 transition"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;