import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
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
      <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>

      <div
        className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-black 
      text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md"
      >
        <Icon className="search" size="3xl" color="black" />
        <input
          className="flex-grow px-5 text-base bg-transparent outline-none text-white"
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
        loading="lazy"
        className="hidden cursor-pointer h-12 w-12 rounded-full ml-2"
        src="https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/120121042_786306675542641_3583119623868269962_n.jpg?_nc_cat=109&_nc_rgb565=1&ccb=1-3&_nc_sid=84a396&_nc_ohc=f2eHv9br5KkAX8Gh6aA&_nc_ht=scontent-dub4-1.xx&oh=5dcc567e2a276b00e9bd5f62a5c3821a&oe=60F20E57"
        alt=""
      />
    </header>
  );
}

export default Header;

// https://material-tailwind.com/documentation/react/buttons/filled
