import React from "react";
import SearchIcon from "../../assets/icons/searchIcon";

const SearchBar = () => {
  return (
    <form className="">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>

      <div className="bg-white rounded-xl w-full border-gray-50 drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]  flex align-center justify-between">
        <div className="flex items-center px-4 pointer-events-none">
          <SearchIcon />
        </div>

        <input
          type="search"
          id="default-search"
          className="block p-4 w-full text-sm text-gray-900  border-none rounded-r-xl"
          placeholder="Search Food, restaurants..."
          required
        />
      </div>
    </form>
  );
};

export default SearchBar;
