import './styles/main/main.scss'
import Main from './routes/Main';
import ShoppingStore from './routes/ShoppingStore';
import Restaurant from './routes/Restaurant';

function App() {

  return (
    <div>
      <Main />
      <ShoppingStore />
      <Restaurant />
    </div>
  )
}

export default App
