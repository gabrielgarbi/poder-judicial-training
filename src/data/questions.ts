export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "¿Qué es la Constitución en sentido jurídico?",
    options: [
      "Una ley ordinaria dictada por el Congreso para regular los contratos comerciales.",
      "El conjunto de normas escritas y no escritas que determinan el ordenamiento jurídico de un Estado, especialmente la organización de los poderes públicos.",
      "Un tratado internacional que rige las relaciones entre diferentes países limítrofes.",
      "Un decreto de necesidad y urgencia dictado por el Presidente."
    ],
    correctAnswerIndex: 1,
    explanation: "La Constitución es la ley suprema que establece la organización y funcionamiento de los poderes públicos y los derechos de los habitantes."
  },
  {
    id: 2,
    question: "¿En qué partes se divide tradicionalmente nuestra Constitución Nacional?",
    options: [
      "Parte civil y parte penal.",
      "Parte teórica y parte práctica.",
      "Parte dogmática y parte orgánica.",
      "Parte principal y disposiciones transitorias."
    ],
    correctAnswerIndex: 2,
    explanation: "Se divide en parte dogmática (declaraciones, derechos y garantías) y orgánica (organización de los poderes del Estado)."
  },
  {
    id: 3,
    question: "Dentro de la estructura del Poder Judicial de San Juan, ¿qué es la Oficina Judicial?",
    options: [
      "Un juzgado de paz letrado con competencia exclusiva en familia.",
      "El despacho privado del juez donde redacta sus sentencias.",
      "Una estructura organizada por la Corte de Justicia que sirve de soporte y apoyo a la actividad jurisdiccional de los Jueces.",
      "El organismo encargado de cobrar las tasas de justicia exclusivamente."
    ],
    correctAnswerIndex: 2,
    explanation: "La Oficina Judicial asume la actividad administrativa que sirve de soporte a la actividad jurisdiccional propia del Juez."
  },
  {
    id: 4,
    question: "¿Cuál de los siguientes es un principio del Derecho del Trabajo?",
    options: [
      "Principio de culpabilidad.",
      "Principio in dubio pro reo.",
      "Principio de irrenunciabilidad de los derechos.",
      "Principio de libre comercio."
    ],
    correctAnswerIndex: 2,
    explanation: "El principio de irrenunciabilidad procura evitar que el trabajador renuncie a un derecho forzado por la desigualdad existente con el empleador."
  },
  {
    id: 5,
    question: "¿En qué consiste el sistema procesal penal Acusatorio?",
    options: [
      "El juez procede de oficio a la búsqueda, recolección y valoración de las pruebas de forma secreta.",
      "El juez instruye y juzga, mientras el fiscal sólo observa.",
      "El juez es un sujeto pasivo separado de las partes, el fiscal investiga y acusa, y las discusiones se desarrollan en audiencias orales.",
      "Es un sistema donde no existe la defensa pública."
    ],
    correctAnswerIndex: 2,
    explanation: "En el sistema acusatorio hay una división de roles: el fiscal investiga y acusa, la defensa asiste al imputado y el juez resuelve imparcialmente."
  },
  {
    id: 6,
    question: "Según la Ley de Protección Integral a las Mujeres, ¿qué tipo de violencia causa daño emocional y disminución de la autoestima?",
    options: [
      "Violencia física.",
      "Violencia económica.",
      "Violencia psicológica.",
      "Violencia simbólica."
    ],
    correctAnswerIndex: 2,
    explanation: "La violencia psicológica es la que causa daño emocional, disminución de la autoestima o busca degradar o controlar sus acciones mediante amenazas, acoso, etc."
  },
  {
    id: 7,
    question: "En el proceso de familia, ¿qué significa el principio de tutela judicial efectiva?",
    options: [
      "Que el proceso debe ser estrictamente escrito y formal.",
      "Que el juez debe dictar sentencia siempre a favor del demandante.",
      "Que comprende el derecho a acceder a un tribunal, participar adecuadamente, obtener una decisión fundada en plazo razonable y lograr su cumplimiento efectivo.",
      "Que los procesos de familia no admiten prueba testimonial."
    ],
    correctAnswerIndex: 2,
    explanation: "Implica mucho más que interponer una demanda; busca una respuesta judicial efectiva, oportuna y adecuada a las circunstancias."
  },
  {
    id: 8,
    question: "¿Quién ejerce el control de legalidad de las internaciones involuntarias por razones de salud mental?",
    options: [
      "El médico psiquiatra tratante.",
      "El juez, quien debe verificar que la restricción de libertad reúna los presupuestos legales.",
      "El director del hospital.",
      "El defensor del pueblo."
    ],
    correctAnswerIndex: 1,
    explanation: "El equipo de salud adopta inicialmente la internación, pero el juez controla inmediatamente su legalidad."
  },
  {
    id: 9,
    question: "¿Qué es el interés superior del niño?",
    options: [
      "El derecho de los padres a decidir libremente la educación de sus hijos.",
      "Un principio que obliga a que toda decisión que afecte a menores debe considerar primordialmente la máxima satisfacción de sus derechos.",
      "La obligación del Estado de proveer subsidios a todas las familias.",
      "Una doctrina que prioriza siempre el cuidado materno frente al paterno."
    ],
    correctAnswerIndex: 1,
    explanation: "El interés superior del niño es un principio rector consagrado en la Convención sobre los Derechos del Niño que obliga a priorizar sus derechos en toda decisión que los afecte."
  },
  {
    id: 10,
    question: "¿Cuál es el objetivo principal del procedimiento de flagrancia?",
    options: [
      "Aumentar las penas de los delitos cometidos de noche.",
      "Agilizar el juzgamiento de delitos cuando el autor es sorprendido en el momento de cometer el hecho o inmediatamente después.",
      "Excusar de prisión a todos los delincuentes primarios.",
      "Evitar la participación del Ministerio Público Fiscal en el proceso."
    ],
    correctAnswerIndex: 1,
    explanation: "La flagrancia permite un proceso veloz (generalmente oral) cuando la prueba del delito es evidente por haberse sorprendido al autor in fraganti."
  }
];
