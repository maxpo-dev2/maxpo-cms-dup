import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js SignIn Page | Maxpo CMS - Next.js Projects Template",
  description: "This is Next.js Signin Page Maxpo CMS Projects Template",
};

export default function SignIn() {
  return <SignInForm />;
}
