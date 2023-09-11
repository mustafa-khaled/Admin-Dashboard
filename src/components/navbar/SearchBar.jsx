import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <div className=" flex items-center p-[3px]  border border-gray-200">
      <input
        type="text"
        placeholder="Search..."
        className=" outline-0 bg-transparent placeholder:text-sm"
      />
      <SearchIcon />
    </div>
  );
}

export default SearchBar;
