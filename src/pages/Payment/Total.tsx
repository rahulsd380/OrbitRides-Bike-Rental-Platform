
import { useState } from 'react';
import Button from '../../components/Button/Button';
import Modal1 from '../../components/Modal1';
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage';

const Total = () => {
    const [openModal1, setOpenModal1] = useState(false);
    return (
        <div className="border border-[#85A98D] p-6 rounded-md font-SpaceGrotesk w-full md:max-w-xs">
      <h2 className="text-lg font-semibold mb-4">TOTAL COST</h2>
      <div>
        <div className="flex justify-between mb-3">
          <span className="text-gray-700 font-medium">Subtotal</span>
          <span>৳ {500}</span>
        </div>

        <hr className='border mb-3'/>

        <div className="flex justify-between mb-3">
          <span className="text-gray-700 font-medium">Advance (100 ৳)</span>
          <span>৳ 100</span>
        </div>
        <hr className='border'/>
        <div className="flex justify-between mb-4 mt-3 font-bold">
          <span className="font-semibold text-[#85A98D]">Due</span>
          <span>৳ {400}</span>
        </div>
        
        <Button onClick={() => setOpenModal1(true)} variant='primary' classNames='w-full'>
            PAY
        </Button>
      </div>


      <Modal1
        openModal1={openModal1}
        setOpenModal1={setOpenModal1}
        classNames={"w-[500px] h-[450px] h-fit p-4 overflow-hidden"} >
            <SuccessMessage/>
        </Modal1>
    </div>
    );
};

export default Total;