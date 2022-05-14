//@ts-check
import { UserCircle, Envelope, LockKey } from "phosphor-react";
import { useState } from "react";
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
export default function Signup() {
  const goTo = useNavigate();
  const { theme } = useTheme();
  const { signup, message } = useAuth();
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
    await signup(formData.email, formData.password, formData.userName);
    setIsSubmitting(false);
  };
  return (
    <PageWarpper>
      <BMinimalHeader position={"flex-end"} mode="sticky" gap={100} />
      <AuthenticationPage>
        <FieldSection>
          <AuthenticationTextContainer>
            {message && message}
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
              event={({ target }) =>
                setFormData({ ...formData, userName: target.value })
              }
              color={theme.color}
              focusColor={theme.brandColor}
              hasActiveState={undefined}
            />
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
            <BTextField
              placeholder="confirm password"
              inputType="password"
              Icon={{
                name: LockKey,
                size: 32,
                color: theme.brandColor,
                type: "fill"
              }}
              event={({ target }) =>
                setFormData({ ...formData, userName: target.value })
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
              content={`Sign up`}
            />
          </AuthenticationForm>
        </FieldSection>
        <ImageSection className="wontShowOnMobile wontShowOnTablet"></ImageSection>
      </AuthenticationPage>
    </PageWarpper>
  );
}
