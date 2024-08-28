import { useState } from "react";



const Table = () => {
    const [formData, setFormData] = useState({
        title: '',
        role: '',
        description: '',
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Logs form data on submit
    };

    return (
        // <div className="overflow-x-auto">
        //     <table className="min-w-full bg-white">
        //         <thead className="bg-gray-200">
        //             <tr className=''>
        //                 <th style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-[8px] sm:text-base">Name</th>
        //                 <th style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-[8px]">Role</th>
        //                 <th  style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-[8px]">Email</th>
        //                 <th style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-[8px]">Address</th>
        //                 <th style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-[8px]">Status</th>
        //             </tr>
        //         </thead>
        //         <tbody className="text-gray-700 text-[8px]">
        //             <tr className='bg-gray-50'>
        //                 <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">John Doe</td>
        //                 <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">Developer</td>
        //                 <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">john@example.com</td>
        //                 <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">123 Main St</td>
        //                 <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">Active</td>
        //             </tr>
        //             <tr className='bg-gray-100'>
        //                 <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">John Doe</td>
        //                 <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">Developer</td>
        //                 <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">john@example.com</td>
        //                 <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">123 Main St</td>
        //                 <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">Active</td>
        //             </tr>
        //             <tr className='bg-gray-50'>
        //                 <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">John Doe</td>
        //                 <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">Developer</td>
        //                 <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">john@example.com</td>
        //                 <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">123 Main St</td>
        //                 <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">Active</td>
        //             </tr>
        //             {/* Add more rows as needed */}
        //         </tbody>
        //     </table>
        // </div>
        <div className="flex gap-20 w-full">
            <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col gap-1 w-full">
                    <p className="text-body-text font-medium text-sm">Title</p>
                    <input
                        name="title"
                        type="text"
                        id="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="bg-[#E9ECF2]/20 border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
                        placeholder="Enter full title"
                    />
                </div>

                <div className="flex flex-col gap-1 w-full">
                    <p className="text-body-text font-medium text-sm">Role</p>
                    <input
                        name="role"
                        type="text"
                        id="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="bg-[#E9ECF2]/20 border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
                        placeholder="Enter role"
                    />
                </div>

                <div className="flex flex-col gap-1 w-full">
                    <p className="text-body-text font-medium text-sm">Description</p>
                    <input
                        name="description"
                        type="text"
                        id="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="bg-[#E9ECF2]/20 border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
                        placeholder="Enter description"
                    />
                </div>

                <button type="submit" className="bg-teal-500 text-white px-5 py-2 rounded-lg mt-5">Submit</button>
            </form>


        <div className="w-full ">
        <p className="font-bold text-[#364F53]">
                Name : <span className="font-normal text-gray-700">{formData?.title}</span>
              </p>
        <p className="font-bold text-[#364F53]">
                Role : <span className="font-normal text-gray-700">{formData?.role}</span>
              </p>
        <p className="font-bold text-[#364F53]">
        Description : <span className="font-normal text-gray-700">{formData?.description}</span>
              </p>
        </div>
        </div>
    );
};

export default Table;
