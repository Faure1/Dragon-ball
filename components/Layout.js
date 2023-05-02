import React, { useState } from "react";
import Head from "next/head";
import {
  Container,
  Row,
  Col,
  Text,
  Grid,
  Card,
  Checkbox,
  Input,
  Navbar,
  Dropdown,
  Button,
  Collapse,
  Image,
  Spacer,
  Switch,
  changeTheme,
  useTheme,
  Link,
  Popover,
} from "@nextui-org/react";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar isBordered variant="sticky">
          <Navbar.Toggle id="color-sanguche" showIn="xs" />
          <Navbar.Brand
            css={{
              "@xs": {
                w: "12%",
              },
            }}
          ></Navbar.Brand>

          <Navbar.Content></Navbar.Content>

          <Navbar.Content
            css={{
              "@xs": {
                w: "12%",
                jc: "flex-end",
              },
            }}
            enableCursorHighlight
            activeColor="warning"
            hideIn="xs"
            variant="highlight"
          >
            <Navbar.Link href="../">
              <Text className="text-nav">INICIO</Text>
            </Navbar.Link>
            <Navbar.Link href="./status">
              <Text className="text-nav">STATUS</Text>
            </Navbar.Link>
            <Navbar.Link href="contactanos">
              <Text className="text-nav">CONTACTANOS</Text>
            </Navbar.Link>
          </Navbar.Content>

          <Navbar.Collapse disableAnimation>
            <Navbar.CollapseItem>
              <Link color="white" css={{ minWidth: "100%" }} href="../">
                INICIO
              </Link>{" "}
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
              <Link color="white" css={{ minWidth: "100%" }} href="./status">
                STATUS
              </Link>{" "}
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
              <Link color="white" css={{ minWidth: "100%" }} href="#">
                CONTÁCTANOS
              </Link>{" "}
            </Navbar.CollapseItem>
          </Navbar.Collapse>
        </Navbar>
      {children}
    </div>
  );
}
