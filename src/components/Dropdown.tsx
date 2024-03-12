import { Dropdown } from "antd";
import { Link } from "react-router-dom";

interface Item {
  key: string;
  label: React.ReactNode;
  disabled?: boolean;
}

interface Props {
  label: React.ReactNode;
  iconleft?: React.ReactNode;
  iconright?: React.ReactNode;
  clickable: boolean;
}

const items: Item[] = [
  {
    key: "1",
    label: "Lorem ipsum",
    disabled: false,
  },
  {
    key: "2",
    label: "Lorem ipsum",
    disabled: true,
  },
  {
    key: "3",
    label: "Lorem ipsum",
    disabled: true,
  },
];

const DropDown: React.FC<Props> = ({
  label,
  iconleft,
  iconright,
  clickable,
}) => {
  return (
    <Dropdown menu={{ items }} trigger={[`${clickable ? "click" : "hover"}`]}>
      <Link to="/" onClick={(e) => e.preventDefault()}>
        <button className="flex text-sm items-center gap-2 cursor-pointer shadow-sm p-2 rounded border border-[#e5e7eb] hover:bg-gray-100 transition-all ">
          {iconleft}
          {label}
          {iconright}
        </button>
      </Link>
    </Dropdown>
  );
};

export default DropDown;
