import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav/>
                <div className='content'>
                    <Route path={`/messages`} component={Messages}/>
                    <Route path={`/profile`} component={Main}/>
                    <Route path={`/music`} component={Music} />
                    <Route path={`/news`} component={News} />
                    <Route path={`/setting`} component={Setting} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
