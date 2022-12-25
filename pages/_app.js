import '../styles/globals.css'
import { store } from '../store/store'
import { Provider } from "react-redux";

function App({ Component, pageProps}) {
  return(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider> 
  );
}
export default App;