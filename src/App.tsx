import { TotalDataProvider } from './context/TotalDataContext';
import Header from './components/Header';
import Count from './components/Count';

const App = () => {
	return (
		<div className="App">
			<TotalDataProvider>
				<Header />
				<Count dataType="Deaths" />
				<Count dataType="Recovered" />
			</TotalDataProvider>
		</div>
	);
};

export default App;
