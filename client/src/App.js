import SummaryPage from './pages/SummaryPage';
import OrderPage from './pages/OrderPage';
import CompletePage from './pages/CompletePage';

function App() {
  return (
    <div style={{padding: '4rem' }}>
      <OrderPage />
      <SummaryPage />
      <CompletePage />
    </div>
  );
}

export default App;
