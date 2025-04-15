import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import AppRoutes from './Routes';

const App = () => {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes/>
    </QueryClientProvider>
  )
}

export default App