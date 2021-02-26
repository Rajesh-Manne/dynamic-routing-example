import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { axios } from 'axios';

export default function Home()
{
    
    const [value, setValue] = useState("");
    const [loaded, setIsLoaded] = useState(false);
    const [results,setResult] = useState([]);
    // 
    const fetchImages = async ()=> {
        setIsLoaded(false);
    const data = await fetch(`https://api.unsplash.com/search/photos/?client_id=9nYUb190Q9cbUaoSHmW1yMRfZf8EPgIUU_vS1GrAGqk&query=${value}&orientation=squarish`);
    const res = await data.json();
    setResult(res.results);
    console.log(results);
    }
// useEffect(() => {
//     fetchImages();
// }, [])
    return(
          <div className="container-fluid">
               <div className="input-group">
                    <input type="text" class="form-control" value={value} placeholder="Search this blog" onChange={(e)=>setValue(e.target.value) } />
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="button" onClick={()=>fetchImages()}>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>

                {/*  */}
                          
                          <div className="d-flex flex-wrap mx-auto">
                                {
                                results.map(item=> {
                                    return (
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                      <img key={item.id} src={item.urls.regular} alt="" className=" img-fluid rounded" style={{width:"100%"}} />
                                    </div>
                            )
                            
                                })
                                }
                         </div>
                            
                    
              
          </div>  
        );
    
} 
