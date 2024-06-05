import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

import { AcmeLogo } from "./AcmeLogo";
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="navbar-gradient"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-lg"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand className="text-lg">
          <Link to="/" className="flex items-center">
            <AcmeLogo className="mr-2" />
            <p className="font-bold text-white">WFY</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand className="flex items-center text-lg">
          <Link to="/" className="flex items-center">
            <AcmeLogo className="mr-2" />
            <p className="font-bold text-white">WFY</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem className="text-lg">
          <Link to="#" className="text-white">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem className="text-lg">
          <Link to="#" className="text-white">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem className="text-lg">
          <Link to="#" className="text-white">
            Pricing
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex text-lg">
          <Link to="/register" className="text-white">
            Sign Up
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            color="success"
            to="/login"
            variant="flat"
            className="gradient-button text-lg"
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="text-lg">
            <Link
              className="w-full"
              to="#"
              style={{
                color:
                  index === 2
                    ? "orange"
                    : index === menuItems.length - 1
                    ? "red"
                    : "black",
              }}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
