import "./styles/App.css";
import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import Entry from "./components/Entry";
import Centers from "./components/Centers";
import DetailedCenter from "./components/DetailedCenter";

class App extends Component {
	render() {
		return (
			<div className="content">
				<Switch>
					<Route path="/detailedCenter" component={DetailedCenter} />
					<Route path="/centers" component={Centers} />
					<Route path="/" component={Entry} />
				</Switch>
			</div>
		);
	}
}

export default App;
