import { useState } from 'react'
import './App.css'
import Pricecard from './components/Pricecard';

function App() {
  const [count, setCount] = useState(0);
  const data =[
    {
      pricingtype: "FREE",
      price: 0,
      features: [
        { name: "Single User", isavailable: true },
        { name: "5GB Storage", isavailable: true },
        { name: "Unlimited Public Projects", isavailable: true },
        { name: "Community Access", isavailable: true },
        { name: "Unlimited Private Projects", isavailable: false },
        { name: "Dedicated Phone Support", isavailable: false },
        { name: "Free Subdomain", isavailable: false },
        { name: "Monthly Status Reports", isavailable: false },
      ]
    },
    {
      pricingtype: "PAID",
      price: 10,
      features: [
        { name: "Single User", isavailable: true },
        { name: "5GB Storage", isavailable: true },
        { name: "Unlimited Public Projects", isavailable: true },
        { name: "Community Access", isavailable: true },
        { name: "Unlimited Private Projects", isavailable: true },
        { name: "Dedicated Phone Support", isavailable: true },
        { name: "Free Subdomain", isavailable: false },
        { name: "Monthly Status Reports", isavailable: false },
      ]
    },
    {
      pricingtype: "PRO",
      price: 49,
      features: [
        { name: "Single User", isavailable: true },
        { name: "5GB Storage", isavailable: true },
        { name: "Unlimited Public Projects", isavailable: true },
        { name: "Community Access", isavailable: true },
        { name: "Unlimited Private Projects", isavailable: true },
        { name: "Dedicated Phone Support", isavailable: true },
        { name: "Free Subdomain", isavailable: true },
        { name: "Monthly Status Reports", isavailable: true },
      ]
    }
  ];

  return  <div className='d-lg-flex justify-content-between gap-4 '>
        {
            data.map((element,index) => {
              return <div key={`${element.title}-${index}`} className='border rounded bg-white  '>
                <div>
                <h3 className=' fs-6 fw-light p-3 '>{element.pricingtype}</h3>
                <h1 className='my-2'>${element.price}<sub >/month</sub></h1>
                <hr />
                <ul class="list-group">
                  {
                    element.features.map((item,index) =>
                     <li key={`${item.title}-${index}`} className="list-group-item p-2 text-center m-2 text-decoration-none border-0">
                      {item.isavailable ? <span className='px-4'>✓</span>:<span  className='px-4'>✕</span>}
                      {item.name}</li>)
                  }
                </ul>
                <button type="button" className="btn btn-primary w-50 p-2 my-3">Button</button>
              </div>
              </div>
            })
          }
        </div>

    
  
}
export default App;
