import React , {useState} from 'react';
import logo from './assets/investment-calculator-logo.png';
import Header from './component/ui/header'
import FormCalculator from './component/form/FormCalculator'
import FormResult from './component/form/FormResult'

function App() {
  const [Data , setData] = useState(null)

  const calculateHandler = (userInput) => {
    setData(userInput);
  };

  const yearlyData = []; // per-year results
  
  if(Data){
    let currentSavings = +Data['current-savings']; 
    const yearlyContribution = +Data['yearly-contribution']; 
    const expectedReturn = +Data['expected-return'] / 100;
    const duration = +Data['duration'];
  

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
     <Header img={logo}/>
     <FormCalculator reset={setData} calculateHandler={calculateHandler} />
     {!Data && <p style={{textAlign:'center'}}>no investment calculated Yet.</p>}
     {Data && <FormResult data={yearlyData}/>}
     
    </div>
  );
}

export default App;
