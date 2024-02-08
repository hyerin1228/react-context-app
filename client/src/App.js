import SummaryPage from './pages/SummaryPage';
import OrderPage from './pages/OrderPage';
import CompletePage from './pages/CompletePage';
import { useState } from 'react';
import Step from './components/Step';

function App() {

  const [step, setStep] = useState(0);

  return (
    <div style={{pafirst: '4rem' }}>
      <Step currentStep={step} />
      {step === 0 && <OrderPage setStep={setStep} /> } 
      {step === 1 && <SummaryPage setStep={setStep} /> }
      {step === 2 && <CompletePage setStep={setStep} /> }
    </div>
  );
}

export default App;
