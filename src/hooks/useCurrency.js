import { useState } from "react";
import styled from "styled-components";

const CurrencyLabel = styled.label`
    color: #fff;
    display: block;
    font-family: "Bebas Neue", cursive;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    text-transform: uppercase;
`;

const CurrencySelect = styled.select`
    border: none;
    border-radius: 10px;
    display: block;
    font-size: 1.2rem;
    padding: 1rem;
    --webkit-appearance: none;
    width: 100%;
`;

const useCurrency = options => {
    // State of the custom hook
    const [state, setState] = useState("");

    const SelectCurrency = () => {
        return (
            <>
                <CurrencyLabel>Choose your Currency</CurrencyLabel>
                <CurrencySelect
                    onChange={event => setState(event.target.value)}
                    value={state}
                >
                    <option value="">- Select -</option>
                    {options.map(option => (
                        <option value={option.id} key={option.id}>
                            {option.country}
                        </option>
                    ))}
                </CurrencySelect>
            </>
        );
    };

    return [state, setState, SelectCurrency];
};

export default useCurrency;
