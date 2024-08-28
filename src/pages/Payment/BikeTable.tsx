

const BikeTable = () => {

    const data = [
        {
            img : "https://i.ibb.co/nw7jTVy/pngwing-com-11.png",
            name : "Bike name",
            brand : "brand",
            cc : "CC",
            price : "100"
        },
        {
            img : "https://i.ibb.co/nw7jTVy/pngwing-com-11.png",
            name : "Bike name",
            brand : "brand",
            cc : "CC",
            price : "100"
        },
    ]
    return (
        <div className="w-full">
      <div className="overflow-x-auto font-Roboto w-full">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl">
          <thead className="">
            <tr >
              <th className="rounded-tl-md px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-left text-xs font-semibold text-white uppercase tracking-wider">
                Bike
              </th>
              
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                Brand
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                CC
              </th>
              <th className="rounded-tr-md px-6 py-3 border-b-2 border-gray-200 bg-[#85A98D] text-white text-left text-xs font-semibold uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((cartItem) => (
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex items-center">
                  <img src={cartItem.img} alt={cartItem.name} className="w-12 h-12 object-cover mr-4" />
                  <span>{cartItem.name}</span>
                </td>
                
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {cartItem.brand}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {cartItem.cc}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                ৳ {cartItem.price}
                </td>
                {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
                  <RxCross2
                    onClick={() => handleDeleteCartItem(cartItem?._id)}
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                  />
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default BikeTable;