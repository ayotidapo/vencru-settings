import './App.css'
import {ReactComponent as Icon} from './assets/svg/vencru-icon.svg'
import {ReactComponent as Search} from './assets/svg/search.svg'
import {ReactComponent as Home} from './assets/svg/home.svg'
import {ReactComponent as DashBoard} from './assets/svg/dashboard.svg'
import {ReactComponent as Project} from './assets/svg/project.svg'
import {ReactComponent as Task} from './assets/svg/task.svg'
import {ReactComponent as Report} from './assets/svg/report.svg'
import {ReactComponent as Users} from './assets/svg/users.svg'
import {ReactComponent as Support} from './assets/svg/support.svg'
import {ReactComponent as Settings} from './assets/svg/settings.svg'
import {ReactComponent as Share} from './assets/svg/share.svg'
import {ReactComponent as Play} from './assets/svg/play.svg'
import {ReactComponent as Envelope} from './assets/svg/envelope.svg'
import {ReactComponent as Visa} from './assets/svg/visa.svg'
import {ReactComponent as MasterCard} from './assets/svg/mastercard.svg'
import {ReactComponent as Check} from './assets/svg/check.svg'
import Girl from './assets/img/girl.png'
import Girl2 from './assets/img/girl-2.png'


function App() {
  return (
    <main className="app-container">
      <div className="flex">
        <section className='side-bar'>
          <div className="flex items-center my-2 ml-3 ">
          <Icon/>
            <h3 className='ml-2 text-xl'> Untitled UI</h3>
          </div>
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
            <h6 className='text-gray-900 mb-2 px-5 border border-y-0 border-l-0 border-r-customGray'>New feature available!</h6>
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
          <div className='flex py-1 mt-6 pl-5  border border-x-0 border-b-0 relative'>
            <img src={Girl2} alt="girl-2 " className='w-10 h-20 '/>
             <Play className='icon absolute top-[-127px] left-[37px]'/>
            <div className='flex flex-col flex-1 justify-center ml-3'>
              <small className='text-gray-900'>Olivia Rhyle</small>
              <small className='text-gray-500'>olivia@untitledui.com</small>
            </div>
            <Share className='icon mr-[-5px] hover:cursor-pointer mt-3'/>
          </div>
        </section>
      
      <section className='flex-1 px-10 py-7 bg-gray-50'>
        <header>
          <h1 className='text-[30px]'>Settings</h1>
          <small className='text-base text-gray-500 font-light'>Manage your team and preferences here</small>
          <nav className='mt-6' >
            <ul className='header-btn-group'>
              <li className='border border-y-0 border-l-0 border-r-customGray'>
                <button className='p-2 px-5 hover:bg-gray-50'>
                  My details
                  </button>
                </li>
                <li className='border border-y-0 border-l-0 border-r-customGray'>
                 <button className='p-2 px-5 hover:bg-gray-50'>
                    Profile
                  </button>
                </li>
              <li className='border border-y-0 border-l-0 border-r-customGray'><button className='p-2 px-5 hover:bg-gray-50'>Password</button></li>
              <li className='border border-y-0 border-l-0 border-r-customGray'><button className='p-2 px-5 hover:bg-gray-50'>Team</button></li>
              <li className='border border-y-0 border-l-0 border-r-customGray'><button className='p-2 px-5 hover:bg-gray-50'>Plan</button></li>
              <li className='border border-y-0 border-l-0 border-r-customGray'><button className='p-2 px-5 hover:bg-gray-50'>Billing</button></li>
              <li className='border border-y-0 border-l-0 border-r-customGray'><button className='p-2 px-5 hover:bg-gray-50'>Integrations</button></li>
              <li className='border border-y-0 border-l-0 border-r-customGray'><button className='p-2 px-5 hover:bg-gray-50'>API</button></li>
            </ul>

          </nav>
          <div className='mb-5'>
            <h3 className='font-medium text-lg'>Payment method</h3>
            <span className='text-sm text-gray-500 font-light'>update your billing details and address.</span>
          </div>
          <form>
            <div className='grid grid-cols-3 w-[80%]  border border-x-0 border-b-0 border-t-gray-200 py-5'>
              <section className='text-sm'>
                <h6 className='text-slate-700'>Contact email</h6>
                <span className='text-gray-500'>Where should invoice be sent?</span>
              </section>
              <section className='col-span-2 text-sm'>
                <label className='mb-5 flex hover:cursor-pointer'>
                  <div className='mr-2'>
                    <input type="radio" className='hidden' name="send-email" checked/>
                    <span className='check-circle'/>

                  </div>
                  <div>
                    <h6 className='text-slate-700'>Send to my account email</h6>
                    <span className='text-gray-500'>olivia@untitledui.com</span>
                  </div>
                </label>
                <label className='flex flex-wrap hover:cursor-pointer'>
                  <div className='mr-2'>
                    <input type="radio" className='hidden' name="send-email" checked/>
                    <span className='check-circle'/>
                  

                  </div>
                  <h6 className='mb-3 text-sm text-slate-600 font-medium'>Send to an alternative email</h6>
                  <div className='flex relative  w-[85%] '>
                    <Envelope  className='absolute top-[12px] left-[13px]'/>
                    <input type="text" className='search-input' placeholder='Search'/>
                  </div>
                </label>
              </section>
            </div>
            <div className='grid grid-cols-4 border border-x-0 border-b-0 border-t-gray-200 py-5'>
              <section>
                <h6>Card details</h6>
                <small>Select default payment method.</small>
              </section>
              <section className='col-span-3'>
                <label className='h-[100px] mb-5 relative block border hover:border-purple-500 rounded-[8px]'>
                    
                      <input type="radio" className='hidden' name="payment" />
                      <span className='check-mark absolute top-[18px] right-[19px]'/>
                    
                    
               
                  <div className='flex bg-white h-full  hover:bg-purple-100 hover:cursor-pointer w-full rounded-[8px] py-4 px-5 text-sm'>
                    <Visa/>
                    <div className='inline-flex flex-col ml-4'>
                      <span className='text-violet-900'>Mastercard ending in 1234 </span>
                      <span className='text-violet-500 font-light'>Expiry 06/2024 </span>
                      <span className='text-violet-400 mt-3'>Set as default Edit </span>
                    </div>

                  </div>

                </label>
                <label className='h-[100px] mb-5 relative block border hover:border-purple-500 rounded-[8px]'>
                    
                    <input type="radio" className='hidden' name="payment" />
                    <span className='check-mark absolute top-[18px] right-[19px]'/>
                  
                  
             
                <div className='flex bg-white h-full  hover:bg-purple-100 hover:cursor-pointer w-full rounded-[8px] py-4 px-5 text-sm'>
                  <Visa/>
                  <div className='inline-flex flex-col ml-4'>
                    <span className='text-violet-900'>Visa ending in 1234 </span>
                    <span className='text-violet-500 font-light'>Expiry 06/2024 </span>
                    <span className='text-violet-400 mt-3'>Set as default Edit </span>
                  </div>

                </div>

              </label>
              </section>
            </div>
          </form>
        </header>
      </section>
      </div>
       
    </main>
  );
}

export default App;
