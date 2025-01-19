import styled from 'styled-components';

const CheckboxWrapper = styled.label`
  display: block;
  position: relative;
  /* margin-top: 10px; */
  padding: 10px 20px;
  width: 100%;

  &:hover {
    background-color: var(--colors-ui-hover);
  }
`;

const CheckboxEl = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  position: absolute;
  margin: 0;
  width: 20px;
  height: 20px;
  border: 1px solid var(--colors-ui-unselect);
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }

  &:checked {
    background-color: none;
    border-color: var(--colors-ui-btns);

    &::after {
      content: '';
      position: absolute;
      left: 6px;
      top: 3px;
      width: 6px;
      height: 10px;
      border: solid var(--colors-ui-btns);
      border-width: 0 1.5px 1.5px 0;
      transform: rotate(45deg);
    }
  }
`;

const CheckboxTitle = styled.p`
  font-size: var(--fs-md-sm);
  position: relative;
  left: 30px;
`;

const Checkbox = ({ isChecked, onChange, children }) => {
  return (
    <CheckboxWrapper>
      <CheckboxEl type="checkbox" checked={isChecked} onChange={() => onChange()} />
      <CheckboxTitle>{children}</CheckboxTitle>
    </CheckboxWrapper>
  );
};

export default Checkbox;
