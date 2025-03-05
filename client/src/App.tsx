import Tasks from './components/Tasks';
import ErrorBoundry, { ErrorFallback } from './ErrorBoundry';
import './App.css';

function App() {
  return (
    <ErrorBoundry fallback={ErrorFallback}>
      <Tasks />;
    </ErrorBoundry>
  );
}

export default App;
