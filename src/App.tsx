import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PlanetPage from './Pages/Planet';
import Work from './Pages/Work';
import SandP from './Pages/Work/SandP';
import TheFirm from './Pages/Work/TheFirm';
import About from './Pages/About';
import Contact from './Pages/Contact';
import EY from './Pages/Work/EY';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />

				<Route path="work">
					<Route index element={<Work />} />
					<Route path="sandp" element={<SandP />} />
					<Route path="ey" element={<EY />} />
					<Route path="firm" element={<TheFirm />} />
				</Route>

				<Route path="about" element={<About />} />

				<Route path="contact" element={<Contact />} />

				<Route path="planet" element={<PlanetPage />} />
			</Routes>
		</BrowserRouter>
	);
}
