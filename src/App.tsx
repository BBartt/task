import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [str, setStr] = useState<string>("");

  console.log("str", str);

  return (
    <div className="App">
      <Input value={str} onChange={(e) => setStr(e.target.value)} />

      <Button onClick={() => console.log("click")}>test</Button>
    </div>
  );
}

export default App;
