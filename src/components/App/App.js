import './App.css';
import { useState } from 'react';

function App() {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1);
	};

	const reset = () => {
		setCounter(0);
	};

	return (
		<div className="App">
			<h1>Hello world</h1>
			<p>You have clicked {counter} times!</p>
			<button onClick={increment}>Click</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
}

export default App;
