import '../styles/globals.css';
import "../styles/template.scss";
import "../styles/layout/layout.scss";
import "../styles/home/home.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
