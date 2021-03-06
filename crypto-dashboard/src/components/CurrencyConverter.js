import ExchangeRate from "./ExchangeRate";
import { useState } from "react";
import axios from "axios";

export default function CurrencyConverter() {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);
  // const [exchangeRate, setExchangeRate] = useState(0);
  // const [primaryCurrencyExchanged, setPrimaryCurrencyExchanged] = useState("BTC");
  // const [secondaryCurrencyExchanged, setSecondaryCurrencyExchanged] = useState("BTC");

  // !: 같은 기능으로 묶일 수 있는 것들은 오브젝트로 상태관리를 해준다.
  const [exchangeData, setExchangeData] = useState({
    primaryCurrency: "BTC",
    secondaryCurrency: "BTC",
    ExchangeRate: 0,
  });

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        to_currency: chosenSecondaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        from_currency: chosenPrimaryCurrency,
      },
      headers: {
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then((res) => {
        //setExchangeRate(res.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
        setResult(res.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * amount);
        // setPrimaryCurrencyExchanged(chosenPrimaryCurrency);
        // setSecondaryCurrencyExchanged(chosenSecondaryCurrency);
        setExchangeData({
          primaryCurrency: chosenPrimaryCurrency,
          secondaryCurrency: chosenSecondaryCurrency,
          exchangeRate: res.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"],
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="currency-converter">
      <h2>CurrencyConverter</h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={chosenPrimaryCurrency}
                  name="currency-option-1"
                  className="currency-options"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency:</td>
              <td>
                <input type="number" name="currency-amount-2" value={result} disabled={true} />
              </td>
              <td>
                <select
                  value={chosenSecondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button id="convert-btn" onClick={convert}>
          converter
        </button>
      </div>
      <ExchangeRate exchangeData={exchangeData} />
    </div>
  );
}
