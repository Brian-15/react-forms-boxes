import logo from './logo.svg';
import './App.css';
import BoxList from './BoxList';
import { v4 as uuid } from 'uuid';

function genBoxData(backgroundColor, width, height, id) {
  return { backgroundColor, width, height, id };
}

const boxData = [
  genBoxData('blue', '500px', '200px', uuid()),
  genBoxData('green', '50px', '60px', uuid()),
  genBoxData('red', '50px', '60px', uuid()),
]

const App = () => {
  return (
    <>
      <BoxList initialData={boxData} />
    </>
  );
}

export default App;
export { boxData as initialData };
