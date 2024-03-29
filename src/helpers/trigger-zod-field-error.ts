// add your form manual type
import { MutationLoginAdminArgs } from "@/types";

type FormType = MutationLoginAdminArgs;

export type FormFields = keyof FormType;

export const triggerZodFieldError = (
  touchedFieldNames: FormFields[],
  trigger: (name?: FormFields | FormFields[]) => Promise<boolean>,
) => {
  if (touchedFieldNames.length > 0) {
    touchedFieldNames.forEach((fieldName) => {
      trigger(fieldName as FormFields);
    });
  }
};
