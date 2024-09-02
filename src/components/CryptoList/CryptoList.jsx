import React from "react";
import "./CryptoList.css"

function CryptoList(props){
    const list = props.list;
    let nf = new Intl.NumberFormat(`en-US`);
    
    return (
    
        <div className="main-wrapper container-flex row mt-5 text-center vh-100 border-bottom border-info-subtle">
            <h1>{props.name}</h1>
            <div className="table-wrapper col-lg-6 col-md-8 col-sm-10 col-11 mx-auto h-75 overflow-auto">
                
                <table className="table">
                    <thead className="sticky-top">
                        <tr>
                            <th>Symbol</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Market Cap</th>
                        </tr>
                    </thead>
                    {list.map(crypto =>{
                                return (
                                
                                        <tr>
                                            <td className="table-item p-2 border">{crypto.symbol}</td>
                                            <td className="table-item p-2 border">{crypto.name}</td>
                                            <td className="table-item p-2 border">${crypto.current_price}</td>
                                            <td className="table-item p-2 border">${nf.format(crypto.market_cap)}</td>
                                        </tr>
                                )
                            })}
    
                </table>
                <div id="Favorites"></div>
            </div>
        </div>
    )
}

export default CryptoList;