import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store/store.ts';
import App from './App.tsx'
import 'normalize.css';
import './globalStyles/null.css';
import './globalStyles/globals.scss';
import "./globalStyles/header.scss";
import "./globalStyles/footer.scss";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
