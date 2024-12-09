import { Header } from "../components/atoms/layout/Header";
import { Footer } from "../components/atoms/layout/Footer";

export const HeaderOnly = ( props ) => {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
        </>
    )
}