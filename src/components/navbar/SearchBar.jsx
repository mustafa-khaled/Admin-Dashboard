import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <div className=" flex items-center p-[3px]  border border-borderColor">
      <input
        type="text"
        placeholder="Search..."
        className=" outline-0 bg-transparent placeholder:text-sm"
      />
      <SearchIcon className="text-colorBrand" />
    </div>
  );
}

export default SearchBar;
