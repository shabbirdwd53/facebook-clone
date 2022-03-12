import Image from "next/image";
import { signIn } from "next-auth/react";
("next-auth/client");

const Login = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
        width={200}
        height={200}
      />
      <a
        onClick={signIn}
        className="p-4 mt-6 cursor-pointer bg-blue-500 rounded-full text-white">
        Login with Facebook
      </a>
    </div>
  );
};

export default Login;
