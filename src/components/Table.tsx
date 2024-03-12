import {
  ChatBubbleLeftRightIcon,
  PlusIcon,
  ChevronDoubleDownIcon,
  XMarkIcon,
  ArchiveBoxIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import tabledata from "../data/data.json";
import colorVariants from "../utils/colors";
import { useEffect, useRef, useState, useContext } from "react";
import { SearchContext } from "../utils/Context";
import DropDown from "./Dropdown";

interface Company {
  brand_name: string;
  brand_chat?: number;
  brand_logo: string;
  description: string;
  members: string[];
  categories: { label: string; color: string }[];
  tags: string[];
  time: string;
}

export default function Table() {
  const checkAllRef = useRef<HTMLInputElement>(null);
  const [checkBoxes, setCheckBoxes] = useState<{
    [key: string]: boolean;
  }>({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
  });
  const [checkCount, setCheckCount] = useState<number>(0);

  //fetching the search query from context
  const [context] = useContext(SearchContext);

  useEffect(() => {
    let check_count = 0;
    Object.keys(checkBoxes).forEach((key) => {
      if (checkBoxes[key]) {
        check_count++;
      }
    });
    setCheckCount(() => check_count);
    if (check_count === 10 && checkAllRef.current) {
      checkAllRef.current.checked = true;
    } else if (checkAllRef.current) {
      checkAllRef.current.checked = false;
    }
  }, [checkBoxes]);

  const handleCheckboxChange = (i: number) => {
    setCheckBoxes((p) => {
      const flip = !p[`checkbox${i + 1}`];
      return {
        ...p,
        [`checkbox${i + 1}`]: flip,
      };
    });
  };

  const handleCheckBox = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const { checked } = e.currentTarget;
    if (checked) {
      setCheckBoxes((p) => {
        const checkAll: { [key: string]: boolean } = {};
        Object.entries(p).forEach(([key]) => {
          checkAll[key] = true;
        });
        return checkAll;
      });
    } else {
      setCheckBoxes((p) => {
        const checkAll: { [key: string]: boolean } = {};
        Object.entries(p).forEach(([key]) => {
          checkAll[key] = false;
        });
        return checkAll;
      });
    }
  };

  return (
    <>
      <div className="bg-white flex flex-col gap-3 w-full">
        <div className="overflow-auto">
          <table className="w-full mb-4">
            <thead className="text-normal text-left">
              <tr className="[&>*]:px-4">
                <th className="border-r border-gray-200 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="checkAll"
                      className="cursor-pointer accent-black w-4 h-4 opacity-30 checked:opacity-100"
                      ref={checkAllRef}
                      onClick={(e) => handleCheckBox(e)}
                    />
                    <span className="opacity-55">Brand</span>
                    <PlusIcon className="w-5 h-5 opacity-55 ml-auto" />
                  </div>
                </th>
                <th className="opacity-55 border-r border-gray-200 px-4 py-2">
                  Description
                </th>
                <th className="opacity-55 border-r border-gray-200 px-4 py-2">
                  Members
                </th>
                <th className="opacity-55 border-r border-gray-200 px-4 py-2">
                  Categories
                </th>
                <th className="opacity-55 border-r border-gray-200 px-4 py-2">
                  Tags
                </th>
                <th className="opacity-55 border-r border-gray-200 px-4 py-2">
                  Next Meeting
                </th>
                <th className="opacity-55 border border-gray-200 px-4 py-2">
                  <PlusIcon className="text-black w-5 h-5" />
                </th>
              </tr>
            </thead>

            <tbody className="divide-y bg-white">
              {tabledata
                .filter((company: Company) =>
                  company.brand_name.toLowerCase().includes(context)
                )
                .map((company: Company, i: number) => {
                  return (
                    <tr
                      key={company.brand_name}
                      className={`[&>*]:px-4 [&>*]: font-medium  ${
                        checkBoxes[`checkbox${i + 1}`] ? "bg-gray-100" : "hi"
                      } `}
                    >
                      <td
                        className="cursor-pointer hover:bg-gray-100 border border-gray-200 px-4 py-2"
                        onClick={() => {
                          handleCheckboxChange(i);
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            name={`checkbox${i + 1}`}
                            checked={checkBoxes[`checkbox${i + 1}`]}
                            className="cursor-pointer accent-black w-4 h-4 opacity-30 checked:opacity-100"
                            onChange={() => {}}
                          />
                          <div className="rounded-md w-7 overflow-hidden">
                            <img
                              src={company.brand_logo}
                              alt={company.brand_name}
                              className="w-full object-cover"
                            />
                          </div>
                          {company.brand_name}
                          {company.brand_chat ? (
                            <div className="opacity-55 flex items-center gap-2 ml-auto">
                              <ChatBubbleLeftRightIcon className="w-5 h-5" />
                              {company.brand_chat}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </td>
                      <td className="max-w-[200px] truncate border border-gray-200 px-4 py-2 ">
                        {company.description}
                      </td>
                      <td className="relative border border-gray-200 px-4 py-2">
                        {company.members.map((member, idx) => {
                          return (
                            <div
                              key={member}
                              style={{ left: idx * 20 }}
                              className={`ml-4 absolute top-1/2  -translate-y-1/2 rounded-full w-8 h-8 border-2 border-white bg-black overflow-hidden`}
                            >
                              <img
                                src={member}
                                alt="member"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          );
                        })}
                      </td>
                      <td className="text-sm border border-gray-200 px-4 py-2">
                        <div className="flex gap-2 items-center  ">
                          {company.categories.map((category) => {
                            const { label, color } = category;
                            return (
                              <span
                                key={label}
                                className={`${colorVariants[color]} border px-2 text-sm rounded-lg capitalize`}
                              >
                                {label}
                              </span>
                            );
                          })}
                        </div>
                      </td>
                      <td className="overflow-hidden max-w-[50px] text-xs border border-gray-200 px-4 py-2">
                        <div className="flex gap-2 overflow-hidden">
                          {company.tags.map((tag) => {
                            return (
                              <div
                                key={tag}
                                className="bg-gray-100 border border-gray-400 text-gray-400 rounded-md px-2 py-1 cursor-pointer"
                              >
                                #{tag}
                              </div>
                            );
                          })}
                        </div>
                      </td>
                      <td className="overflow-hidden max-w-[50px] text-xs border border-gray-200 px-4 py-2">
                        <div className="flex items-center justify-start ">
                          <span className="bg-green-50 border border-green-600 text-green-600 rounded-md px-2">
                            {company.time}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              <tr className="text-end [&>*]:px-4 [&>*]: font-medium text-xs">
                <td className="border border-gray-200 px-4 py-2">
                  {
                    tabledata.filter((company: Company) =>
                      company.brand_name.toLowerCase().includes(context)
                    ).length
                  }
                  <span className="ml-2 opacity-55">results</span>
                </td>
                {Array(4)
                  .fill(0)
                  .map((_, idx) => {
                    return (
                      <td
                        key={idx}
                        className="opacity-55 cursor-pointer border border-gray-200 px-4 py-2"
                      >
                        <div className="flex items-center gap-2">
                          <PlusIcon className="w-5 h-5 opacity-55 ml-auto" />
                          Add calculation
                        </div>
                      </td>
                    );
                  })}

                <td className="opacity-55 border border-gray-200 px-4 py-2 mb"></td>
                <td className="opacity-55 border border-gray-200 px-4 py-2 mb"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="self-center shadow-sm px-4 py-2 rounded-lg overflow-hidden flex gap-2 border border-gray-200 items-center">
          <div className="flex gap-2 border border-gray-200 p-2 rounded-lg hover:bg-gray-100">
            <span className="px-2 bg-black text-white rounded-md">
              {checkCount}
            </span>
            <span className="font-semibold">Selected</span>
          </div>
          <div className="flex gap-2 border border-gray-200 p-2 rounded-lg opacity-70 hover:opacity-100 hover:bg-gray-100">
            <ArchiveBoxIcon className="text-black w-5 h-5 mt-[2px]" />
            <span className="font-semibold">Archive</span>
          </div>
          <div className="flex text-red-400 hover:text-red-600 transition cursor-pointer gap-2 border border-gray-200 p-2 rounded-lg hover:bg-gray-100">
            <TrashIcon className="w-5 h-5 mt-[2px]" />
            <span className="font-semibold">Delete</span>
          </div>
          <DropDown
            iconright={<ChevronDoubleDownIcon className="text-black w-4 h-4" />}
            label="More"
            clickable={true}
          />
          <XMarkIcon className="text-black w-4 h-4 opacity-55 hover:opacity-100" />
        </div>
      </div>
    </>
  );
}
