import {
  Bars4Icon,
  CodeBracketIcon,
  MegaphoneIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
  UserPlusIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Folder from "./Folder";
import { useState } from "react";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const teams = [
    {
      label: "Design Team",
      icon: <PencilSquareIcon className="w-4 h-4 text-black" />,
    },
    {
      label: "Marketing Team",
      icon: <MegaphoneIcon className="w-4 h-4 text-black" />,
    },
    {
      label: "Development Team",
      icon: <CodeBracketIcon className="w-4 h-4 text-black" />,
    },
    {
      label: "Create a Team",
      icon: <PlusCircleIcon className="w-5 h-5 text-black" />,
    },
  ];
  return (
    <>
      <button
        onClick={() => {
          setMenuOpen((p) => !p);
        }}
      >
        <Bars4Icon className="text-black w-[20px] h-[20px] opacity-55 xl:hidden block" />
      </button>

      <nav
        className={` ${
          menuOpen
            ? "top-0 left-0 absolute z-10 md:w-1/2 w-full flex h-full"
            : "hidden"
        }  flex-col gap-4 min-h-screen border rounded-xl border-[#e5e7eb] xl:flex p-2 bg-white`}
      >
        {menuOpen && (
          <button
            onClick={() => {
              setMenuOpen((p) => !p);
            }}
          >
            <XCircleIcon className={`w-6 h-6 text-black opacity-75 ml-auto`} />
          </button>
        )}
        <div className="flex gap-12 w-full">
          <Link to="/" className="flex gap-2 items-center">
            <div className="w-10">
              <img
                src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
                alt="logo"
                className="w-full"
              />
            </div>

            <div className="flex flex-col items-start">
              <span className="font-medium opacity-35">INC</span>
              <span className="font-bold">InnovateHub</span>
            </div>
          </Link>
          <Link to="/" className="w-8 h-8 ml-auto rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=1380&t=st=1710228101~exp=1710228701~hmac=069ca45fb73040147ee1fd73431ad52f198da61cb9ab42caf127779a9fb4c058"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex flex-col items-start font-semibold [&>*]:p-2 rounded-xl border border-[#d1d5db]">
          {teams.map((team, ind) => {
            const last = teams.length - 1 === ind;
            return (
              <div
                key={team.label}
                data-last={last}
                className="text-sm data-[last=true]:border-t data-[last=true]:opacity-55 border-[#e5e7eb] w-full flex items-center gap-1 hover:bg-gray-100 transition-all"
              >
                {team.icon}
                <span>{team.label}</span>
                <span className="ml-auto bg-gray-50 border border-[#d1d5db] text-gray-400 text-xs px-2 py-1 rounded">
                  x+{ind + 1}
                </span>
              </div>
            );
          })}
        </div>
        <div className="text-sm border-[#d1d5db] opacity-50 w-full flex items-center gap-1 hover:bg-gray-100 transition-all p-2 mb-[-15px] rounded-md">
          <span className="uppercase font-semibold">Folders</span>
          <PlusIcon className="w-5 h-5 text-black ml-auto" />
        </div>

        <Folder />

        <Link
          to="/"
          className="mt-auto mb-[-10px] text-sm border-[#d1d5db] w-full flex flex-col gap-1 transition-all p-2 rounded-md"
        >
          <div className="flex gap-2 rounded py-2 hover:bg-gray-100">
            <UserPlusIcon className="w-5 h-5 text-black" />
            <span>Invite teammates</span>
          </div>
          <div className="flex gap-2 py-2 rounded hover:bg-gray-100">
            <QuestionMarkCircleIcon className="w-5 h-5 text-black" />
            <span>Help and first steps</span>
          </div>
        </Link>
        <button className="mb-6 text-xs border-[#e5e7eb] w-full flex items-center gap-1 bg-gray-100 p-2 rounded-md">
          <span>7 days left on trial</span>
          <span className="px-2 py-1 text-sm bg-black rounded-md text-white ml-auto">
            Add billing
          </span>
        </button>
      </nav>
    </>
  );
};

export default Sidebar;
