import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  height: 100%;
	display: flex;
	margin: 0 auto;
	max-width: 100%;
  padding: 0px 18px;
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const Form = styled.form`
  width: 100%;
  height: 600px;
`;

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-flow: wrap column;
  margin-right: 20px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  font-family: var(--font);
  color: var(--dark-blue);
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1.5px solid var(--dark-blue);
  border-radius: var(--radius);
  font-size: 16px;
  background: var(--dark-blue);
  color: var(--light-green);
  font-size: 16px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background: var(--dark-blue);
  color: var(--light-green);
  transition: all ease .2s;
  border: 2px solid var(--dark-blue);
  border-radius: var(--radius);
  font-size: 18px;
  font-weight: 700;
  &:hover {
    background: transparent;
    color: var(--dark-blue);
  }
`;
