import React, { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  ControlledTextField,
  Loader,
  Typography,
} from "@/components";
import {
  FormFields,
  tokenSetterToSessionStorage,
  triggerZodFieldError,
} from "@/helpers";
import { useTranslation } from "@/hooks";
import { LoginFormValues, loginSchema } from "@/schemas";
import s from "./login.module.scss";
import { useLoginAdminMutation } from "@/queries/auth.generated";
import { PATH } from "@/consts/route-paths";

export const Login = () => {
  const { t } = useTranslation();
  const { push } = useRouter();

  const [loginMutation, { loading }] = useLoginAdminMutation();

  const {
    handleSubmit,
    control,
    formState: { touchedFields },
    trigger,
    setError,
  } = useForm<LoginFormValues>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema(t)),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await loginMutation({
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      if (res.data?.loginAdmin.logged === true) {
        tokenSetterToSessionStorage("YWRtaW5AZ21haWwuY29tOmFkbWlu");
        push(`${PATH.USERS}`);
      }
    } catch (e: any) {
      if (
        e.data &&
        (e.data.messages[0].message === "Authorization error" ||
          e.data.messages === "invalid password or email")
      ) {
        setError("password", {
          type: "password",
          message: t.errors.loginIncorrectData,
        });
      }
    }
  };

  useEffect(() => {
    const touchedFieldNames: FormFields[] = Object.keys(
      touchedFields,
    ) as FormFields[];

    triggerZodFieldError(touchedFieldNames, trigger);
  }, [t, touchedFields, trigger]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Card className={s.card}>
      <Typography variant="h1" as="h1" className={s.title}>
        {t.auth.signIn}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.fields}>
          <ControlledTextField
            name="email"
            control={control}
            label={t.auth.emailLabel}
            type="email"
          />
          <ControlledTextField
            name="password"
            control={control}
            label={t.auth.passwordLabel}
            type="password"
          />
        </div>
        <Button
          variant="primary"
          fullWidth
          type="submit"
          className={s.submitBtn}
        >
          <Typography variant="h3">{t.auth.signIn}</Typography>
        </Button>
      </form>
    </Card>
  );
};
