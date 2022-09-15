import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import {useState, useEffect} from 'react';
import "@fontsource/metropolis";

function App() {
  const [gif, setGif] = useState(Math.floor(Math.random() * 15));

  console.log(gif);

  useEffect(() => {
    const interval = setInterval(
      () => setGif(Math.floor(Math.random() * 15)),
      Math.floor(Math.random() * 20000 + 1000)
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="app">
      <img className='overlay-gif' src={ require('../resource/giphy.gif')} size={"100vw"}/>
      <img className='back-gif' src={ require('../resource/gifs/'+gif+'.gif')} size={"100vw"}/>

      <Header className="app-header" />
      <Main/>
      <Footer className="app-footer" />
    </div>
  );
}

export default App;
