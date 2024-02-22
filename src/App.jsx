import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import data from "./data";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Container from "./components/styles/Container.styled";

const theme = {
    colors: {
        header: "#fff",
        body: "#fff",
        footer: "#8A1C4A",
    },
    responsive: "768px",
};
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Container>
                {data.map((item, index) => {
                    return <Card {...item} key={index} />;
                })}
            </Container>
            <Footer />
        </ThemeProvider>
    );
};

export default App;

