import { useState } from "react";
import { SearchContext } from "../utils/Context";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Filters from "../components/Filters";
import Table from "../components/Table";


function Layout() {
  const [context, setContext] = useState('');
  return (
    <div className="flex flex-col xl:flex-row gap-4 mx-auto p-4 tracking-tight w-full h-full relative overflow-x-hidden">
      <Sidebar />
      <SearchContext.Provider value={[context, setContext]}>
        <div className="w-full h-full min-h-screen border rounded border-[#d1d5db]">
          <Header />
          <Filters />
          <Table />
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default Layout;
