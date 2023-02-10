import {ReactComponent as Icon} from '../../assets/svg/vencru-icon.svg'
import {ReactComponent as Search} from '../../assets/svg/search.svg'
import {ReactComponent as Home} from '../../assets/svg/home.svg'
import {ReactComponent as DashBoard} from '../../assets/svg/dashboard.svg'
import {ReactComponent as Project} from '../../assets/svg/project.svg'
import {ReactComponent as Task} from '../../assets/svg/task.svg'
import {ReactComponent as Report} from '../../assets/svg/report.svg'
import {ReactComponent as Users} from '../../assets/svg/users.svg'
import {ReactComponent as Support} from '../../assets/svg/support.svg'
import {ReactComponent as Settings} from '../../assets/svg/settings.svg'
import {ReactComponent as Share} from '../../assets/svg/share.svg'
import {ReactComponent as Play} from '../../assets/svg/play.svg'
import { ReactComponent as Hamburger } from '../../assets/svg/hamburger.svg'
import Girl from '../../assets/img/girl.png'
import Girl2 from '../../assets/img/girl-2.png'

const SideBar =()=>{
    return(
        <section className='side-bar'>
          <div className="flex items-center my-2 ml-3 ">
            <Icon/>
            <h3 className='ml-2 text-xl '> Untitled UI</h3>
            <Hamburger className='xs:block xs:ml-[auto] md:hidden hover:cursor-pointer '/>
          </div>
        <div className='md:block  xs:hidden'>
          <div className='flex relative my-6 w-[95%] pl-3'>
            <Search  className='search-icon'/>
            <input type="text" className='search-input' placeholder='Search'/>
          </div>
          <nav>
            <ul className='my-5 [&>:nth-of-type(6)]:mb-5'> 
              <li className='tab'> <DashBoard className='icon' /><span></span>Home</li>
              <li className='tab'><Home className='icon' />Dashboard</li>
              <li className='tab'><Project  className='icon'/>Projects</li>
              <li className='tab'><Task  className='icon'/>Tasks</li>
              <li className='tab'><Report  className='icon'/>Reporting</li>
              <li className='tab'><Users  className='icon'/>Users</li>
              <li className='tab'><Support  className='icon'/>Support</li>
              <li className='tab'><Settings  className='icon'/>Settings</li>
            </ul>
          </nav>
          <article className='bg-slate-50 rounded-[8px] m-2 h-[292px] p-4'>
            <h6 className=' text-gray-900 mb-2 px-0 border border-y-0 border-l-0 border-r-customGray'>New feature available!</h6>
            <span className='text-gray-500 text-sm leading-1 font-light'>Check out the new dashboard view. Pages now load faster.</span>
            <div className='w-full mt-4 mb-2 px-5 border border-y-0 border-l-0 border-r-customGray'>
              <img src={Girl} alt="girl" className='rounded-[8px]' />
              
            </div>
            <small  className='text-gray-500 '>
              Dismiss  
            <span className='text-violet-700 hover:cursor-pointer'>
            &nbsp;&nbsp; What&apos;s new?
              </span> 
            </small>
          </article>
          <div className='flex py-1 mt-6 pl-5  md:border md:border-x-0 md:border-b-0 relative'>
            <img src={Girl2} alt="girl-2 " className='w-10 h-20 '/>
             <Play className='icon absolute top-[-127px] left-[37px]'/>
            <div className='flex flex-col flex-1 justify-center ml-3'>
              <small className='text-gray-900'>Olivia Rhyle</small>
              <small className='text-gray-500'>olivia@untitledui.com</small>
            </div>
            <Share className='icon mr-[-5px] hover:cursor-pointer mt-3'/>
          </div>
        </div>
        </section>
      
    )
}
export default SideBar