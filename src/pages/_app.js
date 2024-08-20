// pages/_app.js
//import Footer from '../src/components/Footer';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Component {...pageProps} />

    </>
  );
}

export default MyApp;
