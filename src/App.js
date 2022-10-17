import { useEffect } from "react";
import { useState } from "react";
// import { flushSync } from "react-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [show, setShow] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onInput = (event) => setInput(event.target.value);
  const onChange = (envent) => setSelect(envent.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    setInput("");
    setSelect("");
    console.log(input, select);
    setShow(Math.floor(input / select));
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <form>
        <input
          value={input}
          onChange={onInput}
          type="number"
          placeholder="금액을 입력해주세요"
        />
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <select onChange={onChange}>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        )}
        <button onClick={onSubmit}>결제</button>
      </form>
      <hr />
      <h1>{show ? `${show}개 살 수 있습니다` : "0개 살 수 있습니다"}</h1>
    </div>
  );
}

export default App;
