// import { useState } from "react";



// const Table = () => {
//     const [formData, setFormData] = useState({
//         title: '',
//         role: '',
//         description: '',
//     });

//     // Handle input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData); // Logs form data on submit
//     };

//     return (
//         <div className="flex gap-20 w-full">
//             <form onSubmit={handleSubmit} className="w-full">
//                 <div className="flex flex-col gap-1 w-full">
//                     <p className="text-body-text font-medium text-sm">Title</p>
//                     <input
//                         name="title"
//                         type="text"
//                         id="title"
//                         value={formData.title}
//                         onChange={handleInputChange}
//                         className="bg-[#E9ECF2]/20 border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
//                         placeholder="Enter full title"
//                     />
//                 </div>

//                 <div className="flex flex-col gap-1 w-full">
//                     <p className="text-body-text font-medium text-sm">Role</p>
//                     <input
//                         name="role"
//                         type="text"
//                         id="role"
//                         value={formData.role}
//                         onChange={handleInputChange}
//                         className="bg-[#E9ECF2]/20 border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
//                         placeholder="Enter role"
//                     />
//                 </div>

//                 <div className="flex flex-col gap-1 w-full">
//                     <p className="text-body-text font-medium text-sm">Description</p>
//                     <input
//                         name="description"
//                         type="text"
//                         id="description"
//                         value={formData.description}
//                         onChange={handleInputChange}
//                         className="bg-[#E9ECF2]/20 border border-[#364F53]/30 p-2 focus:border-[#85A98D] transition duration-300 focus:outline-none rounded w-full"
//                         placeholder="Enter description"
//                     />
//                 </div>

//                 <button type="submit" className="bg-teal-500 text-white px-5 py-2 rounded-lg mt-5">Submit</button>
//             </form>


//         <div className="w-full ">
//         <p className="font-bold text-[#364F53]">
//                 Name : <span className="font-normal text-gray-700">{formData?.title}</span>
//               </p>
//         <p className="font-bold text-[#364F53]">
//                 Role : <span className="font-normal text-gray-700">{formData?.role}</span>
//               </p>
//         <p className="font-bold text-[#364F53]">
//         Description : <span className="font-normal text-gray-700">{formData?.description}</span>
//               </p>
//         </div>
//         </div>
//     );
// };

// export default Table;
