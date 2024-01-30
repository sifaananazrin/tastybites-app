import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import classes from "@/components/main-headers/main-header.module.css"
import ManinHeaderBackground from "@/components/main-headers/main-header-background";
import NavLink from "./nav-link";


export default function MainHeader() {
  return (
    <>
    <ManinHeaderBackground/>
    <header className={classes.header}>
      <Link href="/" className={classes. logo}>
        <Image src={logoImg} alt="A plate food on it" priority/>
        Next Level Food
      </Link>

      {/*----Seperate compoents for nav----- */}
      <nav className={classes.nav}>
        <ul>
            <li>
<NavLink href='/meals'>Browse Meals</NavLink>
               </li>
            <li>
              
<NavLink href='/community'>Food Community</NavLink>
</li>
        </ul>
      </nav>
    </header>
    </>
  );
}
