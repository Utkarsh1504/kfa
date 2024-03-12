import {
  ChevronDownIcon,
  ArrowsUpDownIcon,
  AdjustmentsHorizontalIcon,
  PlusCircleIcon,
  FolderArrowDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "./Dropdown";

const Filters = () => {
  return (
    <div className="px-4 py-3 border-y border-y-[#d1d5db] flex gap-6 flex-col lg:flex-row">
      <Dropdown
        iconleft={<CubeTransparentIcon className="h-5 w-5 text-black" />}
        label="All brands"
        iconright={<ChevronDownIcon className="h-3 w-3 text-black ml-auto" />}
        clickable={true}
      />

      <Dropdown
        label="Desk"
        iconright={<ChevronDownIcon className="h-3 w-3 text-black ml-auto" />}
        clickable={true}
      />
      <Dropdown
        label="Tags"
        iconright={<ChevronDownIcon className="h-3 w-3 text-black ml-auto" />}
        clickable={false}
      />
      <button
        disabled={true}
        className="opacity-55 flex text-sm items-center gap-2 cursor-not-allowed shadow-sm p-2 rounded border border-[#d1d5db]"
      >
        <ArrowsUpDownIcon className="h-3 w-3 text-black" />
        <span>Sort</span>
      </button>
      <button
        disabled={true}
        className="opacity-55 flex text-sm items-center gap-2 cursor-not-allowed shadow-sm p-2 rounded border border-[#d1d5db]"
      >
        <AdjustmentsHorizontalIcon className="h-3 w-3 text-black" />
        <span>Filter</span>
      </button>

      <span className="ml-auto"></span>
      
      <Dropdown
        iconleft={<PlusCircleIcon className="h-5 w-5 text-black" />}
        label="Meeting"
        clickable={true}
      />
      <Dropdown
        iconleft={<FolderArrowDownIcon className="h-5 w-5 text-black" />}
        label="Import/Export"
        clickable={true}
      />
    </div>
  );
};

export default Filters;
