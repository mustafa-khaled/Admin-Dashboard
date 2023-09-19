import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function ToggleMenu({ showSidebar, setShowSidebar }) {
  return (
    <div onClick={() => setShowSidebar((s) => !s)}>
      {showSidebar ? (
        <CloseIcon className="text-colorBrand" />
      ) : (
        <MenuIcon className="text-colorBrand" />
      )}
    </div>
  );
}

export default ToggleMenu;
