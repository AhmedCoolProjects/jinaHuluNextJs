import logo from "../assets/logo.svg";
import Image from "next/image";
import HeaderIcons from "./HeaderIcons";
// icons
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const HEDER_ICONS = [
  { title: "Home", Icon: HomeIcon },
  { title: "Badge Check", Icon: BadgeCheckIcon },
  { title: "Collection", Icon: CollectionIcon },
  { title: "Lightning Bolt", Icon: LightningBoltIcon },
  { title: "Search", Icon: SearchIcon },
  { title: "User", Icon: UserIcon },
];

function Header() {
  return (
    <header className="flex justify-between items-center flex-col sm:flex-row">
      <div className="flex flex-row w-full justify-between mt-3 pl-2 pr-2 max-w-2xl">
        {HEDER_ICONS.map((item, index) => (
          <HeaderIcons key={index} item={item} />
        ))}
      </div>
      <Image alt="jina-hulu logo" height={55} src={logo} />
    </header>
  );
}

export default Header;
