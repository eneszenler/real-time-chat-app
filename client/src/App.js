import logo from './logo.svg';
import './App.css';
import UseRef from './components/UseRef';
import Render from './components/Render';
import { ChatProvider } from './context/ChatContext'
import Container from './components/Container';

function App() {
  return (

    <ChatProvider>
      <Container />
    </ChatProvider>

  );
}

export default App;
