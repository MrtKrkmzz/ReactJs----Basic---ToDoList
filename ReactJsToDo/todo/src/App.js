import react, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";




function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  console.log(text);

  /*Button >*/
  const btn = () => {
    if (!text) {
      alert("Boş Bırakmayınız!!!");
    } else {
      const random = {
        id: Math.floor(Math.random() * 1000),
        value: text,
      };
      setData((oldtext) => [...oldtext, random]);
      setText("");
    }
  };
  /*Button />*/

  /*DelButton >*/
  const delButton = (id) => {
    const delList = data.filter((del) => del.id !== id);
    setData(delList);
  };
  /*DelButton />*/

  return (
    <div className="container ">
      <div className="input-group mb-3 w-50 m-auto mt-5">
        <input
          type="text"
          value={text}
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-warning"
          type="button"
          id="button-addon1"
          onClick={btn}
        >
          Button
        </button>
      </div>
      <div className="list-group w-100">
        <div className="list-group mt-5">
          {data.map((item) => (
            <p
              key={item.id}
              style={{
                fontSize: "15px",
                display: "flex",
                justifyContent: "space-between",
                color: "black",
              }}
              className="list-group-item list-group-item-action list-group-item-warning w-50 m-auto"
            >
              {item.value}
              <AiFillDelete
                onClick={() => delButton(item.id)}
                style={{ color: "red", fontSize: "20px", cursor: "pointer" }}
              />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
