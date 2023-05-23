/** @format */

const Asks = [
  {
    numPregunta: "1",
    content: "¿Qué es un algoritmo?",
    repuestas: {
      respoUno: ["Una secuencia de instrucciones", true, "but1"],

      respoDos: ["Codigos de propgramacion", false, "but2"],

      respoTres: ["Una App", false, "but3"],

      respoCuatro: ["Ninguna de las anteriores", false, "but4"],
    },
    respoCorrecta: "but1"
  },


  {
    numPregunta: "2",
    content: "¿Qué es el deep learning?",
    repuestas: {
      respoUno: ["La opcion 2 y 3 son correctas", true, "but1"],

      respoDos: ["Redes neuronales artificiales", false, "but2"],

      respoTres: ["Aprender y realizar tareas", false, "but3"],

      respoCuatro: ["Investigaciones sobre la IA", false, "but4"],
    },
    respoCorrecta: "but1"
  },
    {
    numPregunta: "3",
    content: "La IA esta compuesta por...",
    repuestas: {
      respoUno: ["Machine Learning", false, "but1"],

      respoDos: ["Maquinas", false, "but2"],

      respoTres: ["Deep Learnin y machine learning", true, "but3"],

      respoCuatro: ["Fuentes de Internet", false, "but4"],
    },
    respoCorrecta: "but3"
  },
      {
    numPregunta: "4",
    content: "La IA se puede interpretar por...",
    repuestas: {
      respoUno: ["Sistema Informatico", false, "but1"],

      respoDos: ["Opcion1 y 3 son correctas", true, "but2"],

      respoTres: ["Procesos de inteligencia", false, "but3"],

      respoCuatro: ["Redes sociales", false, "but4"],
    },
    respoCorrecta: "but2"
  },
{
    numPregunta: "5",
    content: "Los impactos de la IA...",
    repuestas: {
      respoUno: ["Falta de etica", false, "but1"],

      respoDos: ["Vulnerabilidad de internet", true, "but2"],

      respoTres: ["Destruccion de empleos", false, "but3"],

      respoCuatro: ["Todas son correctas", true, "but4"],
    },
    respoCorrecta: "but4"
  },
  {
          numPregunta: "6",
    content: "¿Cual de estos ejemplos es un uso cotidiano?",
    repuestas: {
      respoUno: ["ChatGPT", false, "but1"],

      respoDos: ["GPS", false, "but2"],

      respoTres: ["Redes sociales", false, "but3"],

      respoCuatro: ["Todas son correctas", true, "but4"],
    },
    respoCorrecta: "but4"
  },
];

export default Asks;
