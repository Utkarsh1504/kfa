import { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  Cog8ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import DropDown from "./Dropdown";
import {SearchContext} from "../utils/Context";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [, setContext] = useContext(SearchContext);
 
  useEffect(() => {
    setContext(searchQuery);
  }, [searchQuery, setContext]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <header className="flex flex-col gap-6 items-start sm:flex-row px-4 py-3">
      <h1 className="font-bold text-lg">Products</h1>
      <button className="w-full flex items-center gap-2 p-1 shadow-sm border border-[#d1d5db] rounded sm:w-fit sm:ml-auto">
        <MagnifyingGlassIcon className="text-black w-4 h-4" />
        <input
          type="text"
          placeholder="Search for..."
          className="w-full placeholder:text-sm focus:outline-none"
          onChange={(e) => handleSearchChange(e)}
        />
      </button>
      <DropDown
        iconleft={<ChatBubbleLeftRightIcon className="text-black w-4 h-4" />}
        label={<span className="sm:hidden text-xs">Chats</span>}
        clickable={true}
      />
      <DropDown
        iconleft={<Cog8ToothIcon className="text-black w-4 h-4" />}
        label={<span className="sm:hidden text-xs">Settings</span>}
        clickable={true}
      />
    </header>
  );
};

export default Header;
