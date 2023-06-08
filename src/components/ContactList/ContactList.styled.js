import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const Button = styled.button`
  margin-left: auto;
  font-size: 14px;
  color: #FFD233;
  padding: 6px 25px;
  border: 1px solid #FFD233;
  background: #4D5AE5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  cursor: pointer;
`;
