import styled from "styled-components";

/** List with small square accent bullets. */
export const BulletList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};

  li {
    position: relative;
    padding-left: ${({ theme }) => theme.spacing.md};
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.accent};
    border: ${({ theme }) => theme.borders.thin};
  }
`;

export default BulletList;
