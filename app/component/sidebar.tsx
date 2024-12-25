import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ant from "../assets/Subtract2.png"
import { Home, Shield, FileText, Settings, PhoneCall, LogOut } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="flex fixed h-screen w-60  flex-col border-r bg-white">

      <div className="flex items-center gap-2 border-b p-4">
        <Image
          src={ant}
          alt="CodeAnt AI"
          width={32}
          height={32}
          className="rounded"
        />
        <div className="flex-1">
          <select className="w-full appearance-none bg-transparent text-sm font-medium outline-none">
            <option>UtkarshDhairyaPatel</option>
          </select>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1 p-2">
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
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2"
          >
            <FileText className="h-4 w-4" />
            AI Code Review
          </Button>
        </Link>
        <Link href="#">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2"
          >
            <Shield className="h-4 w-4" />
            Cloud Security
          </Button>
        </Link>
        <Link href="#">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2"
          >
            <FileText className="h-4 w-4" />
            How to Use
          </Button>
        </Link>
        <Link href="#">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </Link>
      </nav>

      {/* Footer Navigation */}
      <div className="border-t p-2">
        <Link href="#">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2"
          >
            <PhoneCall className="h-4 w-4" />
            Support
          </Button>
        </Link>
        <Link href="#">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2 text-red-600 hover:bg-red-50 hover:text-red-600"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </Link>
      </div>
    </div>
  )
}

