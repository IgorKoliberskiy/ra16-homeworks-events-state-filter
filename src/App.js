import './App.css';
import Portfolio from './components/Portfolio';

export default function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <Portfolio/>
      </div>
    </div>
  );
}
