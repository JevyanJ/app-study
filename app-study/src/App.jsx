import { Link } from "react-router-dom";
import "./App.css";

function App () {

	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">
							<span className="material-symbols-outlined">home</span>
						</Link>
					</li>
					<li>
						<Link to="/random" onClick={forceUpdate}>
							<span className="material-symbols-outlined">shuffle</span>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default App;
