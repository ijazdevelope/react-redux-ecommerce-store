import './App.css';
import Header from './containers/Header';
import { Routes, Route, Link } from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import Child from './Child';
import { useState } from 'react';

function App() {
  const [data, setData] = useState()

  const parentFun = (childData) => {
    setData(childData)
    console.log(data, 'childData');
  }

  return (
    <>
      {/* {data?.length === 0 ? <h1>Data Not Found!</h1> : data?.map(item => {
        return (
          <>
            <h1 className='text-xl'>Name === <span className='text-4xl'>({item?.name})</span></h1>
            <h1 className='text-xl'>Email === <span className='text-4xl'> ({item?.email})</span></h1>
            <h1 className='text-xl'>Age === <span className='text-4xl'> ({item?.age})</span></h1>
          </>
        )
      })} */}

      {/* <Child setData={setData} parentCallback={parentFun} /> */}
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="product/:productId" element={<ProductDetail />} />
        {/* <Route><h1>404 page not Found!</h1></Route> */}
      </Routes>
    </>
  );
}

export default App;
