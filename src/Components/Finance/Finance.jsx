import { useState, useEffect } from 'react';
import axios from "axios";
import style from "./Finance.module.scss";

const baseURL = "https://api.monobank.ua/bank/currency"

const fetchData = async () => {
    let res = await axios.get(baseURL)
    .then(async response => {
        return response;
    })
    .catch(error => {
        console.log(error);
    });
    return res;
}

const Finance = () => {
    const [exchangeRate, setexchangeRate] = useState();
    const [currency, setSCurrency] = useState("UAH");

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setexchangeRate(response.data);
            console.table(response.data);
            //console.log(exchangeRate[0].currencyCodeA)
        });
    },[])
    const sta = [];
    // { exchangeRate
    //     ? sta = exchangeRate.filter( cash => cash.currencyCodeA === 840)
    
    // : console.log("wait")}


    // Currency codes ISO 4217
    // USD	840	$
    // EUR	978	€
    // GBP	826	£
    // JPY	392	¥
    // CHF	756	₣
    // CNY	156	¥
    // UAH	980 ₴
    
    return (
        <div>
            <h1>Finance</h1>
            <select name="" id="" onChange={e => setSCurrency(e.target.value)}>
                <option value="USD">US Dollar</option>
                <option value="EUR">Euro</option>
                <option value="GBP">UK Phound</option>
                <option value="JPY">Japan Yena</option>
                <option value="CHF">Switzerland Frank</option>
                <option value="CNY">Chinese Yuan</option>
                <option value="UAH">Urrainian Hryvnia</option>
            </select>
            <br />
            { exchangeRate
            ? <div>
                <span>UAH to {currency} </span> <br />
                <span>{exchangeRate[0].rateBuy}</span>
                </div>
            : <span>Loading data...</span>
}
        </div>
    )
}
export default Finance;
