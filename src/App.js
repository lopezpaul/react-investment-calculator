import { useState, useRef } from 'react';

import Header from './Components/Header';
import InputField from './Components/UI/InputField';
import Results from './Components/Results/TableResults';
import Button from './Components/UI/Button';

function App() {

  const inputCurrentSavings = useRef();
  const inputYearlyContribution = useRef();
  const inputExpectedReturn = useRef();
  const inputDuration = useRef();

  const [results, setResults] = useState([]);

  const resetHandler = (e) => {
    e.preventDefault();
    inputCurrentSavings.current.value = '';
    inputYearlyContribution.current.value = '';
    inputExpectedReturn.current.value = '';
    inputDuration.current.value = '';
    setResults([]);
  }

  const defaultHandler = (e) => {
    e.preventDefault();
    inputCurrentSavings.current.value = '1000';
    inputYearlyContribution.current.value = '1200';
    inputExpectedReturn.current.value = '5';
    inputDuration.current.value = '15';
    setResults([]);
  }
  
  const calculateHandler = (event) => {
    event.preventDefault();
    const yearlyData = [];
    let currentSavings = parseFloat(inputCurrentSavings.current.value);
    const yearlyContribution = parseFloat(inputYearlyContribution.current.value);
    const expectedReturn = parseFloat(inputExpectedReturn.current.value) / 100;
    const duration = parseInt(inputDuration.current.value);
    let totalInterest = 0;
    let totalYearlyContributions = currentSavings;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest += yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      totalYearlyContributions += yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: totalYearlyContributions,
        totalInterest: totalInterest
      });
    }
    setResults(yearlyData);
  };

  return (
    <div>
      <Header />
      <form className="form" >
        <div className="input-group">
          <InputField ref={inputCurrentSavings} id="current-savings"
            label="Current Savings ($)" type="number" />
          <InputField ref={inputYearlyContribution} id="yearly-contribution"
            label="Yearly Savings ($)" type="number" />
        </div>
        <div className="input-group">
          <InputField ref={inputExpectedReturn} id="expected-return"
            label="Expected Interest (%, per year)" type="number" />
          <InputField ref={inputDuration} id="duration"
            label="Investment Duration (years))" type="number" />
        </div>
        <p className="actions">
          <Button type="button" styleClass="buttonAlt" onClick={defaultHandler}>Default Values</Button>
          <Button type="reset" styleClass="buttonAlt" onClick={resetHandler}>Reset</Button>
          <Button type="submit" styleClass="button" onClick={calculateHandler}>Calculate</Button>
        </p>
      </form>
      {results && <Results results={results} />}
    </div>
  );
}

export default App;
