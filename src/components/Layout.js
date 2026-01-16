import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: #f5f7fb;
  padding: 32px;
  font-family: Arial, sans-serif;
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  color: #333;
`;

export const Row = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #555;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  min-width: 160px;
`;
