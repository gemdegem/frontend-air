"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { enablePolkadotExtension } from "@/services/polkadotClient";

import ModulesService, { modulesList } from "@/services/modules-service";
import ModuleTile from "./components/module-tile/module-tile";

import classes from "./modules.module.css";
import SearchBar from "./components/search-bar";
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
  const [originalModuleList, setOriginalModuleList] = useState<any[]>(modulesList);
  const [filteredModuleList, setFilteredModuleList] = useState<any[]>(modulesList);

  const handleModulesFetched = (modules: string[]) => {
    const formattedModules = modules.map((moduleName: string) => ({ name: moduleName }));
    setOriginalModuleList(formattedModules);
    setFilteredModuleList(formattedModules);
  };

  useEffect(() => {
    if (searchString) {
      const newData = originalModuleList.filter((item) => {
        return item.name?.toLowerCase().includes(searchString.toLowerCase());
      });
      setFilteredModuleList(newData);
    } else {
      setFilteredModuleList(originalModuleList);
    }
  }, [searchString, originalModuleList]);

  useEffect(() => {
    async function fetchModules() {
      const modules = await ModulesService.getModulesList();
      setOriginalModuleList(modules);
      setFilteredModuleList(modules);
    }

    fetchModules();
  }, []);

  return (
    <main className={classNames(classes.content, "flex flex-col items-center justify-center my-auto ")}>
      <PolkadotWallet onModulesFetched={handleModulesFetched} />
      <SearchBar setSearchString={setSearchString} searchString={searchString} />
      {filteredModuleList && filteredModuleList.length > 0 ? (
        <ul className={classes.modulesList}>
          {filteredModuleList.map((module, i) => (
            <ModuleTile key={module.name} {...module} />
          ))}
        </ul>
      ) : (
        <span>There is no data to display</span>
      )}
    </main>
  );
}
