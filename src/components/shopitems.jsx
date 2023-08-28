
import React, { useContext } from 'react'
import { PRODUCTS } from './products';
import { PRODUCTS1 } from './products';
import Prod from './prod';


const shopitems = () => {

  return <>
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
  {[...PRODUCTS, ...PRODUCTS1].map((product) => (
    <Prod key={product.id} data={product} />
  ))}
  
        </div>
  </>
}

export default shopitems