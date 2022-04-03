import ExchangeRate from "./ExchangeRate";

function CurrencyConverter() {
  return (
    <div className="currency-converter">
      <h2>CurrencyConverter</h2>

      <div>
        <table>
          <tbody>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input type="number" name="currency-amount-1" value={""} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ExchangeRate />
    </div>
  );
}

export default CurrencyConverter;
