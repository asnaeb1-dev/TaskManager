import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/UI/App/App";
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppContext from './components/data/AppContext/AppContext';
const queryClient = new QueryClient();
const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppContext>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AppContext>
  </React.StrictMode>,
)
