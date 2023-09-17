function Empty({ content }) {
  return (
    <div className="h-[90vh] flex items-center justify-center text-textColor">
      <div className="p-[20px] bg-colorGrey2 rounded-md">{content}</div>
    </div>
  );
}

export default Empty;
