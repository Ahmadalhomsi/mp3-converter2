"use client";

import { SignOutButton, UserButton, useAuth, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ClerkProvider, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const data = useUser();
  const isTTSPage = pathname === "/tts";
  const router = useRouter();

  const handleToPremiumButton = async () => {
    try {
      const user = data.user;
      const userId = user?.id;

      if (!data.isSignedIn) {
        toast.error('Please Sign in first');
        return false;
      }

      const response = await axios.post('/api/toPremium', {
        userId: userId,
        UserType: "Premium"
      });
      console.log('User set to premium:', response.data);
      toast.success('User set to premium successfully!');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log('Error updating user details:', error);
    }
  };

  const handleToNormalButton = async () => {
    try {
      const user = data.user;
      const userId = user?.id;

      if (!data.isSignedIn) {
        toast.error('Please Sign in first');
        return false;
      }

      const response = await axios.post('/api/toPremium', {
        userId: userId,
        UserType: "Normal"
      });
      console.log('User set to normal:', response.data);
      toast.success('User set to normal successfully!');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log('Error updating user details:', error);
    }
  };

  return (
    <div className="flex justify-end items-center py-2 px-2 gap-2 flex-wrap md:flex-nowrap">
      
      {/*
       <button onClick={handleToPremiumButton} className="bg-gray-800 hover:bg-blue-900 text-white font-bold py-1 px-3 md:px-4 lg:px-6 rounded">
        Make User Premium (RBAC)
      </button>

      <button onClick={handleToNormalButton} className="bg-gray-800 hover:bg-blue-900 text-white font-bold py-1 px-3 md:px-4 lg:px-6 rounded">
        Make User Normal (RBAC)
      </button> 
      */}



      {isTTSPage ? (
        <Link href="/" className="bg-gray-800 hover:bg-blue-900 text-white font-bold py-1 px-3 md:px-4 lg:px-6 rounded">
          Exit
        </Link>
      ) : (
        <Link href="/tts" className="bg-gray-800 hover:bg-blue-900 text-white font-bold py-1 px-3 md:px-4 lg:px-6 rounded">
          Go to TTS Page
        </Link>
      )}

      <SignedOut>
        <button className="bg-gray-800 hover:bg-blue-900 text-white font-bold py-1 px-3 md:px-4 lg:px-6 rounded">
          <SignInButton />
        </button>
      </SignedOut>

      <SignedIn>
        <div className="flex gap-2">
          <button className="bg-gray-800 hover:bg-blue-900 text-white font-bold py-1 px-3 md:px-4 lg:px-6 rounded">
            <SignOutButton />
          </button>
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </div>
  );
};
