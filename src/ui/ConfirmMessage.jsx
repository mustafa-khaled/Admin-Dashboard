import Button from "./Button";

function ConfirmMessage({
  resource,
  onConfirm,
  message,
  disabled,
  onCloseModal,
}) {
  return (
    <div className="p-[20px] flex flex-col ga-[1.2rem]  text-textColor">
      <p className="mb-[ 1.2rem] ">{message}</p>

      <div className="flex justify-end gap-[1.2rem]">
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Yes
        </Button>
      </div>
    </div>
  );
}

export default ConfirmMessage;
