import Button from "./Button";

function ConfirmDelete({ resource, onConfirm, disabled, onCloseModal }) {
  return (
    <div className="p-[20px] flex flex-col ga-[1.2rem]  text-textColor">
      <h3>Delete {resource}</h3>
      <p className="mb-[ 1.2rem] ">
        Are you sure you want to delete this {resource} permanently? This action
        cannot be undone.
      </p>

      <div className="flex justify-end gap-[1.2rem]">
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
