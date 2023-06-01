/** @format */

import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Text,
  Link,
  Card,
  Image,
  Row,
  Col,
  Spacer,
} from "@nextui-org/react";
import Layout from "@/components/Layout";
import CacilleroAsk from "@/components/CacilleroAsk";
import Asks from "@/utils";
import { SP } from "next/dist/shared/lib/utils";
import { motion } from "framer-motion";
export default function Home() {
  const [contadorCorrectas, setContadorCorrectas] = useState(0);
  const [card, setCard] = useState("hola");
  const [contador, setContador] = useState(0);


  const changeState = () => {
    if (contador == 0) {
      setCard(true);
    } else {
      setCard(!card);
    }
    setContador(contador + 1);
  };
  return (
    <section style={{ height: "90vh" }}>
      <Grid.Container css={{ mt: "100px" }} justify="center">
        <Grid>
          <Text className="titulo" h1>
            Dragon ball
          </Text>
        </Grid>
      </Grid.Container>
      <Grid.Container
        css={{ mt: "40px" }}
        justify="center"
        alignContent="center"
      >
        <Grid sm={2}>
          <Card
            css={{ maxH: "305px", width: "305px" }}
            isPressable
            isHoverable
            className="Card"
          >
            <Image
              src="img/imgCard.png"
              alt="Default Image"
              width={200}
              height={300}
            />
            <Grid
              xs={12}
              isBlurred
              css={{
                width: "100%",
                position: "absolute",
                bgBlur: "#0f111400",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row css={{ justifyContent: "center" }}>
                <Text css={{ color: "White" }}>Collections</Text>
              </Row>
            </Grid>
          </Card>
        </Grid>
        <Spacer></Spacer>
        <Grid className="CardClick" css={{ flexWrap: "wrap" }} sm={2}>
          <Grid xs={12} css={{ mt: "10px" }} justify="center">
            <Card
              css={{ maxH: "200px", width: "134px" }}
              isPressable
              isHoverable
            >
              <Image
                src="img/imgCard.png"
                alt="Default Image"
                width={200}
                height={300}
              />
              <Grid
                xs={12}
                isBlurred
                css={{
                  width: "100%",
                  position: "absolute",
                  bgBlur: "#0f111400",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row css={{ justifyContent: "center" }}>
                  <Text css={{ color: "White" }}>Collections</Text>
                </Row>
              </Grid>
            </Card>
          </Grid>
          <Grid xs={12}>
            <Grid.Container>
              <Grid xs={12}>
                <Text css={{ color: "#ffff", alignItems: "center", p: "5px" }}>
                  Healers use their knowledge about herbs to heal their fellow
                  teammates. They are good companions on the journey.
                </Text>
              </Grid>
              <Grid css={{ mb: "10px" }} xs={12} justify="center">
                <Button auto rounded shadow color={"#ffff"}>
                  ir a ver
                </Button>
              </Grid>
            </Grid.Container>
          </Grid>
        </Grid>
        <Spacer></Spacer>
        <Grid
          className={card == "hola" ?  "": !card ? " " : "CardClick"}
          css={{ flexWrap: "wrap" }}
          sm={2}
        >
          <Grid xs={12} css={{ mt: "10px" }} justify="center">
            <Card
              onPress={() => changeState()}
              css={{ maxH: "200px", width: "134px" }}
              isPressable
              isHoverable
              className={card == "hola" ?  "Cardsinanimacion": !card ? "Card " : "CardClikeada" }
            >
              <Image
                src="img/imgCard.png"
                alt="Default Image"
                width={200}
                height={300}
              />
              <Grid
                xs={12}
                isBlurred
                css={{
                  width: "100%",
                  position: "absolute",
                  bgBlur: "#0f111400",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row css={{ justifyContent: "center" }}>
                  <Text css={{ color: "White" }}>Collections</Text>
                </Row>
              </Grid>
            </Card>
          </Grid>
          <Grid className={ card == "hola" ?  "": !card ? "TextCardNoClick " : ""} xs={12}>
            {card == "hola" ? <></>:!card ? (
              <></>
            ) : (
              <Grid.Container>
                <Grid className="animaciontextoCard" xs={12}>
                  <Text
                    css={{ color: "#ffff", alignItems: "center", p: "5px" }}
                  >
                    Healers use their knowledge about herbs to heal their fellow
                    teammates. They are good companions on the journey.
                  </Text>
                </Grid>
                <Grid css={{ mb: "10px" }} xs={12} justify="center">
                  <Button
                    className="animacionbotonCard"
                    auto
                    rounded
                    shadow
                    color={"#ffff"}
                  >
                    ir a ver
                  </Button>
                </Grid>
              </Grid.Container>
            )}
          </Grid>
        </Grid>
      </Grid.Container>
    </section>
  );
}
