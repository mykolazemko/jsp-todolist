import { useState, useEffect } from 'react';
import axios from "axios";
import style from "./Finance.module.scss";

const baseURL = "https://api.monobank.ua/bank/currency"

const Finance = () => {
    const [exchangeRate, setexchangeRate] = useState();
    const [currency, setSCurrency] = useState("USD");

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setexchangeRate(response.data);
        })
            .catch((error) => {
                console.log(error.message)
        });
    },[currency])
    
    console.log(exchangeRate)
    // { exchangeRate
    //     ? sta = exchangeRate.filter( cash => cash.currencyCodeA === 840)
    
    // : console.log("wait")}


    // Currency codes ISO 4217
    const Codes = {
        USD : 840,
        EUR : 978,
        GBP : 826,
        JPY : 392,
        CHF : 756,
        CNY : 156,
        UAH : 980,
    }
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
            </select>
            <br />
            { exchangeRate != undefined
            ? <div>
                <span> {currency} to UAH </span> <br />
                <span>{
                exchangeRate.filter( cash => cash.currencyCodeA === Codes[currency])[0].rateBuy ?
                exchangeRate.filter( cash => cash.currencyCodeA === Codes[currency])[0].rateBuy :
                exchangeRate.filter( cash => cash.currencyCodeA === Codes[currency])[0].rateCross
            }</span>
                </div>
            : <span>Loading data...</span>
            }
        </div>
    )
}
export default Finance;
