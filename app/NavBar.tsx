'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const {status, data: session} = useSession()


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
      <Link href="/upload" className="mr-5">
        Upload
      </Link>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'authenticated' && 
        <div>
          {session.user!.name}
          <Link href='/api/auth/signout' className="ml-3">Signout</Link>
        </div>}
      {status === 'unauthenticated' && <Link href="/api/auth/signin" className="mr-5">Login</Link>}
    </div>
  );
};

export default NavBar;
