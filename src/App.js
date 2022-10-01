import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import TodoList from './Components/Todolist/Todolist';
import HomePage from './Components/HomePage/HomePage';
import Users from './Components/Users/Users';
import Page_404 from './Components/Page_404/Page_404';
import Chat from './Components/Chat/Chat';

function App() {

   
   
    return (
        <BrowserRouter>
                <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/todolist' component={TodoList} />
                <Route path='/users' component={Users} />
                <Route path='/chat' component={Chat} />
                <Route path='*' component={Page_404} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
