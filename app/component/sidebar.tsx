"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ant from "../assets/Subtract2.png";
import { Home, Shield, FileText, Settings, PhoneCall, LogOut } from "lucide-react";
import { Menu } from "lucide-react";

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="lg:hidden bg-white border-b p-4 flex justify-between items-center z-30">
        <div className="flex items-center gap-2">
          <Image src={ant} alt="CodeAnt AI" width={32} height={32} className="rounded" />
          <p>CodeAnt AI</p>
        </div>
        <Menu className="h-6 w-6 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 top-16 z-20 backdrop-blur-sm bg-black/30 lg:hidden"
          onClick={() => setMenuOpen(false)} 
        ></div>
      )}

      <div
        className={`fixed lg:static lg:block ${
          menuOpen ? "block" : "hidden"
        } lg:w-60 w-full sm:h-screen bg-white z-30 flex flex-col border-r`}
      >
        <div className="flex items-center justify-between p-3">
          <div className="lg:flex items-center gap-2 hidden">
            <Image src={ant} alt="CodeAnt AI" width={32} height={32} className="rounded" />
            <p>CodeAnt AI</p>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(false)}
          ></button>
        </div>

        <div className="ml-4 border rounded-lg w-48 p-1">
          <p>UtkarshDhairyaPanwar</p>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          <Link href="#">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 bg-blue-50 text-blue-600"
            >
              <Home className="h-4 w-4" />
              Repositories
            </Button>
          </Link>
          <Link href="#">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <FileText className="h-4 w-4" />
              AI Code Review
            </Button>
          </Link>
          <Link href="#">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Shield className="h-4 w-4" />
              Cloud Security
            </Button>
          </Link>
          <Link href="#">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <FileText className="h-4 w-4" />
              How to Use
            </Button>
          </Link>
          <Link href="#">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </Link>
        </nav>

        <div className="border-t p-4 flex flex-col space-y-2 sm:mt-96">
          <Link href="#">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <PhoneCall className="h-4 w-4" />
              Support
            </Button>
          </Link>
          <Link href="#">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-red-600 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
