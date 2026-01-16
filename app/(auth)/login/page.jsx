export const metadata = {
  title: {
    absolute: "Login - My App",
  },
};
export default async function Login() {
  const timer = new Promise((resolve) => setTimeout(resolve, 2000));
  await timer;
  return <div>Login Page</div>;
}
