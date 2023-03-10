interface Props{
    items: string[]
}
const NavGroup:React.FC<Props> = (props:Props)=>{
    const {items} = props

    return(
        <nav className='mt-6 xs:overflow-scroll md:overflow-auto nav-btns'>
            <ul className='header-btn-group '>
                
                {items.map(item => (
                
                    <li className='border border-y-0 border-l-0 border-r-customGray' key={item}>
                        <button className='p-2 px-4 text-sm hover:bg-gray-50 whitespace-nowrap'>
                        {item}
                        </button>
                    </li>
                ))}                            
            </ul>
          
                    
        </nav>
        
    );
}
export default NavGroup