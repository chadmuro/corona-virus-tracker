import { DataProvider } from './context/DataContext';
import Header from './components/Header';
import Count from './components/Count';

const App = () => {
	return (
		<div className="App">
			<DataProvider>
				<Header />
				<Count dataType="deaths" />
				<Count dataType="recovered" />
			</DataProvider>
		</div>
	);
};

export default App;
