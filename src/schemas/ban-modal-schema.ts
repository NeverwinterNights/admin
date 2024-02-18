import { z } from "zod";

import { LocaleType } from "locales/ru";

export const banModalSchema = (t: LocaleType) => {
  return z.object({
    reason: z.string().trim(),
  });
};

export type BanFormValues = z.infer<ReturnType<typeof banModalSchema>>;
