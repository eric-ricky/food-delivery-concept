import React from "react";
import SearchIcon from "../../assets/icons/searchIcon";

const SearchBar = () => {
  return (
    <form className="">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>

      <div class="bg-white rounded-xl w-full border-gray-50 drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]  flex align-center justify-between">
        <div class="flex items-center px-4 pointer-events-none">
          <SearchIcon />
        </div>

        <input
          type="search"
          id="default-search"
          class="block p-4 w-full text-sm text-gray-900  border-none rounded-r-xl"
          placeholder="Search Mockups, Logos..."
          required
        />
      </div>
    </form>
  );
};

export default SearchBar;
