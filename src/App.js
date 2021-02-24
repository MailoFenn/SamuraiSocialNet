import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
    console.log(props.data)

    return (
        <BrowserRouter>
            <Header/>
            <div className="App">
                <Nav/>
                <div className='content'>
                    <Route path={`/messages`} render={() => <Messages messages={props.data.messages} dialogs={props.data.dialogs} />}/>
                    <Route path={`/profile`} render={() => <Main data={props.data.posts} />}/>
                    <Route path={`/music`} render={Music} />
                    <Route path={`/news`} render={News} />
                    <Route path={`/setting`} render={Setting} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
