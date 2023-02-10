import Girl2 from '../../assets/img/girl-2.png'

 const Table =()=>{
    return(
        <section className='border border-t-gray-200 rounded-[8px]  overflow-scroll w-full '>
            <table className='table w-full hover:cursor-pointer text-gray-500 min-w-[768px]'>
                <thead className='text-gray-500 text-xs bg-gray-50 '>
                    <tr className='text-center h-[44px]'>
                    <th className='flex h-full items-center justify-center ml-3'>
                        <input type="checkbox" className='h-5 w-5'/></th>
                    <th className='text-left'>Invoice</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Users on plan</th>
                    <th></th>                 
                    </tr>
                </thead> 
                <tbody className='bg-white'>
                    <tr className='text-center h-[72px]'>
                    <td className='flex h-full  items-center justify-center ml-3'>
                        <input type="checkbox" className='h-5 w-5'/>
                    </td>
                    <td className='text-gray-900 text-left '>Basic Plan - Dec 2022</td>
                    <td className='font-light'>USD $10.00</td>
                    <td className='font-light'>Dec 1, 2022</td>
                    <td><span className='p-5 paid'>Paid</span></td>
                    <td>
                        <div className='flex justify-center align-middle'>
                        <div  className='rounded-full w-7 h-7 p-0.5 bg-white inline-block'>
                            <img src={Girl2} alt="girl" className='rounded-full'/>
                        </div>
                        <div  className='rounded-full w-7 h-7 p-0.5 bg-white inline-block ml-[-10px]'>
                            <img src={Girl2} alt="girl" className='rounded-full'/>
                        </div>                     
                        <div  className='rounded-full w-7 h-7 p-0.5 bg-white inline-block ml-[-10px]'>
                            <img src={Girl2} alt="girl" className='rounded-full'/>
                        </div>
                        <div  className='rounded-full w-7 h-7 p-0.5 bg-white inline-block ml-[-10px]'>
                            <img src={Girl2} alt="girl" className='rounded-full'/>
                        </div>
                        <div  className='rounded-full w-7 h-7 p-0.5 bg-white inline-block ml-[-10px]'>
                            <span className='text-xs'>+2</span>
                        </div>   
                        </div>
                    </td>
                    <td></td>
                    </tr>
                    <tr className='text-center h-[72px]'>
                    <td className='flex h-full items-center justify-center ml-3'>
                        <input type="checkbox" className='h-5 w-5'/>
                        </td>
                    <td className='text-gray-900 text-left'>Basic Plan - Dec 2022</td>
                    <td className='font-light'>USD $10.00</td>
                    <td className='font-light'>Dec 1, 2022</td>
                    <td><span className='p-5 paid'>Paid</span></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr className='text-center h-[72px]'>
                    <td className='flex h-full items-center justify-center  ml-3'> 
                    <input type="checkbox" className='h-5 w-5'/>
                    </td>
                    <td className='text-gray-900 text-left'>Basic Plan - Dec 2022</td>
                    <td className='font-light'>USD $10.00</td>
                    <td className='font-light'>Dec 1, 2022</td>
                    <td><span className='p-5 paid'>Paid</span></td>
                    <td></td>
                    <td></td>
                    </tr>
                </tbody>
            </table>
        </section> 
    )
}

export default Table