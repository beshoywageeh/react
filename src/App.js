import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    const search = async () => {
      const respond = await axios.get("https://en.wikipedia.org/w/api.php", {
        parmas: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term
        }
      });
    };
    if (term) {
      search();
    }
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="my-3">
            <label className="form-label" htmlFor="input1">
              Search
            </label>
            <input
              onChange={(e) => setTerm(e.target.value)}
              type="text"
              className="form-control"
              id="input1"
              value={term}
            ></input>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Desc</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>title</td>
                <td>Desc</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>title</td>
                <td>Desc</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>title</td>
                <td>Desc</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
