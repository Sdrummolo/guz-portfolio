import styled from "styled-components"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  margin: auto;

  input {
    margin: 2rem 0;
    padding: 1rem;
  }

  textarea {
    padding: 2rem 0;
  }

  button {
    margin: 2rem 0;
    padding: 1rem;
  }
`

export { StyledForm }
