"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";



import axios from "axios";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";



export const NavbarRoutes = () => {
  // const { userId } = useAuth();
  const pathname = usePathname();


  const isTTSPage = pathname === "/tts";
  const router = useRouter()

  

  


  

}