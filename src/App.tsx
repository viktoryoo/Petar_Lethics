import Header from "./components/Header/Header";
import {Switch, Route, Redirect} from "react-router-dom";

function App() {
    return (
        <Header>
            <Switch>
                <Route path="/coaching">
                </Route>
                <Route path="/motivation">
                </Route>
                <Route path="/nutrition">
                </Route>
                <Route path="/about">
                </Route>
            </Switch>
        </Header>
    );
}

export default App;
