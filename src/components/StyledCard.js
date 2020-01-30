import styled from "styled-components"
import { Card } from "rbx"

export const StyledCard = styled(Card)`
  border-radius: 5px !important;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: max-content;
    opacity: 0;
    border-radius: 5px !important;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    transform: scale(1.05, 1.05);
    &::after {
      opacity: 1;
    }
  }
`
