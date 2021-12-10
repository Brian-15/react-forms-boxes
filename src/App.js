import logo from './logo.svg';
import './App.css';
import BoxList from './BoxList';

function genBoxData(backgroundColor, width, height) {
  return { backgroundColor, width, height };
}

const boxData = [
  genBoxData('blue', '500px', '200px'),
  genBoxData('green', '50px', '60px'),
  genBoxData('red', '50px', '60px'),
]

const App = () => {
  return (
    <>
      <BoxList initialData={boxData} />
    </>
  );
}

export default App;
