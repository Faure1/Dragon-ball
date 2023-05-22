/** @format */

import React, { useState } from "react";
import { Button, Grid, Text,Link } from "@nextui-org/react";
import Layout from "@/components/Layout";
import CacilleroAsk from "@/components/CacilleroAsk";
import Asks from "@/utils";
export default function Home() {
  const [contadorCorrectas, setContadorCorrectas] = useState(0);
  return (
    <section>
      <Grid.Container>
        <Grid justify="center" xs={12}>
          <Text className="titulo" h1>Ciudadania y politica</Text>
        </Grid>
      </Grid.Container>
      {Asks.map((item) => (
        <CacilleroAsk
          setCorec={setContadorCorrectas}
          correc={contadorCorrectas}
          numPregunta={item.numPregunta}
          content={item.content}
          respuestas={item.repuestas}
          respoC={item.respoCorrecta}
        />
      ))}
      <Grid.Container alignItems="center">
        <Grid xs={1}>
          <Button
            css={{ bg: "#025a4e", color: "white" }}
            auto
          >
            <Link href="https://www.canva.com/design/DAFicccypTs/0V42zWyauGyNycbmneFoPQ/edit?utm_content=DAFicccypTs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                Volver
            </Link>
          </Button>
        </Grid>
        <Grid justify="flex-end" xs={11}>
          <Text h1>
            respuestas correctas: {contadorCorrectas}
          </Text>
        </Grid>
      </Grid.Container>
    </section>
  );
}
