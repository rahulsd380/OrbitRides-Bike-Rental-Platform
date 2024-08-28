import Button from "../../../../components/Button/Button";


const ManageBikeCard = () => {
    return (
        <div className="bg-white p-4 rounded-xl font-SpaceGrotesk shadow-lg left-">
      <div className="bg-gray-200 p-3 rounded-t-xl">
        <img src={"https://i.ibb.co/nw7jTVy/pngwing-com-11.png"} alt="" className="h-44" />
      </div>
      <div className="flex items-center justify-between mt-5">
        <h1 className="font-bold text-lg">{"Bike name"}</h1>
        <div className="px-2 py-[3px] rounded-3xl bg-white border border-[#85A98D]/40">
          <p className="text-xs text-[#85A98D]">{"Brand name"}</p>
        </div>
      </div>
      <p className="font-Nunito text-sm mt-1">{"shortDescription"}</p>

      <div className="flex items-center gap-5 mt-4">
        <Button variant="warning" classNames="bg-rose-500">Delete</Button>
        <Button variant="secondary">Update Details</Button>
      </div>
    </div>
    );
};

export default ManageBikeCard;