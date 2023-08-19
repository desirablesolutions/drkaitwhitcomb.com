import { AuthenticatorProps } from "@/models/typings";
import Form from "@components/Form";

export function SubmitAction({
  submitAction,
}: {
  submitAction: AuthenticatorProps["form"]["formData"]["authentication"]["submitAction"];
}) {
  const { url, label, icon } =
    submitAction as AuthenticatorProps["form"]["formData"]["authentication"]["submitAction"];

  return (
    <a
      className="flex items-center justify-center w-full py-4 mb-6 font-semibold text-white transition duration-200 bg-black rounded-lg bg-opacity-60 hover:bg-opacity-100"
      href={url}
    >
      <div className="w-6">{icon}</div>
      <span className="ml-3">{label}</span>
    </a>
  );
}

export function AuthenticationInput({
  input,
}: {
  input: AuthenticatorProps["form"]["formData"]["authentication"]["input"];
}) {
  const { label, password, warning } = input;
  return (
    <>
      <div className="relative w-full px-3 py-4 mb-4 border border-black rounded-lg h-14 hover:border-white focus-within:bg-opacity-90">
        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-black px-1 bg-gray-500">
          {label}
        </span>
        <input
          className="block w-full font-medium text-black bg-transparent outline-none text-md"
          id="signInInput5-3"
          type="password"
        />
      </div>
      <span className="block mb-6 text-xs font-semibold text-black">
        {warning}
      </span>
    </>
  );
}

export function Authentication({
  authentication,
}: {
  authentication: AuthenticatorProps["form"]["formData"]["authentication"];
}) {
  const { submitAction, input } = authentication;
  return (
    <>
      <AuthenticationInput input={input} />
      <SubmitAction submitAction={submitAction} />
    </>
  );
}

export function Footer({
  footer,
}: {
  footer: AuthenticatorProps["form"]["formData"]["footer"];
}) {
  const { description, link } = footer;
  return (
    <p className="flex flex-col font-medium text-center">
      <span className="text-black">{description}</span>
      <a className="inline-block text-blue-500 hover:underline" href={link.url}>
        {link.label}
      </a>
    </p>
  );
}

export default function AuthenticatorFormData({
  formData,
}: {
  formData: AuthenticatorProps["form"]["formData"];
}) {
  const { authentication, footer } = formData ?? null;

  return (
    <Form>
      <Authentication authentication={authentication} />
      <Footer footer={footer} />
    </Form>
  );
}
