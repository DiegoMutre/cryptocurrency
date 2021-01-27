import { useState } from "react";
import styled from "styled-components";

const CryptoLabel = styled.label`
    color: #fff;
    display: block;
    font-family: "Bebas Neue", cursive;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    text-transform: uppercase;
`;

const CryptoSelect = styled.select`
    border: none;
    border-radius: 10px;
    display: block;
    font-size: 1.2rem;
    padding: 1rem;
    --webkit-appearance: none;
    width: 100%;
`;

const useCrypto = options => {
    const [state, setState] = useState("");

    const SelectCrypto = () => {
        return (
            <>
                <CryptoLabel>Choose cryptocurrency</CryptoLabel>
                <CryptoSelect
                    onChange={event => setState(event.target.value)}
                    value={state}
                >
                    <option value="">- Select -</option>
                    {options.map(({ CoinInfo }) => (
                        <option value={CoinInfo.Name} key={CoinInfo.Id}>
                            {CoinInfo.FullName}
                        </option>
                    ))}
                </CryptoSelect>
            </>
        );
    };

    return [state, setState, SelectCrypto];
};

export default useCrypto;
