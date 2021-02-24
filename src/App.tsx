import { TotalDataProvider } from './context/TotalDataContext';
import { PrefectureDataProvider } from './context/PrefectureDataContext';
import Header from './components/Header';
import Count from './components/Count';

const App = () => {
	return (
		<div className="App">
			<TotalDataProvider>
				<PrefectureDataProvider>
					<Header />
					<Count dataType="Confirmed" />
					<Count dataType="Deaths" />
					<Count dataType="Recovered" />
				</PrefectureDataProvider>
			</TotalDataProvider>
		</div>
	);
};

export default App;
