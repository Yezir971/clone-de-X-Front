"use client";
import { useRouter } from "next/navigation";
import SideBar from "../components/sideBar";
import SearchBar from "../components/searchBar";

const Search = () => {
    return(
        <>
            <SideBar />
            <SearchBar />
        </>
    );
}

export default Search;