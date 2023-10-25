
// import './App.css'
import { QueryClientProvider , QueryClient} from 'react-query'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {ReactQueryDevtools } from 'react-query/devtools'
import Navbar from './pages/Navbar'

// import AddUpdateActivity from './pages/Activity/AddUpdateActivity'
// import AllActivity from './pages/AllActivity'
import Summary from './pages/Summary'
import YourInfo from './pages/YourInfo'
import AddOns from './pages/AddOns'
import SelectPlan from './pages/SelectPlan'
import { Provider } from 'react-redux'
import store from './store/store'


function App() {
  const queryClient = new QueryClient();
  
  return (
    <>
    <Provider store={store}>
     <QueryClientProvider client={queryClient}>
     <BrowserRouter> 
      {/* <Navbar/> */}
      <Routes>
        {/* <Route path='/all-activity/add-update-activity' element = {<AddUpdateActivity/>}></Route>
        <Route path='/all-activity' element = {<AllActivity/>}></Route> */}
        <Route path='/' element = {<YourInfo/>}></Route>
        <Route path='/your-selectPlan' element = {<SelectPlan/>}></Route>
        <Route path='/your-addOn' element = {<AddOns/>}></Route>
        <Route path='/your-summary' element = {<Summary/>}></Route>

      </Routes>
      
     </BrowserRouter>
     <ReactQueryDevtools  initialIsOpen={false} position='bottom-right'/>
     </QueryClientProvider>
     </Provider>
      
    </>
  )
}

export default App
