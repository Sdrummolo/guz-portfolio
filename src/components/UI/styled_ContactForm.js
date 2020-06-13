import styled from "styled-components"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  margin: auto;

  input {
    margin: 1rem 0;
    padding: 1rem;
  }

  textarea {
    margin: 1rem 0;
    padding: 2rem 1rem;
  }

  button {
    margin: 1rem 0;
    max-width: 10rem;
    color: #fff;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 800;
    background-color: transparent;
    border: 3px solid #fff;
    padding: 1rem;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
    outline: none;

    &:hover {
      background-color: #fff;
      color: #000;
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
      padding: 0.8rem 1.6rem;
      border: 2px solid #fff;
    }
  }
`

export { StyledForm }
