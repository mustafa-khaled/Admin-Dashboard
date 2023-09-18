function Table({ tableHead, tableBodyData }) {
  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-textColor bg-colorGrey2 uppercase border-b border-gray-600">
                {tableHead?.map((item) => (
                  <th key={item.id} className="px-4 py-3">
                    {item.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-colorGrey2 text-textColor">
              {tableBodyData?.map((item) => (
                <tr key={item.id}>
                  <td className="px-2 py-[20px] border border-borderColor">
                    <div className="flex items-center gap-[10px] text-sm">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-[30px]"
                      />
                      <h3>{item.title}</h3>
                    </div>
                  </td>
                  <td className="px-4 py-[20px] border border-borderColor">
                    {item.customer}
                  </td>
                  <td className="px-4 py-[20px] border border-borderColor">
                    {item.date}
                  </td>
                  <td className="px-4 py-[20px] border border-borderColor">
                    {item.method}
                  </td>
                  <td className="marker:px-4 py-[20px] border border-borderColor ">
                    <span
                      className={` mx-[10px] p-[5px] rounded-md
                     ${
                       item.status === "Approved"
                         ? "text-green-700 bg-green-200"
                         : "text-yellow-700 bg-yellow-200"
                     }
                      `}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Table;
