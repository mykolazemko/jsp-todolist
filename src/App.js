import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import TodoList from './Components/Todolist/Todolist';
import HomePage from './Components/HomePage/HomePage';
import Users from './Components/Users/Users';
import Page_404 from './Components/Page_404/Page_404';

function App() {

   
   
    return (
        <BrowserRouter>
                <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/todolist' component={TodoList} />
                <Route path='/users' component={Users} />
                <Route path='*' component={Page_404} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
