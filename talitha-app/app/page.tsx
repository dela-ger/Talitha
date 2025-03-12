import LogOutButton from "@/auth/nextjs/components/LogOutButton";
import SignInForm from "@/auth/nextjs/components/SignInForm";
// import SignUpForm from "@/auth/nextjs/components/SignUpForm";

export default function Home() {
  return (
    <div>
      <LogOutButton />
      <SignInForm />
    </div>
  );
}
