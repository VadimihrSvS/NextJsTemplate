import { AppProps } from 'next/app';
import '../layout/index.css';
import Layout from '../components/Layout';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;