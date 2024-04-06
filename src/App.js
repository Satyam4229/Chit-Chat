import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import LoginForm from './components/LoginForm';

import './App.css';

const projectID="b1e00215-94c7-466a-a6f6-1a1084dafd8e";

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />
        

    return(
        <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;