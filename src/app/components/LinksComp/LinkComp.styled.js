import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const LinkWrapper = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 2px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const LinkStyled = styled(Link)`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 2px;
  background-color: var();
`;

export const LinkImage = styled(Image)`
  margin-bottom: 10px;
  width: 138px;
  height: 198px;
  top: 340px;
  left: 147px;
  border-radius: 20px;
  border: 4px solid var(--border-opacity);
  background-color: ${({ color }) =>
    color === "blue"
      ? `var(--main-blue)`
      : color === "green"
      ? `var(--main-green)`
      : `var(--main-yellow)`};
  /* ${LinkStyled}:hover & {
    border: 4px solid var(--main-white);
  } */
  &:hover {
    border: 4px solid var(--main-white);
  }
  /* ${LinkStyled}:active & {
    border: 4px solid var(--border-pink);
  } */
`;

export const LinkText = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  color: var(--aсcent-pink);
  background-color: var(--main-white);

  ${LinkStyled}:hover & {
    background-color: var(--border-pink);
  }
  /* ${LinkStyled}:active & {
    color: var(--main-white);
    background-color: var(--aсcent-pink);
  } */
`;
