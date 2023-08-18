import { AuthenticatorProps } from "@/models/typings";
import Form from "@components/Form";

export function SubmitAction({ url, label, icon, sx }: any) {
  return (
    <a
      className="flex items-center justify-center w-full py-4 mb-6 font-semibold leading-6 text-white transition duration-200 bg-black bg-opacity-60"
      href={url}
    >
      <div className="w-4 bg-transparent rounded-xl">{icon}</div>
      <span className="ml-3">{label}</span>
    </a>
  );
}

export function AuthenticationInput({ input }: any) {
  return (
    <>
      <div className="relative w-full px-3 py-4 mb-4 border border-green-400 rounded-sm h-14 hover:border-white focus-within:border-green-500">
        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-black px-1 bg-gray-500">
          Password*
        </span>
        <input
          className="block w-full text-sm font-medium text-black bg-transparent outline-none"
          id="signInInput5-3"
          type="password"
        />
      </div>
      <span className="block mb-6 text-xs font-semibold text-black">
        Must be at least 12 characters.
      </span>
    </>
  );
}
export function Authentication({ authentication }: any) {
  return (
    <>
      <AuthenticationInput />
      <SubmitAction />
    </>
  );
}

export function Footer({ footer }: any) {
  const { description, link } = footer;
  return (
    <p className="font-medium text-center">
      <span className="text-black">Having issues?</span>
      <a className="inline-block text-blue-500 hover:underline" href="#">
        Help
      </a>
    </p>
  );
}

export default function AuthenticatorFormData({
  formData
}: { formData: AuthenticatorProps["form"]["formData"] }) {

  const { authentication, footer } = formData ?? null;
  
  return (
    <Form>
      <Authentication authentication={authentication} />
      <Footer footer={footer} />
    </Form>
  );
}
