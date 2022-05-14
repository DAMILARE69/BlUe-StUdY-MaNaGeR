//@ts-check
import { UserCircle, Envelope, LockKey } from "phosphor-react";
import { useEffect, useState } from "react";
import { BButton } from "../../Components/BButton/BButton";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../Hooks/useTheme/useTheme";
import { useAuth } from "../../Hooks/useAuth/useAuth";
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
export default function Login() {
  const goTo = useNavigate();
  const { theme } = useTheme();
  const { login, message, setMessage } = useAuth();
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
    await login(formData.email, formData.password);
    setIsSubmitting(false);
  };
  useEffect(() => {
    return () => setMessage(null);
  }, []);
  return (
    <PageWarpper>
      <BMinimalHeader position={"flex-end"} mode="sticky" gap={100} />
      <AuthenticationPage>
        <FieldSection>
          <AuthenticationTextContainer>
            {message && message}
            <AuthenticationHeading>Welcome Back</AuthenticationHeading>
            <AuthenticationParagraph>
              Login to your account
            </AuthenticationParagraph>
            <AlreadyHaveAnAccount onClick={() => goTo("/sign-up")}>
              I don't have an account
            </AlreadyHaveAnAccount>
          </AuthenticationTextContainer>
          <AuthenticationForm onSubmit={startSignup}>
            <BTextField
              placeholder="email"
              inputType="text"
              Icon={{
                name: Envelope,
                size: 32,
                color: theme.brandColor,
                type: "fill"
              }}
              event={({ target }) =>
                setFormData({ ...formData, email: target.value })
              }
              color={theme.color}
              focusColor={theme.brandColor}
              hasActiveState={undefined}
            />
            <BTextField
              placeholder="password"
              inputType="password"
              Icon={{
                name: LockKey,
                size: 32,
                color: theme.brandColor,
                type: "fill"
              }}
              event={({ target }) =>
                setFormData({ ...formData, password: target.value })
              }
              color={theme.color}
              focusColor={theme.brandColor}
              hasActiveState={undefined}
            />

            <BButton
              isDisabled={isSubmitting}
              type={`submit`}
              Icon={undefined}
              color={theme.light}
              background={theme.brandColor}
              height="40px"
              edge="5px"
              content={`Login`}
            />
          </AuthenticationForm>
        </FieldSection>
        <ImageSection className="wontShowOnMobile wontShowOnTablet"></ImageSection>
      </AuthenticationPage>
    </PageWarpper>
  );
}
