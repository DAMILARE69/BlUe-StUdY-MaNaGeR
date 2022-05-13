//@ts-check
import styled from "styled-components";

export const AuthenticationPage = styled.main`
  width: 100%;
  min-height: 100%;
  display: flex;
`;
export const FieldSection = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
export const AuthenticationTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const AuthenticationHeading = styled.h1`
  color: ${({ theme }) => theme.colorTwo};
  font-size: 38px;
`;
export const AuthenticationParagraph = styled.p`
  color: ${({ theme }) => theme.colorThree};
`;
export const AlreadyHaveAnAccount = styled.p`
  color: ${({ theme }) => theme.brandColor};
  font-size: 14px;
  margin-top: 15px;
`;
export const AuthenticationForm = styled.form`
  width: min(90%, 500px);
  min-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 5px;
`;
export const ImageSection = styled.div`
  flex: 2;
`;
