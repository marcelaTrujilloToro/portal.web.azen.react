import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import AppRouter from './routes/AppRouter';
import "./App.css";

const queryClient = new QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
     
        <AppRouter/>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
