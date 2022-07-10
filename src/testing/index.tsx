import { render, RenderOptions } from "@testing-library/react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { ReactElement } from "react";

const I18nWrapper = ({ children }: any) => (
  <I18nProvider i18n={i18n}>{children}</I18nProvider>
);

const i18nRender = (ui: ReactElement, options: RenderOptions = {}) =>
  render(ui, { wrapper: I18nWrapper, ...options });

export * from "@testing-library/react";
export { i18nRender as render };