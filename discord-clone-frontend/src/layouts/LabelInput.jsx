import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  color: #b0bbeb;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  margin: 5px 0;
`;

const Input = styled.input`
  flex-grow: 1;
  height: 40px;
  border: 1px solid black;
  border-radius: 5px;
  color: #dcddde;
  background-color: #35393f;
  margin: 10px 0;
  font-size: 16px;
  padding: 0 5px;
`;

export default function LabelInput(props) {
  const { value, setValue, label, type, placeholder } = props;
  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input value={value} onChange={onInputChange} type={type} placeholder={placeholder} />
    </Wrapper>
  );
}
