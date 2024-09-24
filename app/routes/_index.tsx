import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <ul className="flex flex-col items-center gap-16">
        <p>Welcome to home page</p>
          <Link to="/signup">Signup page</Link>
          <Link to="/login">Login page</Link>
      </ul>
      
    </div>
  );
}

