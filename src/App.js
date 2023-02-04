import { useEffect } from 'react';
import { useTelegram } from "./hooks/useTelegram";
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Form } from './components/Form';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background: var(--tg-theme-bg-color);
    color: var(--tg-theme-text-color);
  }
`

function App() {

  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
