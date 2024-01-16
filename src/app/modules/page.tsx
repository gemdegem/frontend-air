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

  const [updatedModuleList, setUpdatedModuleList] = useState<any[]>(modulesList);
  const handleModulesFetched = (modules: string[]) => {
    setUpdatedModuleList(modules.map((moduleName: string) => ({ name: moduleName })));
  };

  useEffect(() => {
    if (searchString) {
      const newData = modulesList.filter((item) => {
        return item.name?.toLowerCase().includes(searchString.toLowerCase());
      });

      setUpdatedModuleList(newData);
    }
  }, [searchString]);

  useEffect(() => {
    async function fetchModules() {
      const modules = await ModulesService.getModulesList();
      setUpdatedModuleList(modules);
    }

    fetchModules();
  }, []);

  return (
    <main className={classNames(classes.content, "flex flex-col items-center justify-center  my-auto ")}>
      <PolkadotWallet onModulesFetched={handleModulesFetched} />
      <SearchBar setSearchString={setSearchString} searchString={searchString} />
      {updatedModuleList ? (
        <ul className={classes.modulesList}>
          {updatedModuleList.map((module, i) => (
            <ModuleTile key={module.name} {...module} />
          ))}
        </ul>
      ) : (
        <span>There is no data to display</span>
      )}
    </main>
  );
}
