/** @format */

import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import Layout from "@/components/Layout";
import CacilleroAsk from "@/components/CacilleroAsk";
import Asks from "@/utils";
export default function Home() {
  const [contadorCorrectas, setContadorCorrectas] = useState(0);
  return (
    <Layout>
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
      <h1>respuestas correctas: {contadorCorrectas}</h1>
    </Layout>
  );
}
