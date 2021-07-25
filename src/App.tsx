import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import Centers from "./components/Centers";
import { EntryComponent } from "./components/Entry";

class App extends Component {
	render() {
		return (
			<div className="content">
				<Switch>
					<Route path="/centers" component={Centers} />
					<Route path="/" component={EntryComponent} />
				</Switch>
			</div>
		);
	}
}

export default App;
