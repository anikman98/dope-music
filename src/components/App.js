import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {

  return (
    <div className="app">
      <Header className="app-header" />
      <Main/>
      <Footer className="app-footer" />
    </div>
  );
}

export default App;
