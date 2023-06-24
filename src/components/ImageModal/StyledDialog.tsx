import styled from "styled-components";

const StyledDialog = styled.dialog`
  border: none;
  padding: 0;
  height: 100%;
  width: 100%;
  max-width: 100%;
  background-color: transparent;

  user-select: none;
  outline: none;

  .swiper {
    border-radius: 10px;
    height: calc(100% - 1rem - 50px);
  }

  img {
    border-radius: 10px;
  }

  .zoom-container {
    border-radius: 10px;
  }

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  }

  .button-container {
    svg {
      cursor: pointer;
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export default StyledDialog;
