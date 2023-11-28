// App.js
import Expense from './components/Expense/Expense';
import './App.css';

function App() {
  const expenses = [
  {
    date: new Date(),
    title: 'Car Insurance',
    Amout: 294.67
  },
  {
    date: new Date(),
    title: 'Car Insurance',
    Amout: 294.67
  },
  {
    date: new Date(),
    title: 'Car Insurance',
    Amout: 294.67
  },
  {
    date: new Date(),
    title: 'Car Insurance',
    Amout: 294.67
  }
];

  return ( 
    <>
     <Expense arr={expenses}/>
    </>
  );
}

export default App;