"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ModulesService from "@/services/modules-service";
import ModuleTile from "./components/module-tile/module-tile";
import classes from "./modules.module.css";
import SearchBar from "./components/search-bar";
import Pagination from "react-paginate";

const PolkadotWallet = dynamic(() => import("@/components/PolkadotWallet"), { ssr: false });

export default function () {
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [loadedModules, setLoadedModules] = useState<any[]>([]);
  const [displayedModules, setDisplayedModules] = useState<any[]>([]);
  const [filteredModules, setFilteredModules] = useState<any[]>([]);

  useEffect(() => {
    const filtered = searchString ? loadedModules.filter((module) => module.name.toLowerCase().includes(searchString.toLowerCase())) : loadedModules;
    setFilteredModules(filtered);
    if (searchString) {
      setCurrentPage(1); // Resetuj numer strony tylko gdy zmienia się searchString
      updateDisplayedModules(filtered, 1);
    } else {
      updateDisplayedModules(filtered, currentPage);
    }
  }, [searchString, loadedModules]);

  const pageCount = Math.ceil(filteredModules.length / itemsPerPage);

  useEffect(() => {
    async function fetchModules() {
      const modules = await ModulesService.getModulesList();
      setLoadedModules(modules);
      updateDisplayedModules(modules, currentPage);
    }

    fetchModules();
  }, []);

  const handlePageChange = (selectedItem: any) => {
    setCurrentPage(selectedItem.selected + 1);
    updateDisplayedModules(filteredModules, selectedItem.selected + 1); // Użyj filteredModules zamiast loadedModules
  };

  const handleModulesFetched = (modules: string[]) => {
    const formattedModules = modules.map((moduleName: string) => ({ name: moduleName }));
    setLoadedModules(formattedModules);
    updateDisplayedModules(formattedModules, currentPage);
  };

  const updateDisplayedModules = (modules: any[], page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedModules(modules.slice(startIndex, endIndex));
  };

  return (
    <>
      <main className={classNames(classes.content, "flex flex-col items-center justify-center my-auto ")}>
        <PolkadotWallet onModulesFetched={handleModulesFetched} />
        <SearchBar setSearchString={setSearchString} searchString={searchString} />
        {displayedModules && displayedModules.length > 0 ? (
          <ul className={classes.modulesList}>
            {displayedModules.map((module, i) => (
              <ModuleTile key={module.name} {...module} />
            ))}
          </ul>
        ) : (
          <span>There is no data to display</span>
        )}
      </main>
      {filteredModules.length > 8 && (
        <Pagination
          pageCount={pageCount}
          onPageChange={handlePageChange}
          forcePage={currentPage - 1}
          containerClassName="flex justify-center items-center space-x-3 my-4 text-lg"
          pageLinkClassName="px-5 text-lg border rounded hover:bg-gray-200 transition-colors duration-200 py-3"
          activeClassName="bg-blue-500 text-white py-3 rounded"
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          previousClassName={`mr-2 ${currentPage === 1 ? "text-gray-500" : "text-blue-500 hover:text-blue-700"}`}
          nextClassName={`${currentPage === pageCount ? "text-gray-500" : "text-blue-500 hover:text-blue-700"}`}
        />
      )}
    </>
  );
}
