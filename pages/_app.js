import '@/styles/globals.css';
import '@/styles/article.css';
import { DarkModeProvider } from '../context/DarkModeContext';

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}
