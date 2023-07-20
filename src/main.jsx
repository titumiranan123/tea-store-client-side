import ReactDOM from 'react-dom/client'
import './index.css'
import Authprovider from './Componet/Providers/Authprovider.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './Componet/Routes/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <Authprovider>
            <div className='max-w-7xl mx-auto'>
                <RouterProvider router={routes} />
            </div>
        </Authprovider>
    </QueryClientProvider>
)
