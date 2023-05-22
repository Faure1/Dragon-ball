/** @format */

import { Button, css, Grid, Text } from "@nextui-org/react";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function CacilleroAsk({
  content,
  numPregunta,
  respuestas,
  correc,
  setCorec,
  respoC
}) {
  const [bot1, setBot1] = useState(false);
  const [bot2, setBot2] = useState(false);
  const [bot3, setBot3] = useState(false);
  const [bot4, setBot4] = useState(false);
  const [cont, setCont] = useState(false);

  const corroborador = (target) => {
    if (cont != "paso") {
      if (target[1] == true) {
        Swal.fire({
          icon: "success",
          title: "¡si!",
          text: "¡respuesta correcta!",
        });
        setCorec(correc + 1);
        console.log(correc)

      } else {
        Swal.fire({
          icon: "warning",
          title: "¡No!",
          text: "¡respuesta incorrecta!",
        });
      }
      if (respoC == "but1") { setBot1(true) }
      if (respoC == "but2") { setBot2(true) }
      if (respoC == "but3") { setBot3(true) }
      if (respoC == "but4") { setBot4(true) }
      setCont("paso");
    }
  };
  return (
    <div key={numPregunta}>
      <Grid.Container css={{mb:"30px",mt:"50px"}}>
        <Grid.Container xs={12} justify="center">
          <Grid xs={12} justify="center">
            <Text className="frase" h2>
              pregunta numero {numPregunta}
            </Text>
          </Grid>
          <Grid justify="center" xs={12}>
            <Text h3>{content}</Text>
          </Grid>
          <Grid.Container gap={5} justify="center">
            <Grid >
              <Button
                value={respuestas?.respoUno[1]}
                shadow
                css={{ bg: "#025a4e", color: "white" }}
                auto
                color={bot1 ? "success" : "grey"}
                name='1'
                onClick={() => corroborador(respuestas?.respoUno)}>
                {respuestas?.respoUno[0]}
              </Button>
            </Grid>
            <Grid >
              <Button
                value={respuestas?.respoDos[1]}
                shadow
                css={{ bg: "#025a4e", color: "white" }}
                auto
                color={bot2 ? "success" : "grey"}
                name='2'
                onClick={() => corroborador(respuestas?.respoDos)}>
                {respuestas?.respoDos[0]}
              </Button>
            </Grid>
            <Grid >
              <Button
                value={respuestas?.respoTres[1]}
                shadow
                css={{ bg: "#025a4e", color: "white" }}
                auto
                color={bot3 ? "success" : "grey"}
                name='3'
                onClick={() => corroborador(respuestas?.respoTres)}>
                {respuestas?.respoTres[0]}
              </Button>
            </Grid>
            <Grid>
              <Button
                value={respuestas?.respoCuatro[1]}
                shadow
                css={{ bg: "#025a4e", color: "white" }}
                auto
                color={bot4 ? "success" : "grey"}
                name='4'
                onClick={() => corroborador(respuestas?.respoCuatro)}>
                {respuestas?.respoCuatro[0]}
              </Button>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </Grid.Container>
    </div>
  );
}
