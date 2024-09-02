
import React, { useState, useEffect } from 'react';
 import { useDragAndDrop } from "@formkit/drag-and-drop/react";
  import { multiDrag, selections } from "@formkit/drag-and-drop"; 
  import "./App.css"; import Header from '../Header/Header'; 
  import axios from "axios";  
  import Crypto from '../../assets/Crypto';
  import CryptoList from '../CryptoList/CryptoList';
 
  
function App() {   
    const [data, setData] = useState(null);   
    const [loading, setLoading] = useState(true);   
    const [error, setError] = useState(null);    
    
    
    
    const [parent1, files1] = useDragAndDrop(     
        Crypto, // Ensure data is not null     
        {       
            group: "A",       
            plugins: [         
                multiDrag({           
                    plugins: [             
                        selections({               
                            selectedClass: "bg-blue-500 text-white",             
                        }),           
                    ],         
                }),       
            ],     
        }   
    );    
    const [parent2, files2] = useDragAndDrop([], 
        {     
            group: "A",     
            plugins: 
            [       
                multiDrag({         
                    plugins: [           
                        selections({             
                            selectedClass: "bg-blue-500 text-white",           
                        }),         
                    ],       
                }),     
            ],   
        }
    );    

    useEffect(() => {     
        const fetchData = async () => {       
            try {         
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', 
                    {           
                    params: {             
                        vs_currency: 'cad'           
                    },           
                    headers: {             
                        'x-cg-demo-api-key': import.meta.env.VITE_APIKEY                  
                        }         
                    });         
                    setData(response.data);         
                    console.log("data fetched:", response.data);       
                    
            } catch (error) {         
                setError(error.message);       
            } finally {         
                setLoading(false);       
            }     
        };      
        fetchData();   
    }, []);    
    
    console.log("outside useEffect:", data);    
     
     


        
    return (     
        
        <div>              
            <Header />
            <CryptoList list={Crypto} name="Current Crypto Prices"/>       
            <div className="coin-wrapper container-flex row justify-content-center vh-100 text-center mt-5">
                <h4>Drag coins to Favorites list to add to Favorites</h4>
                <h4>Drag coins back to coins list to remove from Favorites</h4>         
                <div className='coin-list-wrapper col-5 text-center h-75 shadow-lg'>
                    <h1 className='m-3 sticky-top'>Coin</h1>   
                    <div className='h-75 overflow-auto shadow-lg'>         
                        <ul ref={parent1} className="coin-list list-group">             
                            {files1.map((file) => (               
                                <li key={file.id} className="coin list-group-item">{file.name}</li>             
                            ))}           
                        </ul>   
                    </div>       
                </div>         
                <div className='coin-list-wrapper col-5 text-center h-75'>           
                    <h1 className="m-3">Favorites</h1>  
                    <div className='border h-75 overflow-auto'>         
                        <ul ref={parent2} className="coin-list  h-100 list-group">             
                            {files2.map((file) => (              
                                <li key={file.id} className="coin list-group-item">{file.name}</li>             
                            ))}           
                        </ul>
                    </div>         
                </div>       
            </div>
         </div>   


    




    ); 
}  
    
export default App;





