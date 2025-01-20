import styled from 'styled-components';

const SwitcherContainer = styled.div`
  display: flex;
  border-radius: var(--radii);
  overflow: hidden;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  border: 1px solid var(--colors-ui-border);
  background-color: var(--colors-ui-base);

  text-transform: uppercase;
  font-weight: var(--fw-semi-bold);

  &:hover {
    background-color: var(--colors-ui-hover);
    cursor: pointer;
  }

  &:not(:last-child) {
    border-right: none;
  }

  &:first-child {
    border-top-left-radius: var(--radii);
    border-bottom-left-radius: var(--radii);
  }

  &:last-child {
    border-top-right-radius: var(--radii);
    border-bottom-right-radius: var(--radii);
  }

  &.active {
    background-color: var(--colors-ui-btns);
    color: var(--colors-text-select);
    border: none;
  }
`;

const Switcher = ({ buttons }) => {
  return (
    <SwitcherContainer>
      {buttons.map((label, index) => (
        <Button
          key={index}
          name={label}
          // onClick={() => setClickedId(index)}
          // className={index === clickedId ? 'customButton active' : 'customButton'}
        >
          {label}
        </Button>
      ))}
    </SwitcherContainer>
  );
};

export default Switcher;
