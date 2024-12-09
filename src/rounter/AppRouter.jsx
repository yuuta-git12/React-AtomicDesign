import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Top } from "../components/pages/Top"
import { Users } from "../components/pages/Users"
import { DefaultLayout } from "../templates/DefaultLayout"
import { HeaderOnly } from "../templates/HeaderOnly"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact 
                    path="/" 
                    element={
                        <DefaultLayout>
                            <Top />
                        </DefaultLayout>
                        }
                />
                
                <Route 
                    path="/users" 
                    element={
                        <HeaderOnly>
                            <Users />
                        </HeaderOnly>     
                        } 
                />
            </Routes>

        </BrowserRouter>
    )
}