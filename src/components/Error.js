import styled from "styled-components";
import PropTypes from "prop-types";

const ErrorParagraph = styled.p`
    background-color: #b7322c;
    color: #fff;
    font-family: "Bebas Neue", cursive;
    font-size: 30px;
    font-weight: bold;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
`;

const Error = ({ message }) => {
    return <ErrorParagraph>{message}</ErrorParagraph>;
};

Error.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Error;
