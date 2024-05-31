import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { LoginButton } from "@/app/components/LoginButton";

export const Header = () => {
    return (
        <Navbar maxWidth={'full'} classNames={{ wrapper: "px-0" }}>
          <NavbarBrand>
            NextBase
          </NavbarBrand>
          <NavbarContent className="gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden md:flex">
              <LoginButton />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      );
}
