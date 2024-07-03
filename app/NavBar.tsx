import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/admin" className="mr-5">
        Admin
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      <Link href="/api/users" className="mr-5">
        Users API
      </Link>
      <Link href="/api/products" className="mr-5">
        Products API
      </Link>
    </div>
  );
};

export default NavBar;
