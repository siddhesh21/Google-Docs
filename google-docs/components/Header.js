import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signOut, useSession } from "next-auth/client";

function Header() {
  const [session] = useSession();

  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-black">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className=" h-20 w-20 border-0"
      >
        <Icon name="menu" color="purple" size="4xl" />
      </Button>
      <Icon name="description" size="5xl" color="purple" />
      <h1 className="ml-2 text-white text-2xl">Docs</h1>

      <div
        className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-black 
      text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md"
      >
        <Icon className="search" size="3xl" color="black" />
        <input
          className="flex-grow px-5 text-base bg-transparent outline-none 
          text-white"
          type="text"
          placeholder="Search"
        />
      </div>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5 md:ml-20 h-20 w-20 border-0"
      >
        <Icon name="apps" color="purple" size="4xl" />
      </Button>

      <img
        onClick={signOut}
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        src={session?.user?.image}
        alt=""
      />
    </header>
  );
}

export default Header;

// https://material-tailwind.com/documentation/react/buttons/filled
