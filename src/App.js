import { useEffect, useState } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import Quotation from "./components/Quotation";
import Spinner from "./components/Spinner";
import cryptocurrencyImage from "./cryptomonedas.png";

const GridContainer = styled.div`
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
    max-width: 900px;
    margin: 0 auto;
`;

const CryptoImage = styled.img`
    max-width: 100%;
    margin-top: 5rem;
`;

const QuoteHeading = styled.h1`
    color: #fff;
    font-family: "Bebas Neue", cursive;
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 50px;
    margin-top: 80px;
    text-align: left;

    &::after {
        content: "";
        width: 100px;
        height: 6px;
        background-color: #66a2fe;
        display: block;
    }
`;

function App() {
    // State for quotationResult
    const [quotationResult, setQuotationResult] = useState({});
    const [available, setAvailable] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);

    // Show the spinner when is available
    useEffect(() => {
        if (available) {
            setShowSpinner(true);
        }
    }, [available]);

    return (
        <GridContainer>
            <div>
                <CryptoImage src={cryptocurrencyImage} alt="crypto" />
            </div>
            <div>
                <QuoteHeading>Quote cryptocurrencies instantly</QuoteHeading>
                <Form
                    setQuotationResult={setQuotationResult}
                    setAvailable={setAvailable}
                />
                {showSpinner && !Object.keys(quotationResult).length && (
                    <Spinner />
                )}
                <Quotation
                    quotationResult={quotationResult}
                    setQuotationResult={setQuotationResult}
                />
            </div>
        </GridContainer>
    );
}

export default App;
