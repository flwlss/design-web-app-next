"use client";
import { employees, navItems } from "@/common/constants";
import Container from "./Container";
import { scroller } from "react-scroll";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [sectionId, setSectionId] = useState("");

  const toggleBurger = () => {
    (document.getElementById("menu-toggle") as HTMLInputElement).checked =
      false;
  };

  useEffect(() => {
    scroller.scrollTo(sectionId, {
      offset: -79,
      smooth: true,
    });
    toggleBurger();
    setSectionId("");
  }, [sectionId]);

  return (
    <nav className="navbar">
      <Container>
        <div className="navbar__wrapper">
          <div
            onClick={() => {
              setSectionId("header");
            }}
            className="navbar__logoWrapper"
          >
            <img src="/images/logo.svg" alt="logo" />
            <p>{`architecture\ndesign`}</p>
          </div>
          <ul className="navbar__list">
            {navItems.map((item) => {
              return (
                <li
                  onClick={() => {
                    setSectionId(item.scrollId);
                  }}
                  key={item.id}
                >
                  {item.title}
                </li>
              );
            })}
            <li>{employees[0].phone}</li>
          </ul>

          <div className="burger-menu">
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-btn" htmlFor="menu-toggle">
              <span />
            </label>
            <ul className="menubox">
              {navItems.map((item) => {
                return (
                  <li
                    onClick={() => {
                      setSectionId(item.scrollId);
                    }}
                    key={item.id}
                  >
                    {item.title}
                  </li>
                );
              })}
              <li>{employees[0].phone}</li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
