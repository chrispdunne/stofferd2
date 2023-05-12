import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PlanetPage from './Pages/Planet';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="planet" element={<PlanetPage />} />
			</Routes>
		</BrowserRouter>
	);
}
