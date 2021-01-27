import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useCrypto from "../hooks/useCrypto";
import useCurrency from "../hooks/useCurrency";
import Error from "./Error";

const FormButton = styled.button`
    background-color: #66a2fe;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    padding: 10px;
    transition: background-color 0.3s ease;
    width: 100%;

    &:hover {
        cursor: pointer;
        background-color: #326ac0;
    }

    &:focus {
        outline: 0;
    }
`;

const Form = ({ setQuotationResult, setAvailable }) => {
    // Array for useCurrency custom hook
    const countriesCurrency = [
        { id: "USD", country: "American Dollar" },
        { id: "MXN", country: "Mexican Peso" },
        { id: "EUR", country: "Euro" },
        { id: "GBP", country: "Pound Sterling" },
    ];

    // State for cryptocurrencies array
    const [cryptoCurrencies, setCryptoCurrencies] = useState([]);

    // State for error
    const [error, setError] = useState(false);

    // Fetch 10 most used cryptocurrencies
    useEffect(() => {
        const getCryptoCurrencies = async _ => {
            const url =
                "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

            const res = await axios.get(url);
            setCryptoCurrencies(res.data.Data);
        };
        getCryptoCurrencies();
    }, []);

    // Our custom hook
    const [currency, , SelectCurrency] = useCurrency(countriesCurrency);

    // Custom hook of cryptocurrency
    const [cryptoCurrency, , SelectCrypto] = useCrypto(cryptoCurrencies);

    // Fetch the quotation
    const getQuotation = async _ => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;

        const res = await axios.get(url);
        return res.data.DISPLAY[cryptoCurrency][currency];
    };

    // Assign the quotation of the api to the quotationResult state
    const assignQuotation = async _ => {
        const quotation = await getQuotation();
        // Remove the previous state
        setQuotationResult({});
        setTimeout(() => {
            // Assign the new state
            setQuotationResult(quotation);
        }, 100);
    };

    // Validate form
    const handleSubmit = event => {
        event.preventDefault();

        if (!currency || !cryptoCurrency) {
            setError(true);
            setTimeout(_ => setError(false), 3000);
            return;
        }

        setError(false);
        assignQuotation();
        setAvailable(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <Error message="All Fields are Required" />}
            <SelectCurrency />
            <SelectCrypto />
            <FormButton type="submit">Calculate</FormButton>
        </form>
    );
};

export default Form;
