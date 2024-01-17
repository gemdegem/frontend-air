"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ModulesService, { modulesList } from "@/services/modules-service";
import ModuleTile from "./components/module-tile/module-tile";
import classes from "./modules.module.css";
import SearchBar from "./components/search-bar";
import Pagination from "react-paginate";
import "./modules.module.css";

const PolkadotWallet = dynamic(() => import("@/components/PolkadotWallet"), { ssr: false });

type ModuleTileProps = {
  image_url?: string;
  name: string;
  address: string;
  description?: string;
  attributes?: string[];
};

export default function () {
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [loadedModules, setLoadedModules] = useState<any[]>([]);
  const [displayedModules, setDisplayedModules] = useState<any[]>();

  const pageCount = Math.ceil(loadedModules.length / itemsPerPage);

  const handleModulesFetched = (modules: string[]) => {
    const formattedModules = modules.map((moduleName: string) => ({ name: moduleName }));
    setLoadedModules(formattedModules);
    updateDisplayedModules(formattedModules, currentPage);
  };

  const updateDisplayedModules = (modules, page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedModules(modules.slice(startIndex, endIndex));
  };

  useEffect(() => {
    const filteredModules = searchString ? loadedModules.filter((module) => module.name.toLowerCase().includes(searchString.toLowerCase())) : loadedModules;
    updateDisplayedModules(filteredModules, currentPage);
  }, [searchString, loadedModules, currentPage]);

  useEffect(() => {
    async function fetchModules() {
      const modules = await ModulesService.getModulesList();
      setLoadedModules(modules);
      updateDisplayedModules(modules, currentPage);
    }

    fetchModules();
  }, []);

  const handlePageChange = (selectedItem) => {
    setCurrentPage(selectedItem.selected + 1);
    updateDisplayedModules(loadedModules, selectedItem.selected + 1);
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
        {loadedModules.length > 10 && (
          <Pagination
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
            breakLabel="..."
            breakClassName="break-me"
            previousClassName={currentPage === 1 ? "disabled" : ""}
            nextClassName={currentPage === pageCount ? "disabled" : ""}
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={"react-paginate"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        )}
      </main>
    </>
  );
}
