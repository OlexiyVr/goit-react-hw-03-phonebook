import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
  margin: 5px;
  font-size: 25px;
  color: #FFD233;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(Field)`
  margin: 0;
  outline: none;
  width: 200px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #333340;
  border-radius: 5px;
`;

export const Button = styled.button`
  margin-top: 10px;
  cursor: pointer;
  font-size: 18px;
  color: #FFD233;
  padding: 8px 25px;
  border: 1px solid #FFD233;
  background: #4D5AE5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;
 
