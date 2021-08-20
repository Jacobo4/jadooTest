import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './styles/styles.scss';
import HomePage from "./pages/Home/Home.page";
import Header from "./layouts/Header/Header.layout";
import Footer from "./layouts/Footer/Footer";


function App() {
    return (
        <div className={"theme--light"}>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
                <Footer/>
            </Router>
        </div>

    );
}

export default App;
