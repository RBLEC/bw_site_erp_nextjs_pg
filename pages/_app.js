// pages/_app.js
import Footer from '../src/components/Footer';
import '../src/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Component {...pageProps} />

    </>
  );
}

export default MyApp;
