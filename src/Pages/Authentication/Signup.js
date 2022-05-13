//@ts-check
import { UserCircle } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../Hooks/useTheme/useTheme";
import { PageWarpper } from "../../Components/PageWarpper/PageWarpper";
import { BTextField } from "../../Components/BInputs/BTextField";
import {
  AuthenticationPage,
  FieldSection,
  AuthenticationTextContainer,
  AuthenticationHeading,
  AuthenticationParagraph,
  AlreadyHaveAnAccount,
  AuthenticationForm,
  ImageSection
} from "./AuthenticationStyles";
import { BMinimalHeader } from "../../Components/BNavigation/BMinimalHeader";
export default function Signup() {
  const goTo = useNavigate();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    userName: null,
    email: null,
    password: null,
    confirmPassword: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const startSignup = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };
  return (
    <PageWarpper>
      <BMinimalHeader position={"flex-end"} mode="sticky" gap={100} />
      <AuthenticationPage>
        <FieldSection>
          <AuthenticationTextContainer>
            <AuthenticationHeading>Join Us Now</AuthenticationHeading>
            <AuthenticationParagraph>
              Start by creating your account
            </AuthenticationParagraph>
            <AlreadyHaveAnAccount onClick={() => goTo("/login")}>
              I already have an account
            </AlreadyHaveAnAccount>
          </AuthenticationTextContainer>
          <AuthenticationForm onSubmit={startSignup}>
            <BTextField
              placeholder="username"
              inputType="text"
              Icon={{
                name: UserCircle,
                size: 32,
                color: theme.brandColor,
                type: "fill"
              }}
              event={undefined}
              color={theme.color}
              focusColor={theme.brandColor}
              hasActiveState={undefined}
            />
            <BTextField
              placeholder="email"
              inputType="text"
              Icon={{
                name: UserCircle,
                size: 32,
                color: theme.brandColor,
                type: "fill"
              }}
              event={undefined}
              color={theme.color}
              focusColor={theme.brandColor}
              hasActiveState={undefined}
            />
            <BTextField
              placeholder="password"
              inputType="text"
              Icon={{
                name: UserCircle,
                size: 32,
                color: theme.brandColor,
                type: "fill"
              }}
              event={undefined}
              color={theme.color}
              focusColor={theme.brandColor}
              hasActiveState={undefined}
            />
            <BTextField
              placeholder="confirm password"
              inputType="password"
              Icon={{
                name: UserCircle,
                size: 32,
                color: theme.brandColor,
                type: "fill"
              }}
              event={undefined}
              color={theme.color}
              focusColor={theme.brandColor}
              hasActiveState={undefined}
            />
          </AuthenticationForm>
        </FieldSection>
        <ImageSection className="wontShowOnMobile wontShowOnTablet"></ImageSection>
      </AuthenticationPage>
    </PageWarpper>
  );
}
