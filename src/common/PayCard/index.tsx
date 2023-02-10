import {ReactComponent as Visa} from '../../assets/svg/visa.svg'

interface Props{
   item :{ id:string;
    title:string;
    expiryDate: string;
   }
}

 const PayCard:React.FC<Props> =(props:Props)=>{
    const {id, title,expiryDate} = props.item
    return(
        <label className='h-[100px] mb-5 relative block border hover:border-purple-500 rounded-[8px]'
         htmlFor={id}
         >
            <input type="radio" className='hidden ' name="payment" id={id} checked/>            
            <span className='check-mark absolute top-[18px] right-[19px]'/>                            
            <div className='flex bg-white h-full  hover:bg-purple-100 hover:cursor-pointer
              w-full rounded-[8px] py-4 px-5 text-sm'
             >
                <Visa/>
                <div className='inline-flex flex-col ml-4'>
                    <span className='text-a'>{title} </span>
                    <span className='text-b  text-gray-500 font-light'>{expiryDate}</span>
                    <span className='text-c  text-gray-500 mt-3'>Set as default 
                    &nbsp; <span className='text-violet-700'>Edit</span> 
                    </span>
                </div>
            </div>
        </label>
    )
}

export default PayCard;