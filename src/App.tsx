import { Button } from "./components/atoms/button/button";
import { Input } from "./components/atoms/input/input";

const App = () => {
  return (
    <>
    <Input onChange={()=> {}} placeholder="Gift URL" errorMessage="error"/>
    <Button onClick={() => {}}>Test</Button>
  </>
  );
};

export default App;
