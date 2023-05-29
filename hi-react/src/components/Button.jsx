import styled from 'styled-component';

const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 8px;
  background-image: url('./hello-react/src/images/검색창_아이콘.jpg');
  border: none;
  cursor: pointer;
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
export default Button;
