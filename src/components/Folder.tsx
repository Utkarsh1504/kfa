import React, { useState } from "react";
import { Menu } from "antd";
import { FolderOpenIcon } from "@heroicons/react/24/outline";

interface MenuItem {
  key: string;
  icon?: JSX.Element;
  children?: MenuItem[];
  label: string;
  type?: string;
}

function getItem(
  label: string,
  key: string,
  icon: JSX.Element,
  children?: MenuItem[],
  type?: string
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items: MenuItem[] = [
  getItem(
    "Products",
    "sub1",
    <FolderOpenIcon className="text-black w-5 h-5" />,
    [
      getItem(
        "Roadmap",
        "1",
        <FolderOpenIcon className="text-black w-5 h-5" />
      ),
      getItem(
        "Feedback",
        "2",
        <FolderOpenIcon className="text-black w-5 h-5" />
      ),
      getItem(
        "Performance",
        "3",
        <FolderOpenIcon className="text-black w-5 h-5" />
      ),
      getItem("Team", "4", <FolderOpenIcon className="text-black w-5 h-5" />),
      getItem(
        "Analytics",
        "5",
        <FolderOpenIcon className="text-black w-5 h-5" />
      ),
    ]
  ),
  getItem("Sales", "sub2", <FolderOpenIcon className="text-black w-5 h-5" />, [
    getItem("Krite", "6", <FolderOpenIcon className="text-black w-5 h-5" />),
  ]),
  getItem("Design", "sub3", <FolderOpenIcon className="text-black w-5 h-5" />, [
    getItem("Krite", "12", <FolderOpenIcon className="text-black w-5 h-5" />),
    getItem("Krite", "10", <FolderOpenIcon className="text-black w-5 h-5" />),
  ]),
  getItem("Office", "sub4", <FolderOpenIcon className="text-black w-5 h-5" />),
  getItem("Legal", "sub5", <FolderOpenIcon className="text-black w-5 h-5" />),
];

const rootSubmenuKeys: string[] = ["sub1", "sub2", "sub4"];

const Folder: React.FC = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const onOpenChange = (keys: string[]) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: "100%",
        border: 0,
        fontWeight: "bold",
      }}
      items={items}
    />
  );
};

export default Folder;
