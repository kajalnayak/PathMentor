// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ChevronDown, FileText, LayoutDashboard, PenBox, StampIcon, StarsIcon } from 'lucide-react';
// import { Button } from './button';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
// import { Span } from 'next/dist/trace';

// const Header = () => {
//   return (
//     <header className='fixed top-0 w-full border-b bg-background/80n backdrop-blur-md z-20
//     supports-[backdrop-filter]:bg-background/'>

//         <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
//             <Link href="/">
//                 <Image
//                  src="/logo4.png"
//                   alt='PathCraftr Logo' 
//                   width={250} 
//                   height={180}
//                   className='h-14 w-auto object-contain' />
//             </Link>

//             <div className='flex items-center space-x-2 md:space-x-4'>
//                 <SignedIn>
//                     <Link href="/dashboard">
//                     <Button>
//                         <LayoutDashboard className='h-4 w-4'/>
//                         <span className='hidden md:block'>Industry Insights</span>
//                     </Button>
//                     </Link>
//                 </SignedIn>





//             <DropdownMenu>
//                     <DropdownMenuTrigger>
//                     <Button>
//                         <StarsIcon className='h-4 w-4'/>
//                         <span className='hidden md:block'>Growth Tools</span>
//                     </Button>
//                     </DropdownMenuTrigger>


//                     <DropdownMenuContent>
//                         <DropdownMenuItem>
//                             <Link href={'/resume'} className='flex items-center gap-2'>
//                             <FileText className="h-4 w-2"/>
//                             <span>Build Resume</span>
//                             </Link>
//                         </DropdownMenuItem>
//                         <DropdownMenuItem>
//                             <Link href={"/ai-cover-letter"} className='flex items-center gap-2'>
//                             <PenBox className='h-4 w-4'/>
//                                     Cover Letter
//                             </Link>
//                         </DropdownMenuItem>
//                         <DropdownMenuItem>Team</DropdownMenuItem>
//                         <DropdownMenuItem>Subscription</DropdownMenuItem>
//                     </DropdownMenuContent>
//             </DropdownMenu>







//             </div>
//         </nav>
//       <SignedOut>
//               <SignInButton />
//               <SignUpButton />
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//     </header>
//   );
// }

// export default Header;










import React from "react";
import { Button } from './button';
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
// import { checkUser } from "@/lib/checkUser";
import { checkUser } from "@/lib/checkUser";

export default async function Header() {
 await checkUser();

//export default  function Header() {

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
    <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
    <Link href="/">
                 <Image
                  src="/logo4.png"
                  alt='PathCraftr Logo' 
                 width={250} 
                 height={180}
                   className='h-14 w-auto object-contain' />
             </Link>

     
      <div className="flex items-center space-x-2 md:space-x-4">
        <SignedIn>
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="hidden md:inline-flex items-center gap-2"
            >
              <LayoutDashboard className="h-4 w-4" />
              Industry Insights
            </Button>
            <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
              <LayoutDashboard className="h-4 w-4" />
            </Button>
          </Link>

          {/* Growth Tools Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center gap-2">
                <StarsIcon className="h-4 w-4" />
                <span className="hidden md:block">Growth Tools</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/resume" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Build Resume
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/ai-cover-letter"
                  className="flex items-center gap-2"
                >
                  <PenBox className="h-4 w-4" />
                  Cover Letter
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/interview" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Interview Prep
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SignedIn>



        {/* <SignedOut>
          <SignInButton>
            <Button variant="outline">Sign In</Button>
          </SignInButton>
        </SignedOut> */}


<SignedOut>

<SignInButton mode="modal">
  <Button variant="outline">Sign In</Button>
</SignInButton>


</SignedOut>



        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
                userButtonPopoverCard: "shadow-xl",
                userPreviewMainIdentifier: "font-semibold",
              },
            }}
            afterSignOutUrl="/"
          />
        </SignedIn>
      </div>
    </nav>
  </header>
  );
}
