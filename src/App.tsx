import  SideBar   from './component/Sidebar'
import Table  from './component/Table'
import  PayCard   from './common/PayCard'
import './App.css'
import {ReactComponent as Envelope} from './assets/svg/envelope.svg'
import {ReactComponent as Download} from './assets/svg/download.svg'
import {ReactComponent as Add} from './assets/svg/add.svg'
import data from './data'


function App() {
  return (
    <div className="app-container">
      <div className="flex">
        <SideBar/>
      
        <main className='flex-1 px-10 py-7 bg-gray-50'>
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
          </header>
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
                  <div className='flex relative  w-[85%] ml-6'>
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
              <section className='col-span-3 ml-6'>
                  {
                    data.cards.map(item=> <PayCard item={item}/>)
                  }            
                <button className='flex items-center hover:cursor-pointer'>
                  <Add className='mr-2'/> <span className='text-gray-500 text-sm '>Add new payment method</span>
                </button>
              </section>
            </div>
            
          </form>      
          <section className='flex justify-between items-center my-5 px-1'>
            <h3 className='text-lg text-gray-900  '>
              Billing history
            </h3>
            <div className='flex items-center' >
              <button className='py-4 px-7 text-gray-500 text-sm'>Tertiary</button>
              
              <button className='download flex items-center justify-between px-3 hover:cursor-pointer'>
                <Download/> Download all
              </button>
            </div>
          </section>
          <Table/>
        </main>
      </div>
       
    </div>
  );
}

export default App;
