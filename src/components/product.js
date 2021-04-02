import React from 'react';
import './product.css';
import {BrowserRouter,Route,Link,useParams,Outlet} from 'react-router-dom';



function Products(){
    return<div style={{textAlign: 'center'}}>
        <h1>Some Shoes</h1>
        <Outlet/>
    </div>
}

function Shoes(){
    return<div className='mid'>
        {Object.entries(shoes).map(([label,{name,img}])=>{
            return <div className='box' key={label}>
                <Link to={`/products/${label}`}>
                    <h1>{name}</h1>
                    <img src={img} alt={name} />
                </Link>
            </div>
        })}
    </div>
}
function SingleProduct(){
    const {label}=useParams();
    const product=shoes[label];

    if(!product){
        return<h1>
            Shoes Not Found...!!!
        </h1>
    }
    const {name ,img}=product;
    return<div>
        <h1>{name}</h1>
        <img src={img} alt={name}/>
    </div>
}


const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    }
  };
export{
    Products,
    Shoes,
    SingleProduct
}

