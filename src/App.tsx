import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { noOp } from "./utils";

function App() {
  const [str, setStr] = useState<string>("");

  console.log("str", str);

  return (
    <div className="App">
      <Input value={str} onChange={(e) => setStr(e.target.value)} />

      <Button onClick={() => console.log("click")}>test</Button>

      {false ? (
        <div>Empty</div>
      ) : (
        <div>
          <hr />
          <div>
            Name: <b></b>
          </div>
          <div>
            ID:{" "}
            <Input
              value={"clnt5fbvl000008l3e4j41yow-270291013202628"}
              readOnly
              onChange={noOp}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
