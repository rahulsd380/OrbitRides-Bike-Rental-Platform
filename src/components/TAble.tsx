import React from 'react';

const Table = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-200">
                    <tr className=''>
                        <th style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-[8px] sm:text-base">Name</th>
                        <th style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-[8px]">Role</th>
                        <th  style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-[8px]">Email</th>
                        <th style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-[8px]">Address</th>
                        <th style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-[8px]">Status</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 text-[8px]">
                    <tr className='bg-gray-50'>
                        <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">John Doe</td>
                        <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">Developer</td>
                        <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">john@example.com</td>
                        <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">123 Main St</td>
                        <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">Active</td>
                    </tr>
                    <tr className='bg-gray-100'>
                        <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">John Doe</td>
                        <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">Developer</td>
                        <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">john@example.com</td>
                        <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">123 Main St</td>
                        <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">Active</td>
                    </tr>
                    <tr className='bg-gray-50'>
                        <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">John Doe</td>
                        <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">Developer</td>
                        <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">john@example.com</td>
                        <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">123 Main St</td>
                        <td style={{ fontSize: 'clamp(7px, 2vw, 16px)' }} className="w-1/5 text-left py-3 px-4">Active</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
