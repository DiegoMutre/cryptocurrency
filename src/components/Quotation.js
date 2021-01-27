import styled from "styled-components";

const QuotationContainer = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`;

const PriceParagraph = styled.p`
    font-size: 30px;

    span {
        font-weight: bold;
    }
`;

const InfoParagraph = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const Quotation = ({ quotationResult }) => {
    // If the object is empty, return null
    if (!Object.keys(quotationResult).length) return null;

    const {
        PRICE,
        LASTUPDATE,
        HIGHDAY,
        LOWDAY,
        CHANGEPCT24HOUR,
    } = quotationResult;

    return (
        <QuotationContainer>
            <PriceParagraph>
                The Price is <span>{PRICE}</span>
            </PriceParagraph>
            <InfoParagraph>
                Highest Price of the Day <span>{HIGHDAY}</span>
            </InfoParagraph>
            <InfoParagraph>
                Lowest Price of the Day <span>{LOWDAY}</span>
            </InfoParagraph>
            <InfoParagraph>
                Variation in the last 24 hours <span>{CHANGEPCT24HOUR}</span>
            </InfoParagraph>
            <InfoParagraph>
                Last Update <span>{LASTUPDATE}</span>
            </InfoParagraph>
        </QuotationContainer>
    );
};

export default Quotation;
