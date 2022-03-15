// Dependencies
import styled from "styled-components";

// Components


/**
 * les bouttons ont :
 *    - un STYLE commun 
 *    - une ACTION qui diffère selon la page (login, profil : view transaction / edit name)
 *    - il y a 2 bouttons SAVE et CANCEL pour le composant editName
 * 
 * @returns {reactElement}
 */


const Button = ({ content, type, fct }) => {
  return (
    <CTA type={type} onClick={fct}>
      {content}
    </CTA>
  );
}

const CTA = styled.button`
  display: block;
  width: ${(props) => (props.type === "small" ? "auto" : "100%")};
  padding: 8px;
  font-size: ${(props) => (props.type === "small" ? "0.9rem" : "1.1rem")};
  font-weight: bold;
  margin-top: 1rem;
  border: ${(props) => (props.type === "small" ? "" : "none")};
  text-decoration: ${(props) => (props.type === "small" ? "none" : "underline")};
  cursor: pointer;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  margin: 0 auto;
`;
export default Button;