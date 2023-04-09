import '../styles/globals.css'
import '../styles/normalize.css'
import { wrapper } from 'redux/store';

const App = ({ Component, pageProps })=> {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
