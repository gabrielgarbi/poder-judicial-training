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
  },
  {
    id: 11,
    question: "¿Qué es el derecho constitucional?",
    options: ["Rama del derecho penal", "Rama del derecho público interno que estudia la estructura del Estado y los derechos fundamentales", "Rama del derecho privado", "Un tratado internacional"],
    correctAnswerIndex: 1,
    explanation: "Es la rama fundamental del derecho público que organiza al Estado y consagra los derechos y garantías."
  },
  {
    id: 12,
    question: "¿Qué sistema de gobierno adopta la República Argentina según el artículo 1 de la Constitución?",
    options: ["Monárquico y parlamentario", "Representativo, republicano y federal", "Unitario y democrático", "Presidencialista y unitario"],
    correctAnswerIndex: 1,
    explanation: "El artículo 1 establece que la Nación Argentina adopta para su gobierno la forma representativa republicana federal."
  },
  {
    id: 13,
    question: "¿Qué principio consagra el artículo 18 de la Constitución Nacional respecto al proceso penal?",
    options: ["Culpabilidad presunta", "Principio de inocencia y juicio previo", "Inquisición secreta", "Prisión perpetua automática"],
    correctAnswerIndex: 1,
    explanation: "Consagra que ningún habitante puede ser penado sin juicio previo, garantizando así la defensa en juicio y el principio de inocencia."
  },
  {
    id: 14,
    question: "¿Cuál es el órgano máximo del Poder Judicial en la Provincia de San Juan?",
    options: ["El Tribunal Oral", "La Corte de Justicia", "El Consejo de la Magistratura", "El Juzgado de Paz"],
    correctAnswerIndex: 1,
    explanation: "La Corte de Justicia es el máximo tribunal provincial y ejerce la superintendencia de todo el Poder Judicial."
  },
  {
    id: 15,
    question: "¿Qué función cumple el Ministerio Público Fiscal en el sistema acusatorio?",
    options: ["Dictar sentencias", "Asistir al imputado", "Investigar los delitos y promover la acción penal pública", "Administrar las cárceles"],
    correctAnswerIndex: 2,
    explanation: "El Ministerio Público Fiscal es el órgano encargado de llevar adelante la investigación y la acusación penal."
  },
  {
    id: 16,
    question: "¿Qué es la acción de amparo?",
    options: ["Un recurso para pedir indemnización", "Una acción judicial rápida y expedita para proteger derechos constitucionales cuando no hay otro remedio", "Un permiso de construcción", "Una apelación ordinaria"],
    correctAnswerIndex: 1,
    explanation: "El amparo protege derechos y garantías (salvo la libertad física, que está cubierta por el hábeas corpus) de forma rápida."
  },
  {
    id: 17,
    question: "En Derecho de Familia, ¿qué es la responsabilidad parental (ex patria potestad)?",
    options: ["El deber del Estado de educar", "El conjunto de deberes y derechos de los progenitores sobre la persona y bienes del hijo", "El derecho de los abuelos", "La cuota alimentaria"],
    correctAnswerIndex: 1,
    explanation: "Se define como los deberes y derechos de los padres para el cuidado, desarrollo y educación integral de sus hijos menores de edad."
  },
  {
    id: 18,
    question: "¿Cuál de estos es un principio rector en los procesos de familia?",
    options: ["Escritura estricta", "Búsqueda del culpable", "Oralidad, inmediación y resolución pacífica de conflictos", "Publicidad total en los medios"],
    correctAnswerIndex: 2,
    explanation: "Se busca un proceso más ágil y humano mediante la oralidad y el contacto directo del juez (inmediación), protegiendo la intimidad."
  },
  {
    id: 19,
    question: "¿Qué es el Hábeas Corpus?",
    options: ["Garantía que protege la libertad física o ambulatoria frente a arrestos arbitrarios", "Un impuesto", "Un tipo de contrato laboral", "Una ley municipal"],
    correctAnswerIndex: 0,
    explanation: "Es la acción que procede ante detenciones ilegales o agravamiento ilegítimo de las condiciones de detención."
  },
  {
    id: 20,
    question: "¿A partir de qué edad las personas son consideradas mayores de edad según el Código Civil y Comercial?",
    options: ["16 años", "18 años", "21 años", "14 años"],
    correctAnswerIndex: 1,
    explanation: "La mayoría de edad se alcanza a los 18 años, momento en el cual la persona adquiere plena capacidad de ejercicio."
  },
  {
    id: 21,
    question: "¿Qué es el derecho a la tutela judicial efectiva?",
    options: ["El derecho a tener un abogado gratis", "El derecho a acceder a un tribunal, participar en el proceso y obtener una decisión fundada en tiempo razonable", "El derecho a apelar cualquier sentencia", "El derecho a no ser juzgado dos veces"],
    correctAnswerIndex: 1,
    explanation: "Consiste en la garantía de acceso a la justicia y a obtener una respuesta judicial efectiva y oportuna."
  },
  {
    id: 22,
    question: "En la provincia de San Juan, ¿cómo se eligen los jueces de la Corte de Justicia?",
    options: ["Por voto popular directo", "Por la Cámara de Diputados a propuesta en terna del Consejo de la Magistratura", "Por el Gobernador de forma directa", "Por sorteo entre abogados de la matrícula"],
    correctAnswerIndex: 1,
    explanation: "El Art. 206 de la Constitución Provincial dispone que son nombrados por la Cámara de Diputados a propuesta en terna elevada por el Consejo de la Magistratura."
  },
  {
    id: 23,
    question: "¿Qué sistema procesal penal rige actualmente de forma plena (Ley 1851-O) en San Juan?",
    options: ["Sistema Inquisitivo", "Sistema Mixto", "Sistema Acusatorio Adversarial", "Sistema de Jurados Puros"],
    correctAnswerIndex: 2,
    explanation: "La provincia adoptó el Sistema Acusatorio Adversarial, donde el fiscal investiga y acusa, la defensa asiste, y el juez resuelve imparcialmente."
  },
  {
    id: 24,
    question: "Dentro del Ministerio Público de San Juan, ¿qué función tiene el Fiscal General de la Corte?",
    options: ["Dictar sentencias penales", "Asumir la defensa de los imputados", "Ejercer la superintendencia sobre los miembros del Ministerio Público y fijar políticas de persecución penal", "Administrar los fondos de la Corte de Justicia"],
    correctAnswerIndex: 2,
    explanation: "El Fiscal General ejerce la superintendencia y fija las políticas de persecución y defensa oficial con arreglo a las leyes."
  },
  {
    id: 25,
    question: "Según el Código Civil y Comercial, ¿cuál es el principio general respecto a la capacidad de las personas?",
    options: ["La incapacidad absoluta", "La presunción de capacidad, limitándose excepcionalmente mediante apoyos", "La incapacidad relativa de los mayores de 65 años", "La incapacidad de hecho y de derecho de los menores"],
    correctAnswerIndex: 1,
    explanation: "Se presume la capacidad, siendo la restricción una excepción que requiere evaluación interdisciplinaria e intervención judicial."
  },
  {
    id: 26,
    question: "¿Qué es la competencia 'por materia' en el ámbito procesal?",
    options: ["La que se determina por el valor económico en juego", "La que hace referencia al espacio físico (territorio)", "La que atiende a la naturaleza del derecho sustantivo que se articula (civil, penal, laboral, etc.)", "La que se determina por la instancia (primera o segunda)"],
    correctAnswerIndex: 2,
    explanation: "La competencia material se define por la naturaleza del reclamo o derecho sustantivo en juego."
  },
  {
    id: 27,
    question: "Según el derecho laboral, ¿qué implica el principio 'in dubio pro operario'?",
    options: ["Que el trabajador siempre tiene la razón", "Que en caso de duda sobre la interpretación de una norma, debe decidirse en el sentido más favorable al trabajador", "Que el trabajador no paga costas", "Que el empleador es siempre culpable"],
    correctAnswerIndex: 1,
    explanation: "Este principio establece que, ante dudas en la interpretación o alcance de la ley, el juez debe optar por la más favorable al trabajador."
  },
  {
    id: 28,
    question: "¿Qué es el amparo por mora en la provincia de San Juan?",
    options: ["Una acción para desalojar a un inquilino moroso", "Una orden judicial de pronto despacho para que la administración pública decida cuando ha vencido el plazo legal", "Un recurso penal", "Una medida cautelar contra deudores alimentarios"],
    correctAnswerIndex: 1,
    explanation: "El amparo por mora (Art. 41 Const. Provincial) permite acudir al juez para que emplace a la administración a pronunciarse cuando hay demoras injustificadas."
  },
  {
    id: 29,
    question: "¿Qué órgano tiene a su cargo el control de constitucionalidad en el sistema argentino?",
    options: ["Un Tribunal Constitucional exclusivo", "Exclusivamente la Corte Suprema de Justicia de la Nación", "Todos los jueces (control difuso)", "El Poder Legislativo"],
    correctAnswerIndex: 2,
    explanation: "El sistema argentino adopta el control difuso, donde cualquier juez puede declarar inconstitucional una norma para el caso concreto."
  },
  {
    id: 30,
    question: "Según la Convención de Belém do Pará, ¿qué se entiende por violencia institucional contra la mujer?",
    options: ["La ejercida en el ámbito del hogar", "La realizada por funcionarios o agentes de cualquier institución pública que retarde o impida el acceso a políticas y derechos", "La ejercida por sindicatos exclusivamente", "La violencia económica intrafamiliar"],
    correctAnswerIndex: 1,
    explanation: "Es aquella violencia ejercida u obstaculizada por agentes del Estado o instituciones que impide el ejercicio de los derechos de las mujeres."
  },
  {
    id: 31,
    question: "¿A cargo de quién está la instrucción procesal en el sistema inquisitivo tradicional?",
    options: ["Del Fiscal", "Del Juez de Instrucción", "Del Jurado", "De la Policía"],
    correctAnswerIndex: 1,
    explanation: "En el sistema inquisitivo, el juez investiga y juzga, concentrando ambas facultades."
  },
  {
    id: 32,
    question: "¿Qué es la 'jurisdicción' según el material de estudio?",
    options: ["El límite territorial de una provincia", "La facultad de la policía para arrestar", "La función que el juez ejercita de aplicar el derecho", "El conjunto de secretarios de un juzgado"],
    correctAnswerIndex: 2,
    explanation: "La jurisdicción es la función de aplicar el derecho, mientras que la competencia es la medida o aptitud legal para ejercer esa jurisdicción en un asunto."
  },
  {
    id: 33,
    question: "¿Qué tipos de competencia existen principalmente?",
    options: ["Civil, penal, pública y privada", "Territorial, material, personal y por cuantía", "Nacional, provincial y municipal", "Originaria y derivada"],
    correctAnswerIndex: 1,
    explanation: "La competencia se distribuye principalmente por territorio, por materia, por grado y por cuantía económica."
  },
  {
    id: 34,
    question: "Dentro de la Corte de Justicia de San Juan, ¿cómo se toman las decisiones plenarias que fijan doctrina vinculante?",
    options: ["Por mayoría de votos de los ministros presentes en el plenario", "Por decisión unánime", "Por sorteo", "Por decisión exclusiva del Presidente de la Corte"],
    correctAnswerIndex: 0,
    explanation: "La jurisprudencia vinculante (Art. 209 Const. Prov.) se fija en tribunal pleno por mayoría de votos."
  },
  {
    id: 35,
    question: "¿Cuáles son las dos partes fundamentales en que se divide la Constitución Nacional?",
    options: ["Pública y Privada", "Dogmática y Orgánica", "Declarativa y Ejecutiva", "Material y Formal"],
    correctAnswerIndex: 1,
    explanation: "La parte dogmática contiene las declaraciones, derechos y garantías, y la orgánica la estructura y división de los poderes."
  },
  {
    id: 36,
    question: "¿Qué instrumento legal provincial regula la violencia familiar en San Juan?",
    options: ["Ley 1851-O", "Ley 989-E", "Ley 26.485", "El Código Civil y Comercial de la Nación"],
    correctAnswerIndex: 1,
    explanation: "La Ley Provincial 989-E establece el régimen de protección contra la violencia familiar en San Juan."
  },
  {
    id: 37,
    question: "En un proceso judicial de San Juan, ¿qué sucede si una parte no constituye domicilio procesal y electrónico?",
    options: ["Se suspende el proceso", "Se declara la rebeldía de manera automática y se dicta sentencia", "Se considera notificada automáticamente de las resoluciones el día que corresponda", "El juez debe ir a buscar a la persona a su domicilio real"],
    correctAnswerIndex: 2,
    explanation: "Ante la falta de constitución de domicilio, las resoluciones se tienen por notificadas automáticamente conforme a los días de nota o por ministerio de la ley."
  },
  {
    id: 38,
    question: "En el Derecho de las Familias, ¿cuál es la regla general sobre el cuidado personal de los hijos tras el cese de convivencia de los progenitores?",
    options: ["Cuidado personal unilateral a favor de la madre", "Cuidado personal compartido indistinto", "Cuidado personal compartido alternado", "Otorgar la guarda a los abuelos"],
    correctAnswerIndex: 1,
    explanation: "El CCyCN prioriza el cuidado personal compartido bajo la modalidad indistinta como primera alternativa, salvo que no sea posible o resulte perjudicial para el niño."
  },
  {
    id: 39,
    question: "En el proceso penal Acusatorio, ¿quién formaliza la investigación preparatoria?",
    options: ["El Juez de Control de Garantías", "El Ministerio Público Fiscal", "El Defensor Oficial", "El Tribunal de Impugnación"],
    correctAnswerIndex: 1,
    explanation: "Es el Fiscal quien formaliza la investigación penal preparatoria, comunicando al imputado el hecho, calificación y grado de participación."
  },
  {
    id: 40,
    question: "¿Cuáles son los caracteres de la Ley de Contrato de Trabajo respecto a la irrenunciabilidad?",
    options: ["Los derechos laborales son siempre renunciables si hay acuerdo de partes", "Los derechos emergentes de normas imperativas son indisponibles e irrenunciables", "Sólo son irrenunciables las vacaciones", "Es renunciable cualquier derecho a cambio de dinero"],
    correctAnswerIndex: 1,
    explanation: "El principio de irrenunciabilidad (Art. 12 LCT) evita que el trabajador renuncie a derechos imperativos por falta de capacidad de negociación."
  },
  {
    id: 41,
    question: "¿Qué es una Convención Colectiva de Trabajo?",
    options: ["Una ley sancionada por el Congreso", "Un contrato individual entre un empleador y su mejor empleado", "Un acuerdo celebrado entre una asociación sindical y representaciones empleadoras con eficacia vinculante", "Un pacto internacional"],
    correctAnswerIndex: 2,
    explanation: "Es una fuente propia del Derecho del Trabajo, celebrada entre el sindicato y la parte empresaria, que tiene fuerza de ley para la actividad."
  },
  {
    id: 42,
    question: "¿Qué característica tiene la 'capacidad de ejercicio' según el Código Civil y Comercial?",
    options: ["Se adquiere de forma total e inmediata a los 16 años", "Es la aptitud de la persona humana para ejercer por sí misma sus derechos", "Es exclusiva de las personas jurídicas", "No puede limitarse por ninguna circunstancia"],
    correctAnswerIndex: 1,
    explanation: "El art. 23 CCyCN define la capacidad de ejercicio como la aptitud para ejercer por sí los derechos, sujeta a limitaciones por edad o salud mental."
  },
  {
    id: 43,
    question: "Según la Constitución de San Juan, ¿cuántos miembros tiene como mínimo la Corte de Justicia?",
    options: ["Tres", "Cinco", "Siete", "Nueve"],
    correctAnswerIndex: 1,
    explanation: "El Art. 201 de la Constitución de San Juan establece que la Corte está integrada por cinco miembros como mínimo."
  },
  {
    id: 44,
    question: "¿Cuáles son las condiciones para acceder a la Magistratura como Juez de Primera Instancia en San Juan?",
    options: ["Ser argentino nativo, abogado y tener 25 años", "Ser argentino, abogado, tener 10 años de ejercicio y 30 años de edad", "Ser argentino, abogado con 5 años de ejercicio y 25 años de edad", "Ser natural de la provincia y mayor de edad"],
    correctAnswerIndex: 2,
    explanation: "El Art. 204 de la Constitución Provincial exige ser argentino, abogado con 5 años de ejercicio y 25 años de edad."
  },
  {
    id: 45,
    question: "En el procedimiento de flagrancia, ¿cuánto tiempo tiene la policía para notificar al fiscal tras la aprehensión?",
    options: ["Dentro de los 5 días hábiles", "En forma inmediata y sin dilación", "Dentro de las 24 horas", "Dentro de las 72 horas"],
    correctAnswerIndex: 1,
    explanation: "El personal policial debe dar aviso en forma inmediata y sin dilación al fiscal de turno y poner al aprehendido a su disposición."
  },
  {
    id: 46,
    question: "¿Qué figura actúa como garante de los intereses de personas menores de edad de forma principal o complementaria?",
    options: ["El Fiscal de Cámara", "El Defensor Oficial", "La Asesoría Oficial de Menores e Incapaces", "El Secretario del Juzgado"],
    correctAnswerIndex: 2,
    explanation: "La Asesoría de Menores interviene de forma principal o complementaria para proteger y representar los intereses de NNA e incapaces."
  },
  {
    id: 47,
    question: "¿Cuál de estos actos requiere el consentimiento expreso de AMBOS progenitores?",
    options: ["Llevar al hijo al parque", "Comprar ropa", "Autorizar la salida de la República del menor", "Decidir el menú diario"],
    correctAnswerIndex: 2,
    explanation: "El Art. 645 del CCyCN exige consentimiento expreso de ambos progenitores para autorizar la salida del país del hijo menor, entre otros actos graves."
  },
  {
    id: 48,
    question: "La indemnización por despido arbitrario es una manifestación de:",
    options: ["La protección contra el despido en la Constitución Nacional (Art. 14 bis)", "Un acuerdo puramente voluntario", "Una norma del código penal", "El derecho de asociación"],
    correctAnswerIndex: 0,
    explanation: "El Art. 14 bis de la CN garantiza al trabajador protección contra el despido arbitrario."
  },
  {
    id: 49,
    question: "¿Qué es el 'secreto profesional' en el marco de la prueba testimonial?",
    options: ["El derecho del juez a ocultar la prueba", "La facultad de los testigos de no asistir a declarar", "La obligación legal de determinadas personas de no revelar hechos confidenciales conocidos en el ejercicio de su profesión", "Una sanción económica"],
    correctAnswerIndex: 2,
    explanation: "Ciertas profesiones (médicos, abogados) están protegidas y obligadas al secreto profesional y no pueden ser forzadas a testificar sobre esos hechos."
  },
  {
    id: 50,
    question: "¿Qué efecto tiene el 'sobreseimiento' en el proceso penal?",
    options: ["Pone fin al proceso de forma definitiva y tiene fuerza de cosa juzgada material", "Suspende el juicio temporalmente", "Inicia la investigación preliminar", "Agrava la condena"],
    correctAnswerIndex: 0,
    explanation: "El sobreseimiento cierra el proceso de manera definitiva e irrevocable respecto del imputado a cuyo favor se dicta."
  },
  {
    id: 51,
    question: "¿Cuál es el máximo tribunal de la Provincia de San Juan?",
    options: [
      "El Tribunal Superior de Justicia.",
      "La Corte de Justicia.",
      "El Juzgado de Paz.",
      "La Cámara de Apelaciones."
    ],
    correctAnswerIndex: 1,
    explanation: "La Corte de Justicia."
  },
  {
    id: 52,
    question: "¿Quién ejerce el control de constitucionalidad en Argentina?",
    options: [
      "El Presidente de la Nación.",
      "Solo el Poder Legislativo.",
      "Todos los jueces (sistema difuso).",
      "Solo la Corte Suprema."
    ],
    correctAnswerIndex: 2,
    explanation: "Todos los jueces (sistema difuso)."
  },
  {
    id: 53,
    question: "El Ministerio Público Fiscal de San Juan tiene como función principal:",
    options: [
      "Organizar las elecciones.",
      "Dictar sentencias definitivas.",
      "Defender a los imputados sin recursos.",
      "Promover la acción penal y defender la legalidad."
    ],
    correctAnswerIndex: 3,
    explanation: "Promover la acción penal y defender la legalidad."
  },
  {
    id: 54,
    question: "¿Qué función cumple la Defensa Oficial?",
    options: [
      "Emitir leyes.",
      "Controlar el presupuesto judicial.",
      "Garantizar la defensa en juicio de quienes no pueden contratar un abogado particular.",
      "Acusar a los delincuentes."
    ],
    correctAnswerIndex: 2,
    explanation: "Garantizar la defensa en juicio de quienes no pueden contratar un abogado particular."
  },
  {
    id: 55,
    question: "El Consejo de la Magistratura tiene a su cargo:",
    options: [
      "El control de los fiscales.",
      "El dictado de fallos supremos.",
      "La recaudación de impuestos.",
      "La selección de los magistrados inferiores."
    ],
    correctAnswerIndex: 3,
    explanation: "La selección de los magistrados inferiores."
  },
  {
    id: 56,
    question: "El Jurado de Enjuiciamiento sirve para:",
    options: [
      "Nombrar al Gobernador.",
      "Juzgar el mal desempeño o delitos de magistrados inferiores.",
      "Designar jueces.",
      "Juzgar a ciudadanos comunes."
    ],
    correctAnswerIndex: 1,
    explanation: "Juzgar el mal desempeño o delitos de magistrados inferiores."
  },
  {
    id: 57,
    question: "En el sistema acusatorio adversarial, la investigación penal preparatoria está a cargo de:",
    options: [
      "El Juez de Garantías.",
      "El Fiscal.",
      "El Juez de Instrucción.",
      "El Defensor Oficial."
    ],
    correctAnswerIndex: 1,
    explanation: "El Fiscal."
  },
  {
    id: 58,
    question: "El Juez de Garantías en el sistema acusatorio tiene como rol:",
    options: [
      "Defender al imputado.",
      "Controlar el respeto de los derechos y garantías constitucionales durante la investigación.",
      "Investigar los delitos.",
      "Buscar las pruebas de cargo."
    ],
    correctAnswerIndex: 1,
    explanation: "Controlar el respeto de los derechos y garantías constitucionales durante la investigación."
  },
  {
    id: 59,
    question: "¿Qué es el Procedimiento de Flagrancia?",
    options: [
      "Una mediación laboral.",
      "Un procedimiento especial y expedito para quienes son sorprendidos cometiendo un delito.",
      "Un juicio civil por deudas.",
      "Un recurso ante la Corte Suprema."
    ],
    correctAnswerIndex: 1,
    explanation: "Un procedimiento especial y expedito para quienes son sorprendidos cometiendo un delito."
  },
  {
    id: 60,
    question: "El principio de inocencia implica que:",
    options: [
      "Todos son culpables si hay sospecha.",
      "Toda persona se presume inocente hasta que una sentencia firme demuestre lo contrario.",
      "Nadie puede ir a la cárcel.",
      "El acusado debe demostrar su inocencia."
    ],
    correctAnswerIndex: 1,
    explanation: "Toda persona se presume inocente hasta que una sentencia firme demuestre lo contrario."
  },
  {
    id: 61,
    question: "El 'Habeas Corpus' procede ante:",
    options: [
      "Violaciones al derecho de propiedad.",
      "Privaciones o amenazas ilegítimas a la libertad física.",
      "Deudas comerciales.",
      "Despidos sin causa."
    ],
    correctAnswerIndex: 1,
    explanation: "Privaciones o amenazas ilegítimas a la libertad física."
  },
  {
    id: 62,
    question: "El principio de legalidad penal ('nullum crimen nulla poena sine lege') significa que:",
    options: [
      "No hay delito ni pena sin ley previa.",
      "La ley penal es retroactiva.",
      "El Código Penal no rige en las provincias.",
      "Los jueces pueden crear delitos."
    ],
    correctAnswerIndex: 0,
    explanation: "No hay delito ni pena sin ley previa."
  },
  {
    id: 63,
    question: "¿Cuándo comienza la existencia de la persona humana según el CCyC?",
    options: [
      "Desde que se la inscribe en el Registro Civil.",
      "A los 18 años.",
      "Desde la concepción.",
      "Desde el nacimiento."
    ],
    correctAnswerIndex: 2,
    explanation: "Desde la concepción."
  },
  {
    id: 64,
    question: "¿Cuáles son atributos de la personalidad?",
    options: [
      "Patrimonio, deudas, profesión y residencia.",
      "Nombre, capacidad, domicilio y estado.",
      "Nacionalidad, religión y afiliación política.",
      "Sexo, edad, peso y altura."
    ],
    correctAnswerIndex: 1,
    explanation: "Nombre, capacidad, domicilio y estado."
  },
  {
    id: 65,
    question: "El divorcio vincular en el régimen actual argentino:",
    options: [
      "Es irrevocable.",
      "Puede ser solicitado por uno o ambos cónyuges sin invocar causa.",
      "Solo procede por adulterio o injurias graves.",
      "Requiere que pasen 3 años de separación."
    ],
    correctAnswerIndex: 1,
    explanation: "Puede ser solicitado por uno o ambos cónyuges sin invocar causa."
  },
  {
    id: 66,
    question: "¿Qué es la Responsabilidad Parental?",
    options: [
      "El conjunto de deberes y derechos de los progenitores sobre la persona y bienes del hijo.",
      "La patria potestad exclusiva del padre.",
      "El deber de los abuelos de cuidar a los nietos.",
      "La obligación del Estado de mantener a los niños."
    ],
    correctAnswerIndex: 0,
    explanation: "El conjunto de deberes y derechos de los progenitores sobre la persona y bienes del hijo."
  },
  {
    id: 67,
    question: "Las uniones convivenciales producen:",
    options: [
      "Los mismos derechos hereditarios que el matrimonio.",
      "La división de bienes en partes iguales a los 6 meses.",
      "Efectos jurídicos si cumplen los requisitos legales (como convivencia pública, notoria y estable).",
      "Ningún efecto legal."
    ],
    correctAnswerIndex: 2,
    explanation: "Efectos jurídicos si cumplen los requisitos legales (como convivencia pública, notoria y estable)."
  },
  {
    id: 68,
    question: "El proceso de familia se caracteriza por ser:",
    options: [
      "Interdisciplinario y enfocado en la pacificación del conflicto.",
      "Estrictamente escrito y público.",
      "Inquisitivo y demorado.",
      "Unilateral y secreto."
    ],
    correctAnswerIndex: 0,
    explanation: "Interdisciplinario y enfocado en la pacificación del conflicto."
  },
  {
    id: 69,
    question: "El principio 'in dubio pro operario' significa que:",
    options: [
      "El trabajador siempre tiene la razón en los hechos.",
      "En caso de duda, se favorece al empleador.",
      "El empleador no debe probar nada.",
      "En caso de duda sobre la interpretación de una norma, se aplica la más favorable al trabajador."
    ],
    correctAnswerIndex: 3,
    explanation: "En caso de duda sobre la interpretación de una norma, se aplica la más favorable al trabajador."
  },
  {
    id: 70,
    question: "El contrato de trabajo se presume celebrado:",
    options: [
      "Por temporada.",
      "Por tiempo indeterminado.",
      "Como trabajo eventual.",
      "A plazo fijo por 6 meses."
    ],
    correctAnswerIndex: 1,
    explanation: "Por tiempo indeterminado."
  },
  {
    id: 71,
    question: "¿Qué es el principio de irrenunciabilidad?",
    options: [
      "El derecho a no renunciar al empleo.",
      "La obligación de aceptar cualquier salario.",
      "El empleador no puede renunciar a la empresa.",
      "La imposibilidad jurídica de privarse voluntariamente de las ventajas concedidas por el derecho laboral."
    ],
    correctAnswerIndex: 3,
    explanation: "La imposibilidad jurídica de privarse voluntariamente de las ventajas concedidas por el derecho laboral."
  },
  {
    id: 72,
    question: "En el proceso laboral sanjuanino rige el principio de:",
    options: [
      "Mediación penal.",
      "Gratuidad para el trabajador.",
      "Secreto de actuaciones.",
      "Pago previo de costas."
    ],
    correctAnswerIndex: 1,
    explanation: "Gratuidad para el trabajador."
  },
  {
    id: 73,
    question: "La Ley 26.485 protege contra:",
    options: [
      "La violencia deportiva.",
      "La violencia contra las mujeres en los ámbitos en que desarrollen sus relaciones interpersonales.",
      "El acoso escolar exclusivamente.",
      "Los conflictos vecinales."
    ],
    correctAnswerIndex: 1,
    explanation: "La violencia contra las mujeres en los ámbitos en que desarrollen sus relaciones interpersonales."
  },
  {
    id: 74,
    question: "¿Qué es la violencia psicológica según la Ley 26.485?",
    options: [
      "Los golpes o maltrato físico.",
      "La que causa daño emocional, disminución de la autoestima o perjudica el desarrollo personal.",
      "La desigualdad salarial.",
      "El daño al patrimonio de la víctima."
    ],
    correctAnswerIndex: 1,
    explanation: "La que causa daño emocional, disminución de la autoestima o perjudica el desarrollo personal."
  },
  {
    id: 75,
    question: "La Convención de Belém do Pará refiere a:",
    options: [
      "La regulación de los tratados de paz.",
      "El derecho del mar.",
      "El comercio internacional.",
      "La prevención, sanción y erradicación de la violencia contra la mujer."
    ],
    correctAnswerIndex: 3,
    explanation: "La prevención, sanción y erradicación de la violencia contra la mujer."
  },
  {
    id: 76,
    question: "En casos de violencia familiar, los jueces pueden ordenar:",
    options: [
      "El pago de una multa a la provincia.",
      "Prisión perpetua automática.",
      "El despido laboral del agresor.",
      "Medidas cautelares urgentes de protección (ej: exclusión del hogar, restricción de acercamiento)."
    ],
    correctAnswerIndex: 3,
    explanation: "Medidas cautelares urgentes de protección (ej: exclusión del hogar, restricción de acercamiento)."
  },
  {
    id: 77,
    question: "¿Qué es la jurisdicción?",
    options: [
      "La potestad del Estado para administrar justicia y resolver conflictos.",
      "La zona donde actúa la policía.",
      "El poder de cobrar impuestos.",
      "La división de provincias."
    ],
    correctAnswerIndex: 0,
    explanation: "La potestad del Estado para administrar justicia y resolver conflictos."
  },
  {
    id: 78,
    question: "¿Qué es la competencia?",
    options: [
      "La habilidad del juez para fallar.",
      "El horario de tribunales.",
      "El límite o medida de la jurisdicción (por territorio, materia, grado).",
      "La rivalidad entre abogados."
    ],
    correctAnswerIndex: 2,
    explanation: "El límite o medida de la jurisdicción (por territorio, materia, grado)."
  },
  {
    id: 79,
    question: "Un acto jurídico es:",
    options: [
      "Un acontecimiento de la naturaleza.",
      "Un acto voluntario lícito que tiene por fin inmediato producir efectos jurídicos.",
      "Cualquier hecho humano.",
      "Un delito penado por la ley."
    ],
    correctAnswerIndex: 1,
    explanation: "Un acto voluntario lícito que tiene por fin inmediato producir efectos jurídicos."
  },
  {
    id: 80,
    question: "La preclusión procesal significa:",
    options: [
      "Que el juez dicte sentencia.",
      "Que el juicio es gratis.",
      "Que el juicio comienza.",
      "La pérdida de una facultad procesal por haber transcurrido el plazo para ejercerla."
    ],
    correctAnswerIndex: 3,
    explanation: "La pérdida de una facultad procesal por haber transcurrido el plazo para ejercerla."
  },
  {
    id: 81,
    question: "¿Cuáles son los niveles de gobierno en el Estado Federal Argentino?",
    options: [
      "Nacional y Provincial únicamente.",
      "Nacional, Mercosur y ONU.",
      "Provincial y Departamental.",
      "Nacional, Provincial, Municipal y CABA."
    ],
    correctAnswerIndex: 3,
    explanation: "Nacional, Provincial, Municipal y CABA."
  },
  {
    id: 82,
    question: "Los Tratados de Derechos Humanos con jerarquía constitucional:",
    options: [
      "Están por debajo de las leyes nacionales.",
      "Tienen la misma jerarquía que la Constitución.",
      "Solo aplican si una ley los reglamenta.",
      "Son superiores a la Constitución."
    ],
    correctAnswerIndex: 1,
    explanation: "Tienen la misma jerarquía que la Constitución."
  },
  {
    id: 83,
    question: "El amparo es la acción para proteger:",
    options: [
      "La libertad física exclusivamente.",
      "El derecho a cobrar una herencia.",
      "Únicamente derechos patrimoniales.",
      "Derechos constitucionales lesionados de manera manifiesta y arbitraria (que no sean la libertad física)."
    ],
    correctAnswerIndex: 3,
    explanation: "Derechos constitucionales lesionados de manera manifiesta y arbitraria (que no sean la libertad física)."
  },
  {
    id: 84,
    question: "¿Qué principio rige la prueba en el sistema acusatorio?",
    options: [
      "El Juez debe conseguir las pruebas.",
      "La carga de la prueba le corresponde a la Fiscalía (quien acusa).",
      "La carga es del imputado (debe probar su inocencia).",
      "Las pruebas se presumen verdaderas sin demostración."
    ],
    correctAnswerIndex: 1,
    explanation: "La carga de la prueba le corresponde a la Fiscalía (quien acusa)."
  },
  {
    id: 85,
    question: "¿Qué es la cosa juzgada?",
    options: [
      "El atributo de la sentencia definitiva contra la cual no proceden más recursos.",
      "Cuando un objeto ha sido embargado.",
      "El inicio de una causa judicial.",
      "Cuando el juez opina sobre un tema antes del juicio."
    ],
    correctAnswerIndex: 0,
    explanation: "El atributo de la sentencia definitiva contra la cual no proceden más recursos."
  },
  {
    id: 86,
    question: "En el Derecho de Familia, el Interés Superior del Niño implica:",
    options: [
      "Que los abuelos deciden por el niño.",
      "Que el niño manda sobre sus padres.",
      "Que el niño siempre se queda con la madre.",
      "Que las decisiones deben priorizar el máximo bienestar y los derechos del menor de edad."
    ],
    correctAnswerIndex: 3,
    explanation: "Que las decisiones deben priorizar el máximo bienestar y los derechos del menor de edad."
  },
  {
    id: 87,
    question: "La acción de amparo por mora procede:",
    options: [
      "Contra un juez por demorar la sentencia.",
      "Ante la demora injustificada de la Administración Pública en dictar una resolución.",
      "Ante la falta de pago de un pagaré.",
      "Cuando un deudor moroso no paga la cuota alimentaria."
    ],
    correctAnswerIndex: 1,
    explanation: "Ante la demora injustificada de la Administración Pública en dictar una resolución."
  },
  {
    id: 88,
    question: "El Secreto de Sumario en la instrucción mixta sirve para:",
    options: [
      "Proteger los secretos comerciales.",
      "Impedir que se conozcan los actos procesales para no frustrar la investigación.",
      "Ocultar el fallo al público.",
      "Proteger la identidad del juez."
    ],
    correctAnswerIndex: 1,
    explanation: "Impedir que se conozcan los actos procesales para no frustrar la investigación."
  },
  {
    id: 89,
    question: "El trabajo en relación de dependencia se caracteriza por:",
    options: [
      "El trabajo societario de riesgo compartido.",
      "El trabajo voluntario ad honorem.",
      "El trabajo autónomo e independiente.",
      "La subordinación jurídica, técnica y económica del trabajador."
    ],
    correctAnswerIndex: 3,
    explanation: "La subordinación jurídica, técnica y económica del trabajador."
  },
  {
    id: 90,
    question: "Las Garantías Constitucionales son:",
    options: [
      "Los deberes de los ciudadanos.",
      "Los mecanismos jurídicos que protegen los derechos reconocidos en la Constitución.",
      "Declaraciones políticas sin fuerza de ley.",
      "Los castigos para los delincuentes."
    ],
    correctAnswerIndex: 1,
    explanation: "Los mecanismos jurídicos que protegen los derechos reconocidos en la Constitución."
  },
  {
    id: 91,
    question: "El principio 'non bis in idem' significa:",
    options: [
      "Que no se pueden pagar dos impuestos iguales.",
      "Que los jueces deben ser dos por causa.",
      "Que nadie puede ir preso sin abogado.",
      "Que nadie puede ser perseguido penalmente dos veces por el mismo hecho."
    ],
    correctAnswerIndex: 3,
    explanation: "Que nadie puede ser perseguido penalmente dos veces por el mismo hecho."
  },
  {
    id: 92,
    question: "La igualdad ante la ley (Art. 16 CN) implica que:",
    options: [
      "Se debe tratar igual a los iguales en igualdad de circunstancias.",
      "No hay distinciones por edad para ningún acto.",
      "Se eliminan las jerarquías en el empleo público.",
      "Todos los ciudadanos deben cobrar el mismo sueldo."
    ],
    correctAnswerIndex: 0,
    explanation: "Se debe tratar igual a los iguales en igualdad de circunstancias."
  },
  {
    id: 93,
    question: "El Poder Judicial de la Provincia de San Juan tiene como cabeza a:",
    options: [
      "El Fiscal General.",
      "La Corte de Justicia.",
      "La Suprema Corte Nacional.",
      "El Tribunal de Cuentas."
    ],
    correctAnswerIndex: 1,
    explanation: "La Corte de Justicia."
  },
  {
    id: 94,
    question: "En materia laboral, si una norma es ambigua, ¿qué sucede?",
    options: [
      "Se resuelve a favor del Estado.",
      "Queda anulada automáticamente.",
      "Se debe votar en la Legislatura nuevamente.",
      "Se aplica en el sentido más favorable al trabajador (regla in dubio pro operario)."
    ],
    correctAnswerIndex: 3,
    explanation: "Se aplica en el sentido más favorable al trabajador (regla in dubio pro operario)."
  },
  {
    id: 95,
    question: "El control de constitucionalidad en Argentina es 'difuso' porque:",
    options: [
      "Se realiza mediante un referéndum popular.",
      "Solo la Corte Suprema puede ejercerlo.",
      "Lo hace el Poder Ejecutivo.",
      "Puede ser ejercido por cualquier juez de cualquier fuero o instancia."
    ],
    correctAnswerIndex: 3,
    explanation: "Puede ser ejercido por cualquier juez de cualquier fuero o instancia."
  },
  {
    id: 96,
    question: "La adopción plena tiene como efecto principal:",
    options: [
      "Otorgar un permiso de cuidado temporal.",
      "Emplazar al adoptado en la familia adoptante como si fuera hijo biológico, extinguiendo los vínculos con la familia de origen.",
      "Ser revocable en cualquier momento sin motivo.",
      "Dar solo el apellido sin derechos hereditarios."
    ],
    correctAnswerIndex: 1,
    explanation: "Emplazar al adoptado en la familia adoptante como si fuera hijo biológico, extinguiendo los vínculos con la familia de origen."
  },
  {
    id: 97,
    question: "El Ministerio Público de la Defensa en San Juan:",
    options: [
      "Es el encargado de investigar los homicidios.",
      "Garantiza el acceso a la justicia y la defensa técnica de personas vulnerables o ausentes.",
      "Controla los fondos de la Corte de Justicia.",
      "Vota las leyes penales provinciales."
    ],
    correctAnswerIndex: 1,
    explanation: "Garantiza el acceso a la justicia y la defensa técnica de personas vulnerables o ausentes."
  },
  {
    id: 98,
    question: "Los decretos de necesidad y urgencia (DNU):",
    options: [
      "No están previstos en nuestra Constitución.",
      "Los dicta el Poder Ejecutivo en circunstancias excepcionales, prohibiéndose en materia penal, tributaria, electoral o de partidos políticos.",
      "Los dictan los Jueces de Paz.",
      "Los dicta el Congreso en secreto."
    ],
    correctAnswerIndex: 1,
    explanation: "Los dicta el Poder Ejecutivo en circunstancias excepcionales, prohibiéndose en materia penal, tributaria, electoral o de partidos políticos."
  },
  {
    id: 99,
    question: "El principio de continuidad de la relación laboral:",
    options: [
      "El salario debe pagarse todos los días.",
      "En caso de duda, se debe interpretar que el contrato sigue vigente.",
      "El empleador no puede cerrar la empresa nunca.",
      "El trabajador no puede tomar vacaciones."
    ],
    correctAnswerIndex: 1,
    explanation: "En caso de duda, se debe interpretar que el contrato sigue vigente."
  },
  {
    id: 100,
    question: "La capacidad de derecho es:",
    options: [
      "La aptitud para ejercer los derechos por sí mismo.",
      "La posibilidad física de realizar trabajos.",
      "El patrimonio total de una persona.",
      "La aptitud para ser titular de derechos y deberes jurídicos."
    ],
    correctAnswerIndex: 3,
    explanation: "La aptitud para ser titular de derechos y deberes jurídicos."
  },
  {
    id: 101,
    question: "En relación con el siguiente interrogante: ¿Qué es la Constitución en sentido jurídico?, indique la respuesta correcta:",
    options: [
      "El conjunto de normas escritas y no escritas que determinan el ordenamiento jurídico de un Estado, especialmente la organización de los poderes públicos.",
      "Una ley ordinaria dictada por el Congreso para regular los contratos comerciales.",
      "Un tratado internacional que rige las relaciones entre diferentes países limítrofes.",
      "Un decreto de necesidad y urgencia dictado por el Presidente."
    ],
    correctAnswerIndex: 0,
    explanation: "La Constitución es la ley suprema que establece la organización y funcionamiento de los poderes públicos y los derechos de los habitantes."
  },
  {
    id: 102,
    question: "Considerando que 'La Constitución es la ley suprema que establece la organización y funcionamiento de los poderes públicos y los derechos de los habitantes.', ¿qué es la constitución en sentido jurídico?",
    options: [
      "Un tratado internacional que rige las relaciones entre diferentes países limítrofes.",
      "Un decreto de necesidad y urgencia dictado por el Presidente.",
      "El conjunto de normas escritas y no escritas que determinan el ordenamiento jurídico de un Estado, especialmente la organización de los poderes públicos.",
      "Una ley ordinaria dictada por el Congreso para regular los contratos comerciales."
    ],
    correctAnswerIndex: 2,
    explanation: "La Constitución es la ley suprema que establece la organización y funcionamiento de los poderes públicos y los derechos de los habitantes."
  },
  {
    id: 103,
    question: "En relación con el siguiente interrogante: ¿En qué partes se divide tradicionalmente nuestra Constitución Nacional?, indique la respuesta correcta:",
    options: [
      "Parte dogmática y parte orgánica.",
      "Parte civil y parte penal.",
      "Parte principal y disposiciones transitorias.",
      "Parte teórica y parte práctica."
    ],
    correctAnswerIndex: 0,
    explanation: "Se divide en parte dogmática (declaraciones, derechos y garantías) y orgánica (organización de los poderes del Estado)."
  },
  {
    id: 104,
    question: "Considerando que 'Se divide en parte dogmática (declaraciones, derechos y garantías) y orgánica (organización de los poderes del Estado).', ¿en qué partes se divide tradicionalmente nuestra constitución nacional?",
    options: [
      "Parte principal y disposiciones transitorias.",
      "Parte dogmática y parte orgánica.",
      "Parte civil y parte penal.",
      "Parte teórica y parte práctica."
    ],
    correctAnswerIndex: 1,
    explanation: "Se divide en parte dogmática (declaraciones, derechos y garantías) y orgánica (organización de los poderes del Estado)."
  },
  {
    id: 105,
    question: "En relación con el siguiente interrogante: Dentro de la estructura del Poder Judicial de San Juan, ¿qué es la Oficina Judicial?, indique la respuesta correcta:",
    options: [
      "El organismo encargado de cobrar las tasas de justicia exclusivamente.",
      "Un juzgado de paz letrado con competencia exclusiva en familia.",
      "Una estructura organizada por la Corte de Justicia que sirve de soporte y apoyo a la actividad jurisdiccional de los Jueces.",
      "El despacho privado del juez donde redacta sus sentencias."
    ],
    correctAnswerIndex: 2,
    explanation: "La Oficina Judicial asume la actividad administrativa que sirve de soporte a la actividad jurisdiccional propia del Juez."
  },
  {
    id: 106,
    question: "Considerando que 'La Oficina Judicial asume la actividad administrativa que sirve de soporte a la actividad jurisdiccional propia del Juez.', dentro de la estructura del poder judicial de san juan, ¿qué es la oficina judicial?",
    options: [
      "El organismo encargado de cobrar las tasas de justicia exclusivamente.",
      "El despacho privado del juez donde redacta sus sentencias.",
      "Un juzgado de paz letrado con competencia exclusiva en familia.",
      "Una estructura organizada por la Corte de Justicia que sirve de soporte y apoyo a la actividad jurisdiccional de los Jueces."
    ],
    correctAnswerIndex: 3,
    explanation: "La Oficina Judicial asume la actividad administrativa que sirve de soporte a la actividad jurisdiccional propia del Juez."
  },
  {
    id: 107,
    question: "En relación con el siguiente interrogante: ¿Cuál de los siguientes es un principio del Derecho del Trabajo?, indique la respuesta correcta:",
    options: [
      "Principio in dubio pro reo.",
      "Principio de libre comercio.",
      "Principio de culpabilidad.",
      "Principio de irrenunciabilidad de los derechos."
    ],
    correctAnswerIndex: 3,
    explanation: "El principio de irrenunciabilidad procura evitar que el trabajador renuncie a un derecho forzado por la desigualdad existente con el empleador."
  },
  {
    id: 108,
    question: "Considerando que 'El principio de irrenunciabilidad procura evitar que el trabajador renuncie a un derecho forzado por la desigualdad existente con el empleador.', ¿cuál de los siguientes es un principio del derecho del trabajo?",
    options: [
      "Principio de libre comercio.",
      "Principio in dubio pro reo.",
      "Principio de irrenunciabilidad de los derechos.",
      "Principio de culpabilidad."
    ],
    correctAnswerIndex: 2,
    explanation: "El principio de irrenunciabilidad procura evitar que el trabajador renuncie a un derecho forzado por la desigualdad existente con el empleador."
  },
  {
    id: 109,
    question: "En relación con el siguiente interrogante: ¿En qué consiste el sistema procesal penal Acusatorio?, indique la respuesta correcta:",
    options: [
      "El juez instruye y juzga, mientras el fiscal sólo observa.",
      "El juez es un sujeto pasivo separado de las partes, el fiscal investiga y acusa, y las discusiones se desarrollan en audiencias orales.",
      "Es un sistema donde no existe la defensa pública.",
      "El juez procede de oficio a la búsqueda, recolección y valoración de las pruebas de forma secreta."
    ],
    correctAnswerIndex: 1,
    explanation: "En el sistema acusatorio hay una división de roles: el fiscal investiga y acusa, la defensa asiste al imputado y el juez resuelve imparcialmente."
  },
  {
    id: 110,
    question: "Considerando que 'En el sistema acusatorio hay una división de roles: el fiscal investiga y acusa, la defensa asiste al imputado y el juez resuelve imparcialmente.', ¿en qué consiste el sistema procesal penal acusatorio?",
    options: [
      "El juez instruye y juzga, mientras el fiscal sólo observa.",
      "El juez procede de oficio a la búsqueda, recolección y valoración de las pruebas de forma secreta.",
      "El juez es un sujeto pasivo separado de las partes, el fiscal investiga y acusa, y las discusiones se desarrollan en audiencias orales.",
      "Es un sistema donde no existe la defensa pública."
    ],
    correctAnswerIndex: 2,
    explanation: "En el sistema acusatorio hay una división de roles: el fiscal investiga y acusa, la defensa asiste al imputado y el juez resuelve imparcialmente."
  },
  {
    id: 111,
    question: "En relación con el siguiente interrogante: Según la Ley de Protección Integral a las Mujeres, ¿qué tipo de violencia causa daño emocional y disminución de la autoestima?, indique la respuesta correcta:",
    options: [
      "Violencia simbólica.",
      "Violencia psicológica.",
      "Violencia económica.",
      "Violencia física."
    ],
    correctAnswerIndex: 1,
    explanation: "La violencia psicológica es la que causa daño emocional, disminución de la autoestima o busca degradar o controlar sus acciones mediante amenazas, acoso, etc."
  },
  {
    id: 112,
    question: "Considerando que 'La violencia psicológica es la que causa daño emocional, disminución de la autoestima o busca degradar o controlar sus acciones mediante amenazas, acoso, etc.', según la ley de protección integral a las mujeres, ¿qué tipo de violencia causa daño emocional y disminución de la autoestima?",
    options: [
      "Violencia física.",
      "Violencia psicológica.",
      "Violencia económica.",
      "Violencia simbólica."
    ],
    correctAnswerIndex: 1,
    explanation: "La violencia psicológica es la que causa daño emocional, disminución de la autoestima o busca degradar o controlar sus acciones mediante amenazas, acoso, etc."
  },
  {
    id: 113,
    question: "En relación con el siguiente interrogante: En el proceso de familia, ¿qué significa el principio de tutela judicial efectiva?, indique la respuesta correcta:",
    options: [
      "Que los procesos de familia no admiten prueba testimonial.",
      "Que el proceso debe ser estrictamente escrito y formal.",
      "Que comprende el derecho a acceder a un tribunal, participar adecuadamente, obtener una decisión fundada en plazo razonable y lograr su cumplimiento efectivo.",
      "Que el juez debe dictar sentencia siempre a favor del demandante."
    ],
    correctAnswerIndex: 2,
    explanation: "Implica mucho más que interponer una demanda; busca una respuesta judicial efectiva, oportuna y adecuada a las circunstancias."
  },
  {
    id: 114,
    question: "Considerando que 'Implica mucho más que interponer una demanda; busca una respuesta judicial efectiva, oportuna y adecuada a las circunstancias.', en el proceso de familia, ¿qué significa el principio de tutela judicial efectiva?",
    options: [
      "Que comprende el derecho a acceder a un tribunal, participar adecuadamente, obtener una decisión fundada en plazo razonable y lograr su cumplimiento efectivo.",
      "Que los procesos de familia no admiten prueba testimonial.",
      "Que el juez debe dictar sentencia siempre a favor del demandante.",
      "Que el proceso debe ser estrictamente escrito y formal."
    ],
    correctAnswerIndex: 0,
    explanation: "Implica mucho más que interponer una demanda; busca una respuesta judicial efectiva, oportuna y adecuada a las circunstancias."
  },
  {
    id: 115,
    question: "En relación con el siguiente interrogante: ¿Quién ejerce el control de legalidad de las internaciones involuntarias por razones de salud mental?, indique la respuesta correcta:",
    options: [
      "El defensor del pueblo.",
      "El médico psiquiatra tratante.",
      "El director del hospital.",
      "El juez, quien debe verificar que la restricción de libertad reúna los presupuestos legales."
    ],
    correctAnswerIndex: 3,
    explanation: "El equipo de salud adopta inicialmente la internación, pero el juez controla inmediatamente su legalidad."
  },
  {
    id: 116,
    question: "Considerando que 'El equipo de salud adopta inicialmente la internación, pero el juez controla inmediatamente su legalidad.', ¿quién ejerce el control de legalidad de las internaciones involuntarias por razones de salud mental?",
    options: [
      "El médico psiquiatra tratante.",
      "El director del hospital.",
      "El juez, quien debe verificar que la restricción de libertad reúna los presupuestos legales.",
      "El defensor del pueblo."
    ],
    correctAnswerIndex: 2,
    explanation: "El equipo de salud adopta inicialmente la internación, pero el juez controla inmediatamente su legalidad."
  },
  {
    id: 117,
    question: "En relación con el siguiente interrogante: ¿Qué es el interés superior del niño?, indique la respuesta correcta:",
    options: [
      "El derecho de los padres a decidir libremente la educación de sus hijos.",
      "Un principio que obliga a que toda decisión que afecte a menores debe considerar primordialmente la máxima satisfacción de sus derechos.",
      "Una doctrina que prioriza siempre el cuidado materno frente al paterno.",
      "La obligación del Estado de proveer subsidios a todas las familias."
    ],
    correctAnswerIndex: 1,
    explanation: "El interés superior del niño es un principio rector consagrado en la Convención sobre los Derechos del Niño que obliga a priorizar sus derechos en toda decisión que los afecte."
  },
  {
    id: 118,
    question: "Considerando que 'El interés superior del niño es un principio rector consagrado en la Convención sobre los Derechos del Niño que obliga a priorizar sus derechos en toda decisión que los afecte.', ¿qué es el interés superior del niño?",
    options: [
      "Un principio que obliga a que toda decisión que afecte a menores debe considerar primordialmente la máxima satisfacción de sus derechos.",
      "Una doctrina que prioriza siempre el cuidado materno frente al paterno.",
      "La obligación del Estado de proveer subsidios a todas las familias.",
      "El derecho de los padres a decidir libremente la educación de sus hijos."
    ],
    correctAnswerIndex: 0,
    explanation: "El interés superior del niño es un principio rector consagrado en la Convención sobre los Derechos del Niño que obliga a priorizar sus derechos en toda decisión que los afecte."
  },
  {
    id: 119,
    question: "En relación con el siguiente interrogante: ¿Cuál es el objetivo principal del procedimiento de flagrancia?, indique la respuesta correcta:",
    options: [
      "Excusar de prisión a todos los delincuentes primarios.",
      "Evitar la participación del Ministerio Público Fiscal en el proceso.",
      "Agilizar el juzgamiento de delitos cuando el autor es sorprendido en el momento de cometer el hecho o inmediatamente después.",
      "Aumentar las penas de los delitos cometidos de noche."
    ],
    correctAnswerIndex: 2,
    explanation: "La flagrancia permite un proceso veloz (generalmente oral) cuando la prueba del delito es evidente por haberse sorprendido al autor in fraganti."
  },
  {
    id: 120,
    question: "Considerando que 'La flagrancia permite un proceso veloz (generalmente oral) cuando la prueba del delito es evidente por haberse sorprendido al autor in fraganti.', ¿cuál es el objetivo principal del procedimiento de flagrancia?",
    options: [
      "Agilizar el juzgamiento de delitos cuando el autor es sorprendido en el momento de cometer el hecho o inmediatamente después.",
      "Evitar la participación del Ministerio Público Fiscal en el proceso.",
      "Excusar de prisión a todos los delincuentes primarios.",
      "Aumentar las penas de los delitos cometidos de noche."
    ],
    correctAnswerIndex: 0,
    explanation: "La flagrancia permite un proceso veloz (generalmente oral) cuando la prueba del delito es evidente por haberse sorprendido al autor in fraganti."
  },
  {
    id: 121,
    question: "En relación con el siguiente interrogante: ¿Qué es el derecho constitucional?, indique la respuesta correcta:",
    options: [
      "Rama del derecho penal",
      "Rama del derecho privado",
      "Un tratado internacional",
      "Rama del derecho público interno que estudia la estructura del Estado y los derechos fundamentales"
    ],
    correctAnswerIndex: 3,
    explanation: "Es la rama fundamental del derecho público que organiza al Estado y consagra los derechos y garantías."
  },
  {
    id: 122,
    question: "Considerando que 'Es la rama fundamental del derecho público que organiza al Estado y consagra los derechos y garantías.', ¿qué es el derecho constitucional?",
    options: [
      "Rama del derecho penal",
      "Un tratado internacional",
      "Rama del derecho público interno que estudia la estructura del Estado y los derechos fundamentales",
      "Rama del derecho privado"
    ],
    correctAnswerIndex: 2,
    explanation: "Es la rama fundamental del derecho público que organiza al Estado y consagra los derechos y garantías."
  },
  {
    id: 123,
    question: "En relación con el siguiente interrogante: ¿Qué sistema de gobierno adopta la República Argentina según el artículo 1 de la Constitución?, indique la respuesta correcta:",
    options: [
      "Representativo, republicano y federal",
      "Presidencialista y unitario",
      "Monárquico y parlamentario",
      "Unitario y democrático"
    ],
    correctAnswerIndex: 0,
    explanation: "El artículo 1 establece que la Nación Argentina adopta para su gobierno la forma representativa republicana federal."
  },
  {
    id: 124,
    question: "Considerando que 'El artículo 1 establece que la Nación Argentina adopta para su gobierno la forma representativa republicana federal.', ¿qué sistema de gobierno adopta la república argentina según el artículo 1 de la constitución?",
    options: [
      "Unitario y democrático",
      "Monárquico y parlamentario",
      "Presidencialista y unitario",
      "Representativo, republicano y federal"
    ],
    correctAnswerIndex: 3,
    explanation: "El artículo 1 establece que la Nación Argentina adopta para su gobierno la forma representativa republicana federal."
  },
  {
    id: 125,
    question: "En relación con el siguiente interrogante: ¿Qué principio consagra el artículo 18 de la Constitución Nacional respecto al proceso penal?, indique la respuesta correcta:",
    options: [
      "Principio de inocencia y juicio previo",
      "Culpabilidad presunta",
      "Prisión perpetua automática",
      "Inquisición secreta"
    ],
    correctAnswerIndex: 0,
    explanation: "Consagra que ningún habitante puede ser penado sin juicio previo, garantizando así la defensa en juicio y el principio de inocencia."
  },
  {
    id: 126,
    question: "Considerando que 'Consagra que ningún habitante puede ser penado sin juicio previo, garantizando así la defensa en juicio y el principio de inocencia.', ¿qué principio consagra el artículo 18 de la constitución nacional respecto al proceso penal?",
    options: [
      "Inquisición secreta",
      "Culpabilidad presunta",
      "Principio de inocencia y juicio previo",
      "Prisión perpetua automática"
    ],
    correctAnswerIndex: 2,
    explanation: "Consagra que ningún habitante puede ser penado sin juicio previo, garantizando así la defensa en juicio y el principio de inocencia."
  },
  {
    id: 127,
    question: "En relación con el siguiente interrogante: ¿Cuál es el órgano máximo del Poder Judicial en la Provincia de San Juan?, indique la respuesta correcta:",
    options: [
      "El Consejo de la Magistratura",
      "El Tribunal Oral",
      "El Juzgado de Paz",
      "La Corte de Justicia"
    ],
    correctAnswerIndex: 3,
    explanation: "La Corte de Justicia es el máximo tribunal provincial y ejerce la superintendencia de todo el Poder Judicial."
  },
  {
    id: 128,
    question: "Considerando que 'La Corte de Justicia es el máximo tribunal provincial y ejerce la superintendencia de todo el Poder Judicial.', ¿cuál es el órgano máximo del poder judicial en la provincia de san juan?",
    options: [
      "La Corte de Justicia",
      "El Tribunal Oral",
      "El Juzgado de Paz",
      "El Consejo de la Magistratura"
    ],
    correctAnswerIndex: 0,
    explanation: "La Corte de Justicia es el máximo tribunal provincial y ejerce la superintendencia de todo el Poder Judicial."
  },
  {
    id: 129,
    question: "En relación con el siguiente interrogante: ¿Qué función cumple el Ministerio Público Fiscal en el sistema acusatorio?, indique la respuesta correcta:",
    options: [
      "Investigar los delitos y promover la acción penal pública",
      "Dictar sentencias",
      "Administrar las cárceles",
      "Asistir al imputado"
    ],
    correctAnswerIndex: 0,
    explanation: "El Ministerio Público Fiscal es el órgano encargado de llevar adelante la investigación y la acusación penal."
  },
  {
    id: 130,
    question: "Considerando que 'El Ministerio Público Fiscal es el órgano encargado de llevar adelante la investigación y la acusación penal.', ¿qué función cumple el ministerio público fiscal en el sistema acusatorio?",
    options: [
      "Investigar los delitos y promover la acción penal pública",
      "Dictar sentencias",
      "Asistir al imputado",
      "Administrar las cárceles"
    ],
    correctAnswerIndex: 0,
    explanation: "El Ministerio Público Fiscal es el órgano encargado de llevar adelante la investigación y la acusación penal."
  },
  {
    id: 131,
    question: "En relación con el siguiente interrogante: ¿Qué es la acción de amparo?, indique la respuesta correcta:",
    options: [
      "Una apelación ordinaria",
      "Un permiso de construcción",
      "Un recurso para pedir indemnización",
      "Una acción judicial rápida y expedita para proteger derechos constitucionales cuando no hay otro remedio"
    ],
    correctAnswerIndex: 3,
    explanation: "El amparo protege derechos y garantías (salvo la libertad física, que está cubierta por el hábeas corpus) de forma rápida."
  },
  {
    id: 132,
    question: "Considerando que 'El amparo protege derechos y garantías (salvo la libertad física, que está cubierta por el hábeas corpus) de forma rápida.', ¿qué es la acción de amparo?",
    options: [
      "Una acción judicial rápida y expedita para proteger derechos constitucionales cuando no hay otro remedio",
      "Un recurso para pedir indemnización",
      "Un permiso de construcción",
      "Una apelación ordinaria"
    ],
    correctAnswerIndex: 0,
    explanation: "El amparo protege derechos y garantías (salvo la libertad física, que está cubierta por el hábeas corpus) de forma rápida."
  },
  {
    id: 133,
    question: "En relación con el siguiente interrogante: En Derecho de Familia, ¿qué es la responsabilidad parental (ex patria potestad)?, indique la respuesta correcta:",
    options: [
      "La cuota alimentaria",
      "El conjunto de deberes y derechos de los progenitores sobre la persona y bienes del hijo",
      "El derecho de los abuelos",
      "El deber del Estado de educar"
    ],
    correctAnswerIndex: 1,
    explanation: "Se define como los deberes y derechos de los padres para el cuidado, desarrollo y educación integral de sus hijos menores de edad."
  },
  {
    id: 134,
    question: "Considerando que 'Se define como los deberes y derechos de los padres para el cuidado, desarrollo y educación integral de sus hijos menores de edad.', en derecho de familia, ¿qué es la responsabilidad parental (ex patria potestad)?",
    options: [
      "El deber del Estado de educar",
      "La cuota alimentaria",
      "El derecho de los abuelos",
      "El conjunto de deberes y derechos de los progenitores sobre la persona y bienes del hijo"
    ],
    correctAnswerIndex: 3,
    explanation: "Se define como los deberes y derechos de los padres para el cuidado, desarrollo y educación integral de sus hijos menores de edad."
  },
  {
    id: 135,
    question: "En relación con el siguiente interrogante: ¿Cuál de estos es un principio rector en los procesos de familia?, indique la respuesta correcta:",
    options: [
      "Oralidad, inmediación y resolución pacífica de conflictos",
      "Búsqueda del culpable",
      "Publicidad total en los medios",
      "Escritura estricta"
    ],
    correctAnswerIndex: 0,
    explanation: "Se busca un proceso más ágil y humano mediante la oralidad y el contacto directo del juez (inmediación), protegiendo la intimidad."
  },
  {
    id: 136,
    question: "Considerando que 'Se busca un proceso más ágil y humano mediante la oralidad y el contacto directo del juez (inmediación), protegiendo la intimidad.', ¿cuál de estos es un principio rector en los procesos de familia?",
    options: [
      "Búsqueda del culpable",
      "Oralidad, inmediación y resolución pacífica de conflictos",
      "Escritura estricta",
      "Publicidad total en los medios"
    ],
    correctAnswerIndex: 1,
    explanation: "Se busca un proceso más ágil y humano mediante la oralidad y el contacto directo del juez (inmediación), protegiendo la intimidad."
  },
  {
    id: 137,
    question: "En relación con el siguiente interrogante: ¿Qué es el Hábeas Corpus?, indique la respuesta correcta:",
    options: [
      "Garantía que protege la libertad física o ambulatoria frente a arrestos arbitrarios",
      "Un tipo de contrato laboral",
      "Una ley municipal",
      "Un impuesto"
    ],
    correctAnswerIndex: 0,
    explanation: "Es la acción que procede ante detenciones ilegales o agravamiento ilegítimo de las condiciones de detención."
  },
  {
    id: 138,
    question: "Considerando que 'Es la acción que procede ante detenciones ilegales o agravamiento ilegítimo de las condiciones de detención.', ¿qué es el hábeas corpus?",
    options: [
      "Un tipo de contrato laboral",
      "Un impuesto",
      "Una ley municipal",
      "Garantía que protege la libertad física o ambulatoria frente a arrestos arbitrarios"
    ],
    correctAnswerIndex: 3,
    explanation: "Es la acción que procede ante detenciones ilegales o agravamiento ilegítimo de las condiciones de detención."
  },
  {
    id: 139,
    question: "En relación con el siguiente interrogante: ¿A partir de qué edad las personas son consideradas mayores de edad según el Código Civil y Comercial?, indique la respuesta correcta:",
    options: [
      "14 años",
      "21 años",
      "16 años",
      "18 años"
    ],
    correctAnswerIndex: 3,
    explanation: "La mayoría de edad se alcanza a los 18 años, momento en el cual la persona adquiere plena capacidad de ejercicio."
  },
  {
    id: 140,
    question: "Considerando que 'La mayoría de edad se alcanza a los 18 años, momento en el cual la persona adquiere plena capacidad de ejercicio.', ¿a partir de qué edad las personas son consideradas mayores de edad según el código civil y comercial?",
    options: [
      "14 años",
      "21 años",
      "18 años",
      "16 años"
    ],
    correctAnswerIndex: 2,
    explanation: "La mayoría de edad se alcanza a los 18 años, momento en el cual la persona adquiere plena capacidad de ejercicio."
  },
  {
    id: 141,
    question: "En relación con el siguiente interrogante: ¿Qué es el derecho a la tutela judicial efectiva?, indique la respuesta correcta:",
    options: [
      "El derecho a apelar cualquier sentencia",
      "El derecho a no ser juzgado dos veces",
      "El derecho a tener un abogado gratis",
      "El derecho a acceder a un tribunal, participar en el proceso y obtener una decisión fundada en tiempo razonable"
    ],
    correctAnswerIndex: 3,
    explanation: "Consiste en la garantía de acceso a la justicia y a obtener una respuesta judicial efectiva y oportuna."
  },
  {
    id: 142,
    question: "Considerando que 'Consiste en la garantía de acceso a la justicia y a obtener una respuesta judicial efectiva y oportuna.', ¿qué es el derecho a la tutela judicial efectiva?",
    options: [
      "El derecho a apelar cualquier sentencia",
      "El derecho a acceder a un tribunal, participar en el proceso y obtener una decisión fundada en tiempo razonable",
      "El derecho a tener un abogado gratis",
      "El derecho a no ser juzgado dos veces"
    ],
    correctAnswerIndex: 1,
    explanation: "Consiste en la garantía de acceso a la justicia y a obtener una respuesta judicial efectiva y oportuna."
  },
  {
    id: 143,
    question: "En relación con el siguiente interrogante: En la provincia de San Juan, ¿cómo se eligen los jueces de la Corte de Justicia?, indique la respuesta correcta:",
    options: [
      "Por la Cámara de Diputados a propuesta en terna del Consejo de la Magistratura",
      "Por el Gobernador de forma directa",
      "Por voto popular directo",
      "Por sorteo entre abogados de la matrícula"
    ],
    correctAnswerIndex: 0,
    explanation: "El Art. 206 de la Constitución Provincial dispone que son nombrados por la Cámara de Diputados a propuesta en terna elevada por el Consejo de la Magistratura."
  },
  {
    id: 144,
    question: "Considerando que 'El Art. 206 de la Constitución Provincial dispone que son nombrados por la Cámara de Diputados a propuesta en terna elevada por el Consejo de la Magistratura.', en la provincia de san juan, ¿cómo se eligen los jueces de la corte de justicia?",
    options: [
      "Por sorteo entre abogados de la matrícula",
      "Por el Gobernador de forma directa",
      "Por la Cámara de Diputados a propuesta en terna del Consejo de la Magistratura",
      "Por voto popular directo"
    ],
    correctAnswerIndex: 2,
    explanation: "El Art. 206 de la Constitución Provincial dispone que son nombrados por la Cámara de Diputados a propuesta en terna elevada por el Consejo de la Magistratura."
  },
  {
    id: 145,
    question: "En relación con el siguiente interrogante: ¿Qué sistema procesal penal rige actualmente de forma plena (Ley 1851-O) en San Juan?, indique la respuesta correcta:",
    options: [
      "Sistema Mixto",
      "Sistema Acusatorio Adversarial",
      "Sistema de Jurados Puros",
      "Sistema Inquisitivo"
    ],
    correctAnswerIndex: 1,
    explanation: "La provincia adoptó el Sistema Acusatorio Adversarial, donde el fiscal investiga y acusa, la defensa asiste, y el juez resuelve imparcialmente."
  },
  {
    id: 146,
    question: "Considerando que 'La provincia adoptó el Sistema Acusatorio Adversarial, donde el fiscal investiga y acusa, la defensa asiste, y el juez resuelve imparcialmente.', ¿qué sistema procesal penal rige actualmente de forma plena (ley 1851-o) en san juan?",
    options: [
      "Sistema Mixto",
      "Sistema Inquisitivo",
      "Sistema Acusatorio Adversarial",
      "Sistema de Jurados Puros"
    ],
    correctAnswerIndex: 2,
    explanation: "La provincia adoptó el Sistema Acusatorio Adversarial, donde el fiscal investiga y acusa, la defensa asiste, y el juez resuelve imparcialmente."
  },
  {
    id: 147,
    question: "En relación con el siguiente interrogante: Dentro del Ministerio Público de San Juan, ¿qué función tiene el Fiscal General de la Corte?, indique la respuesta correcta:",
    options: [
      "Ejercer la superintendencia sobre los miembros del Ministerio Público y fijar políticas de persecución penal",
      "Administrar los fondos de la Corte de Justicia",
      "Dictar sentencias penales",
      "Asumir la defensa de los imputados"
    ],
    correctAnswerIndex: 0,
    explanation: "El Fiscal General ejerce la superintendencia y fija las políticas de persecución y defensa oficial con arreglo a las leyes."
  },
  {
    id: 148,
    question: "Considerando que 'El Fiscal General ejerce la superintendencia y fija las políticas de persecución y defensa oficial con arreglo a las leyes.', dentro del ministerio público de san juan, ¿qué función tiene el fiscal general de la corte?",
    options: [
      "Dictar sentencias penales",
      "Asumir la defensa de los imputados",
      "Administrar los fondos de la Corte de Justicia",
      "Ejercer la superintendencia sobre los miembros del Ministerio Público y fijar políticas de persecución penal"
    ],
    correctAnswerIndex: 3,
    explanation: "El Fiscal General ejerce la superintendencia y fija las políticas de persecución y defensa oficial con arreglo a las leyes."
  },
  {
    id: 149,
    question: "En relación con el siguiente interrogante: Según el Código Civil y Comercial, ¿cuál es el principio general respecto a la capacidad de las personas?, indique la respuesta correcta:",
    options: [
      "La incapacidad relativa de los mayores de 65 años",
      "La incapacidad de hecho y de derecho de los menores",
      "La incapacidad absoluta",
      "La presunción de capacidad, limitándose excepcionalmente mediante apoyos"
    ],
    correctAnswerIndex: 3,
    explanation: "Se presume la capacidad, siendo la restricción una excepción que requiere evaluación interdisciplinaria e intervención judicial."
  },
  {
    id: 150,
    question: "Considerando que 'Se presume la capacidad, siendo la restricción una excepción que requiere evaluación interdisciplinaria e intervención judicial.', según el código civil y comercial, ¿cuál es el principio general respecto a la capacidad de las personas?",
    options: [
      "La presunción de capacidad, limitándose excepcionalmente mediante apoyos",
      "La incapacidad absoluta",
      "La incapacidad de hecho y de derecho de los menores",
      "La incapacidad relativa de los mayores de 65 años"
    ],
    correctAnswerIndex: 0,
    explanation: "Se presume la capacidad, siendo la restricción una excepción que requiere evaluación interdisciplinaria e intervención judicial."
  },
  {
    id: 151,
    question: "En relación con el siguiente interrogante: ¿Qué es la competencia 'por materia' en el ámbito procesal?, indique la respuesta correcta:",
    options: [
      "La que se determina por el valor económico en juego",
      "La que atiende a la naturaleza del derecho sustantivo que se articula (civil, penal, laboral, etc.)",
      "La que hace referencia al espacio físico (territorio)",
      "La que se determina por la instancia (primera o segunda)"
    ],
    correctAnswerIndex: 1,
    explanation: "La competencia material se define por la naturaleza del reclamo o derecho sustantivo en juego."
  },
  {
    id: 152,
    question: "Considerando que 'La competencia material se define por la naturaleza del reclamo o derecho sustantivo en juego.', ¿qué es la competencia 'por materia' en el ámbito procesal?",
    options: [
      "La que hace referencia al espacio físico (territorio)",
      "La que atiende a la naturaleza del derecho sustantivo que se articula (civil, penal, laboral, etc.)",
      "La que se determina por la instancia (primera o segunda)",
      "La que se determina por el valor económico en juego"
    ],
    correctAnswerIndex: 1,
    explanation: "La competencia material se define por la naturaleza del reclamo o derecho sustantivo en juego."
  },
  {
    id: 153,
    question: "En relación con el siguiente interrogante: Según el derecho laboral, ¿qué implica el principio 'in dubio pro operario'?, indique la respuesta correcta:",
    options: [
      "Que el trabajador siempre tiene la razón",
      "Que el empleador es siempre culpable",
      "Que el trabajador no paga costas",
      "Que en caso de duda sobre la interpretación de una norma, debe decidirse en el sentido más favorable al trabajador"
    ],
    correctAnswerIndex: 3,
    explanation: "Este principio establece que, ante dudas en la interpretación o alcance de la ley, el juez debe optar por la más favorable al trabajador."
  },
  {
    id: 154,
    question: "Considerando que 'Este principio establece que, ante dudas en la interpretación o alcance de la ley, el juez debe optar por la más favorable al trabajador.', según el derecho laboral, ¿qué implica el principio 'in dubio pro operario'?",
    options: [
      "Que en caso de duda sobre la interpretación de una norma, debe decidirse en el sentido más favorable al trabajador",
      "Que el empleador es siempre culpable",
      "Que el trabajador siempre tiene la razón",
      "Que el trabajador no paga costas"
    ],
    correctAnswerIndex: 0,
    explanation: "Este principio establece que, ante dudas en la interpretación o alcance de la ley, el juez debe optar por la más favorable al trabajador."
  },
  {
    id: 155,
    question: "En relación con el siguiente interrogante: ¿Qué es el amparo por mora en la provincia de San Juan?, indique la respuesta correcta:",
    options: [
      "Una orden judicial de pronto despacho para que la administración pública decida cuando ha vencido el plazo legal",
      "Una acción para desalojar a un inquilino moroso",
      "Un recurso penal",
      "Una medida cautelar contra deudores alimentarios"
    ],
    correctAnswerIndex: 0,
    explanation: "El amparo por mora (Art. 41 Const. Provincial) permite acudir al juez para que emplace a la administración a pronunciarse cuando hay demoras injustificadas."
  },
  {
    id: 156,
    question: "Considerando que 'El amparo por mora (Art. 41 Const. Provincial) permite acudir al juez para que emplace a la administración a pronunciarse cuando hay demoras injustificadas.', ¿qué es el amparo por mora en la provincia de san juan?",
    options: [
      "Una orden judicial de pronto despacho para que la administración pública decida cuando ha vencido el plazo legal",
      "Un recurso penal",
      "Una medida cautelar contra deudores alimentarios",
      "Una acción para desalojar a un inquilino moroso"
    ],
    correctAnswerIndex: 0,
    explanation: "El amparo por mora (Art. 41 Const. Provincial) permite acudir al juez para que emplace a la administración a pronunciarse cuando hay demoras injustificadas."
  },
  {
    id: 157,
    question: "En relación con el siguiente interrogante: ¿Qué órgano tiene a su cargo el control de constitucionalidad en el sistema argentino?, indique la respuesta correcta:",
    options: [
      "Un Tribunal Constitucional exclusivo",
      "El Poder Legislativo",
      "Exclusivamente la Corte Suprema de Justicia de la Nación",
      "Todos los jueces (control difuso)"
    ],
    correctAnswerIndex: 3,
    explanation: "El sistema argentino adopta el control difuso, donde cualquier juez puede declarar inconstitucional una norma para el caso concreto."
  },
  {
    id: 158,
    question: "Considerando que 'El sistema argentino adopta el control difuso, donde cualquier juez puede declarar inconstitucional una norma para el caso concreto.', ¿qué órgano tiene a su cargo el control de constitucionalidad en el sistema argentino?",
    options: [
      "Un Tribunal Constitucional exclusivo",
      "Exclusivamente la Corte Suprema de Justicia de la Nación",
      "Todos los jueces (control difuso)",
      "El Poder Legislativo"
    ],
    correctAnswerIndex: 2,
    explanation: "El sistema argentino adopta el control difuso, donde cualquier juez puede declarar inconstitucional una norma para el caso concreto."
  },
  {
    id: 159,
    question: "En relación con el siguiente interrogante: Según la Convención de Belém do Pará, ¿qué se entiende por violencia institucional contra la mujer?, indique la respuesta correcta:",
    options: [
      "La ejercida por sindicatos exclusivamente",
      "La ejercida en el ámbito del hogar",
      "La violencia económica intrafamiliar",
      "La realizada por funcionarios o agentes de cualquier institución pública que retarde o impida el acceso a políticas y derechos"
    ],
    correctAnswerIndex: 3,
    explanation: "Es aquella violencia ejercida u obstaculizada por agentes del Estado o instituciones que impide el ejercicio de los derechos de las mujeres."
  },
  {
    id: 160,
    question: "Considerando que 'Es aquella violencia ejercida u obstaculizada por agentes del Estado o instituciones que impide el ejercicio de los derechos de las mujeres.', según la convención de belém do pará, ¿qué se entiende por violencia institucional contra la mujer?",
    options: [
      "La realizada por funcionarios o agentes de cualquier institución pública que retarde o impida el acceso a políticas y derechos",
      "La violencia económica intrafamiliar",
      "La ejercida por sindicatos exclusivamente",
      "La ejercida en el ámbito del hogar"
    ],
    correctAnswerIndex: 0,
    explanation: "Es aquella violencia ejercida u obstaculizada por agentes del Estado o instituciones que impide el ejercicio de los derechos de las mujeres."
  },
  {
    id: 161,
    question: "En relación con el siguiente interrogante: ¿A cargo de quién está la instrucción procesal en el sistema inquisitivo tradicional?, indique la respuesta correcta:",
    options: [
      "Del Fiscal",
      "De la Policía",
      "Del Jurado",
      "Del Juez de Instrucción"
    ],
    correctAnswerIndex: 3,
    explanation: "En el sistema inquisitivo, el juez investiga y juzga, concentrando ambas facultades."
  },
  {
    id: 162,
    question: "Considerando que 'En el sistema inquisitivo, el juez investiga y juzga, concentrando ambas facultades.', ¿a cargo de quién está la instrucción procesal en el sistema inquisitivo tradicional?",
    options: [
      "Del Jurado",
      "Del Fiscal",
      "Del Juez de Instrucción",
      "De la Policía"
    ],
    correctAnswerIndex: 2,
    explanation: "En el sistema inquisitivo, el juez investiga y juzga, concentrando ambas facultades."
  },
  {
    id: 163,
    question: "En relación con el siguiente interrogante: ¿Qué es la 'jurisdicción' según el material de estudio?, indique la respuesta correcta:",
    options: [
      "La facultad de la policía para arrestar",
      "La función que el juez ejercita de aplicar el derecho",
      "El límite territorial de una provincia",
      "El conjunto de secretarios de un juzgado"
    ],
    correctAnswerIndex: 1,
    explanation: "La jurisdicción es la función de aplicar el derecho, mientras que la competencia es la medida o aptitud legal para ejercer esa jurisdicción en un asunto."
  },
  {
    id: 164,
    question: "Considerando que 'La jurisdicción es la función de aplicar el derecho, mientras que la competencia es la medida o aptitud legal para ejercer esa jurisdicción en un asunto.', ¿qué es la 'jurisdicción' según el material de estudio?",
    options: [
      "El conjunto de secretarios de un juzgado",
      "La función que el juez ejercita de aplicar el derecho",
      "El límite territorial de una provincia",
      "La facultad de la policía para arrestar"
    ],
    correctAnswerIndex: 1,
    explanation: "La jurisdicción es la función de aplicar el derecho, mientras que la competencia es la medida o aptitud legal para ejercer esa jurisdicción en un asunto."
  },
  {
    id: 165,
    question: "En relación con el siguiente interrogante: ¿Qué tipos de competencia existen principalmente?, indique la respuesta correcta:",
    options: [
      "Nacional, provincial y municipal",
      "Originaria y derivada",
      "Territorial, material, personal y por cuantía",
      "Civil, penal, pública y privada"
    ],
    correctAnswerIndex: 2,
    explanation: "La competencia se distribuye principalmente por territorio, por materia, por grado y por cuantía económica."
  },
  {
    id: 166,
    question: "Considerando que 'La competencia se distribuye principalmente por territorio, por materia, por grado y por cuantía económica.', ¿qué tipos de competencia existen principalmente?",
    options: [
      "Civil, penal, pública y privada",
      "Territorial, material, personal y por cuantía",
      "Originaria y derivada",
      "Nacional, provincial y municipal"
    ],
    correctAnswerIndex: 1,
    explanation: "La competencia se distribuye principalmente por territorio, por materia, por grado y por cuantía económica."
  },
  {
    id: 167,
    question: "En relación con el siguiente interrogante: Dentro de la Corte de Justicia de San Juan, ¿cómo se toman las decisiones plenarias que fijan doctrina vinculante?, indique la respuesta correcta:",
    options: [
      "Por decisión exclusiva del Presidente de la Corte",
      "Por mayoría de votos de los ministros presentes en el plenario",
      "Por decisión unánime",
      "Por sorteo"
    ],
    correctAnswerIndex: 1,
    explanation: "La jurisprudencia vinculante (Art. 209 Const. Prov.) se fija en tribunal pleno por mayoría de votos."
  },
  {
    id: 168,
    question: "Considerando que 'La jurisprudencia vinculante (Art. 209 Const. Prov.) se fija en tribunal pleno por mayoría de votos.', dentro de la corte de justicia de san juan, ¿cómo se toman las decisiones plenarias que fijan doctrina vinculante?",
    options: [
      "Por sorteo",
      "Por decisión exclusiva del Presidente de la Corte",
      "Por mayoría de votos de los ministros presentes en el plenario",
      "Por decisión unánime"
    ],
    correctAnswerIndex: 2,
    explanation: "La jurisprudencia vinculante (Art. 209 Const. Prov.) se fija en tribunal pleno por mayoría de votos."
  },
  {
    id: 169,
    question: "En relación con el siguiente interrogante: ¿Cuáles son las dos partes fundamentales en que se divide la Constitución Nacional?, indique la respuesta correcta:",
    options: [
      "Dogmática y Orgánica",
      "Material y Formal",
      "Pública y Privada",
      "Declarativa y Ejecutiva"
    ],
    correctAnswerIndex: 0,
    explanation: "La parte dogmática contiene las declaraciones, derechos y garantías, y la orgánica la estructura y división de los poderes."
  },
  {
    id: 170,
    question: "Considerando que 'La parte dogmática contiene las declaraciones, derechos y garantías, y la orgánica la estructura y división de los poderes.', ¿cuáles son las dos partes fundamentales en que se divide la constitución nacional?",
    options: [
      "Material y Formal",
      "Dogmática y Orgánica",
      "Declarativa y Ejecutiva",
      "Pública y Privada"
    ],
    correctAnswerIndex: 1,
    explanation: "La parte dogmática contiene las declaraciones, derechos y garantías, y la orgánica la estructura y división de los poderes."
  },
  {
    id: 171,
    question: "En relación con el siguiente interrogante: ¿Qué instrumento legal provincial regula la violencia familiar en San Juan?, indique la respuesta correcta:",
    options: [
      "Ley 989-E",
      "El Código Civil y Comercial de la Nación",
      "Ley 26.485",
      "Ley 1851-O"
    ],
    correctAnswerIndex: 0,
    explanation: "La Ley Provincial 989-E establece el régimen de protección contra la violencia familiar en San Juan."
  },
  {
    id: 172,
    question: "Considerando que 'La Ley Provincial 989-E establece el régimen de protección contra la violencia familiar en San Juan.', ¿qué instrumento legal provincial regula la violencia familiar en san juan?",
    options: [
      "El Código Civil y Comercial de la Nación",
      "Ley 1851-O",
      "Ley 989-E",
      "Ley 26.485"
    ],
    correctAnswerIndex: 2,
    explanation: "La Ley Provincial 989-E establece el régimen de protección contra la violencia familiar en San Juan."
  },
  {
    id: 173,
    question: "En relación con el siguiente interrogante: En un proceso judicial de San Juan, ¿qué sucede si una parte no constituye domicilio procesal y electrónico?, indique la respuesta correcta:",
    options: [
      "Se declara la rebeldía de manera automática y se dicta sentencia",
      "El juez debe ir a buscar a la persona a su domicilio real",
      "Se suspende el proceso",
      "Se considera notificada automáticamente de las resoluciones el día que corresponda"
    ],
    correctAnswerIndex: 3,
    explanation: "Ante la falta de constitución de domicilio, las resoluciones se tienen por notificadas automáticamente conforme a los días de nota o por ministerio de la ley."
  },
  {
    id: 174,
    question: "Considerando que 'Ante la falta de constitución de domicilio, las resoluciones se tienen por notificadas automáticamente conforme a los días de nota o por ministerio de la ley.', en un proceso judicial de san juan, ¿qué sucede si una parte no constituye domicilio procesal y electrónico?",
    options: [
      "Se suspende el proceso",
      "Se considera notificada automáticamente de las resoluciones el día que corresponda",
      "Se declara la rebeldía de manera automática y se dicta sentencia",
      "El juez debe ir a buscar a la persona a su domicilio real"
    ],
    correctAnswerIndex: 1,
    explanation: "Ante la falta de constitución de domicilio, las resoluciones se tienen por notificadas automáticamente conforme a los días de nota o por ministerio de la ley."
  },
  {
    id: 175,
    question: "En relación con el siguiente interrogante: En el Derecho de las Familias, ¿cuál es la regla general sobre el cuidado personal de los hijos tras el cese de convivencia de los progenitores?, indique la respuesta correcta:",
    options: [
      "Cuidado personal unilateral a favor de la madre",
      "Cuidado personal compartido alternado",
      "Cuidado personal compartido indistinto",
      "Otorgar la guarda a los abuelos"
    ],
    correctAnswerIndex: 2,
    explanation: "El CCyCN prioriza el cuidado personal compartido bajo la modalidad indistinta como primera alternativa, salvo que no sea posible o resulte perjudicial para el niño."
  },
  {
    id: 176,
    question: "Considerando que 'El CCyCN prioriza el cuidado personal compartido bajo la modalidad indistinta como primera alternativa, salvo que no sea posible o resulte perjudicial para el niño.', en el derecho de las familias, ¿cuál es la regla general sobre el cuidado personal de los hijos tras el cese de convivencia de los progenitores?",
    options: [
      "Cuidado personal compartido alternado",
      "Cuidado personal compartido indistinto",
      "Cuidado personal unilateral a favor de la madre",
      "Otorgar la guarda a los abuelos"
    ],
    correctAnswerIndex: 1,
    explanation: "El CCyCN prioriza el cuidado personal compartido bajo la modalidad indistinta como primera alternativa, salvo que no sea posible o resulte perjudicial para el niño."
  },
  {
    id: 177,
    question: "En relación con el siguiente interrogante: En el proceso penal Acusatorio, ¿quién formaliza la investigación preparatoria?, indique la respuesta correcta:",
    options: [
      "El Ministerio Público Fiscal",
      "El Tribunal de Impugnación",
      "El Juez de Control de Garantías",
      "El Defensor Oficial"
    ],
    correctAnswerIndex: 0,
    explanation: "Es el Fiscal quien formaliza la investigación penal preparatoria, comunicando al imputado el hecho, calificación y grado de participación."
  },
  {
    id: 178,
    question: "Considerando que 'Es el Fiscal quien formaliza la investigación penal preparatoria, comunicando al imputado el hecho, calificación y grado de participación.', en el proceso penal acusatorio, ¿quién formaliza la investigación preparatoria?",
    options: [
      "El Ministerio Público Fiscal",
      "El Tribunal de Impugnación",
      "El Defensor Oficial",
      "El Juez de Control de Garantías"
    ],
    correctAnswerIndex: 0,
    explanation: "Es el Fiscal quien formaliza la investigación penal preparatoria, comunicando al imputado el hecho, calificación y grado de participación."
  },
  {
    id: 179,
    question: "En relación con el siguiente interrogante: ¿Cuáles son los caracteres de la Ley de Contrato de Trabajo respecto a la irrenunciabilidad?, indique la respuesta correcta:",
    options: [
      "Es renunciable cualquier derecho a cambio de dinero",
      "Sólo son irrenunciables las vacaciones",
      "Los derechos laborales son siempre renunciables si hay acuerdo de partes",
      "Los derechos emergentes de normas imperativas son indisponibles e irrenunciables"
    ],
    correctAnswerIndex: 3,
    explanation: "El principio de irrenunciabilidad (Art. 12 LCT) evita que el trabajador renuncie a derechos imperativos por falta de capacidad de negociación."
  },
  {
    id: 180,
    question: "Considerando que 'El principio de irrenunciabilidad (Art. 12 LCT) evita que el trabajador renuncie a derechos imperativos por falta de capacidad de negociación.', ¿cuáles son los caracteres de la ley de contrato de trabajo respecto a la irrenunciabilidad?",
    options: [
      "Sólo son irrenunciables las vacaciones",
      "Los derechos laborales son siempre renunciables si hay acuerdo de partes",
      "Es renunciable cualquier derecho a cambio de dinero",
      "Los derechos emergentes de normas imperativas son indisponibles e irrenunciables"
    ],
    correctAnswerIndex: 3,
    explanation: "El principio de irrenunciabilidad (Art. 12 LCT) evita que el trabajador renuncie a derechos imperativos por falta de capacidad de negociación."
  },
  {
    id: 181,
    question: "En relación con el siguiente interrogante: ¿Qué es una Convención Colectiva de Trabajo?, indique la respuesta correcta:",
    options: [
      "Una ley sancionada por el Congreso",
      "Un pacto internacional",
      "Un acuerdo celebrado entre una asociación sindical y representaciones empleadoras con eficacia vinculante",
      "Un contrato individual entre un empleador y su mejor empleado"
    ],
    correctAnswerIndex: 2,
    explanation: "Es una fuente propia del Derecho del Trabajo, celebrada entre el sindicato y la parte empresaria, que tiene fuerza de ley para la actividad."
  },
  {
    id: 182,
    question: "Considerando que 'Es una fuente propia del Derecho del Trabajo, celebrada entre el sindicato y la parte empresaria, que tiene fuerza de ley para la actividad.', ¿qué es una convención colectiva de trabajo?",
    options: [
      "Una ley sancionada por el Congreso",
      "Un pacto internacional",
      "Un contrato individual entre un empleador y su mejor empleado",
      "Un acuerdo celebrado entre una asociación sindical y representaciones empleadoras con eficacia vinculante"
    ],
    correctAnswerIndex: 3,
    explanation: "Es una fuente propia del Derecho del Trabajo, celebrada entre el sindicato y la parte empresaria, que tiene fuerza de ley para la actividad."
  },
  {
    id: 183,
    question: "En relación con el siguiente interrogante: ¿Qué característica tiene la 'capacidad de ejercicio' según el Código Civil y Comercial?, indique la respuesta correcta:",
    options: [
      "Es exclusiva de las personas jurídicas",
      "Es la aptitud de la persona humana para ejercer por sí misma sus derechos",
      "No puede limitarse por ninguna circunstancia",
      "Se adquiere de forma total e inmediata a los 16 años"
    ],
    correctAnswerIndex: 1,
    explanation: "El art. 23 CCyCN define la capacidad de ejercicio como la aptitud para ejercer por sí los derechos, sujeta a limitaciones por edad o salud mental."
  },
  {
    id: 184,
    question: "Considerando que 'El art. 23 CCyCN define la capacidad de ejercicio como la aptitud para ejercer por sí los derechos, sujeta a limitaciones por edad o salud mental.', ¿qué característica tiene la 'capacidad de ejercicio' según el código civil y comercial?",
    options: [
      "Es la aptitud de la persona humana para ejercer por sí misma sus derechos",
      "No puede limitarse por ninguna circunstancia",
      "Se adquiere de forma total e inmediata a los 16 años",
      "Es exclusiva de las personas jurídicas"
    ],
    correctAnswerIndex: 0,
    explanation: "El art. 23 CCyCN define la capacidad de ejercicio como la aptitud para ejercer por sí los derechos, sujeta a limitaciones por edad o salud mental."
  },
  {
    id: 185,
    question: "En relación con el siguiente interrogante: Según la Constitución de San Juan, ¿cuántos miembros tiene como mínimo la Corte de Justicia?, indique la respuesta correcta:",
    options: [
      "Cinco",
      "Siete",
      "Tres",
      "Nueve"
    ],
    correctAnswerIndex: 0,
    explanation: "El Art. 201 de la Constitución de San Juan establece que la Corte está integrada por cinco miembros como mínimo."
  },
  {
    id: 186,
    question: "Considerando que 'El Art. 201 de la Constitución de San Juan establece que la Corte está integrada por cinco miembros como mínimo.', según la constitución de san juan, ¿cuántos miembros tiene como mínimo la corte de justicia?",
    options: [
      "Tres",
      "Nueve",
      "Siete",
      "Cinco"
    ],
    correctAnswerIndex: 3,
    explanation: "El Art. 201 de la Constitución de San Juan establece que la Corte está integrada por cinco miembros como mínimo."
  },
  {
    id: 187,
    question: "En relación con el siguiente interrogante: ¿Cuáles son las condiciones para acceder a la Magistratura como Juez de Primera Instancia en San Juan?, indique la respuesta correcta:",
    options: [
      "Ser argentino, abogado, tener 10 años de ejercicio y 30 años de edad",
      "Ser argentino, abogado con 5 años de ejercicio y 25 años de edad",
      "Ser argentino nativo, abogado y tener 25 años",
      "Ser natural de la provincia y mayor de edad"
    ],
    correctAnswerIndex: 1,
    explanation: "El Art. 204 de la Constitución Provincial exige ser argentino, abogado con 5 años de ejercicio y 25 años de edad."
  },
  {
    id: 188,
    question: "Considerando que 'El Art. 204 de la Constitución Provincial exige ser argentino, abogado con 5 años de ejercicio y 25 años de edad.', ¿cuáles son las condiciones para acceder a la magistratura como juez de primera instancia en san juan?",
    options: [
      "Ser argentino, abogado, tener 10 años de ejercicio y 30 años de edad",
      "Ser argentino nativo, abogado y tener 25 años",
      "Ser argentino, abogado con 5 años de ejercicio y 25 años de edad",
      "Ser natural de la provincia y mayor de edad"
    ],
    correctAnswerIndex: 2,
    explanation: "El Art. 204 de la Constitución Provincial exige ser argentino, abogado con 5 años de ejercicio y 25 años de edad."
  },
  {
    id: 189,
    question: "En relación con el siguiente interrogante: En el procedimiento de flagrancia, ¿cuánto tiempo tiene la policía para notificar al fiscal tras la aprehensión?, indique la respuesta correcta:",
    options: [
      "En forma inmediata y sin dilación",
      "Dentro de las 72 horas",
      "Dentro de las 24 horas",
      "Dentro de los 5 días hábiles"
    ],
    correctAnswerIndex: 0,
    explanation: "El personal policial debe dar aviso en forma inmediata y sin dilación al fiscal de turno y poner al aprehendido a su disposición."
  },
  {
    id: 190,
    question: "Considerando que 'El personal policial debe dar aviso en forma inmediata y sin dilación al fiscal de turno y poner al aprehendido a su disposición.', en el procedimiento de flagrancia, ¿cuánto tiempo tiene la policía para notificar al fiscal tras la aprehensión?",
    options: [
      "Dentro de los 5 días hábiles",
      "Dentro de las 72 horas",
      "Dentro de las 24 horas",
      "En forma inmediata y sin dilación"
    ],
    correctAnswerIndex: 3,
    explanation: "El personal policial debe dar aviso en forma inmediata y sin dilación al fiscal de turno y poner al aprehendido a su disposición."
  },
  {
    id: 191,
    question: "En relación con el siguiente interrogante: ¿Qué figura actúa como garante de los intereses de personas menores de edad de forma principal o complementaria?, indique la respuesta correcta:",
    options: [
      "El Secretario del Juzgado",
      "El Defensor Oficial",
      "La Asesoría Oficial de Menores e Incapaces",
      "El Fiscal de Cámara"
    ],
    correctAnswerIndex: 2,
    explanation: "La Asesoría de Menores interviene de forma principal o complementaria para proteger y representar los intereses de NNA e incapaces."
  },
  {
    id: 192,
    question: "Considerando que 'La Asesoría de Menores interviene de forma principal o complementaria para proteger y representar los intereses de NNA e incapaces.', ¿qué figura actúa como garante de los intereses de personas menores de edad de forma principal o complementaria?",
    options: [
      "El Defensor Oficial",
      "El Secretario del Juzgado",
      "La Asesoría Oficial de Menores e Incapaces",
      "El Fiscal de Cámara"
    ],
    correctAnswerIndex: 2,
    explanation: "La Asesoría de Menores interviene de forma principal o complementaria para proteger y representar los intereses de NNA e incapaces."
  },
  {
    id: 193,
    question: "En relación con el siguiente interrogante: ¿Cuál de estos actos requiere el consentimiento expreso de AMBOS progenitores?, indique la respuesta correcta:",
    options: [
      "Decidir el menú diario",
      "Comprar ropa",
      "Llevar al hijo al parque",
      "Autorizar la salida de la República del menor"
    ],
    correctAnswerIndex: 3,
    explanation: "El Art. 645 del CCyCN exige consentimiento expreso de ambos progenitores para autorizar la salida del país del hijo menor, entre otros actos graves."
  },
  {
    id: 194,
    question: "Considerando que 'El Art. 645 del CCyCN exige consentimiento expreso de ambos progenitores para autorizar la salida del país del hijo menor, entre otros actos graves.', ¿cuál de estos actos requiere el consentimiento expreso de ambos progenitores?",
    options: [
      "Decidir el menú diario",
      "Llevar al hijo al parque",
      "Autorizar la salida de la República del menor",
      "Comprar ropa"
    ],
    correctAnswerIndex: 2,
    explanation: "El Art. 645 del CCyCN exige consentimiento expreso de ambos progenitores para autorizar la salida del país del hijo menor, entre otros actos graves."
  },
  {
    id: 195,
    question: "En relación con el siguiente interrogante: La indemnización por despido arbitrario es una manifestación de:, indique la respuesta correcta:",
    options: [
      "El derecho de asociación",
      "La protección contra el despido en la Constitución Nacional (Art. 14 bis)",
      "Un acuerdo puramente voluntario",
      "Una norma del código penal"
    ],
    correctAnswerIndex: 1,
    explanation: "El Art. 14 bis de la CN garantiza al trabajador protección contra el despido arbitrario."
  },
  {
    id: 196,
    question: "Considerando la siguiente premisa: 'El Art. 14 bis de la CN garantiza al trabajador protección contra el despido arbitrario.'. La indemnización por despido arbitrario es una manifestación de:",
    options: [
      "Un acuerdo puramente voluntario",
      "Una norma del código penal",
      "El derecho de asociación",
      "La protección contra el despido en la Constitución Nacional (Art. 14 bis)"
    ],
    correctAnswerIndex: 3,
    explanation: "El Art. 14 bis de la CN garantiza al trabajador protección contra el despido arbitrario."
  },
  {
    id: 197,
    question: "En relación con el siguiente interrogante: ¿Qué es el 'secreto profesional' en el marco de la prueba testimonial?, indique la respuesta correcta:",
    options: [
      "La facultad de los testigos de no asistir a declarar",
      "El derecho del juez a ocultar la prueba",
      "Una sanción económica",
      "La obligación legal de determinadas personas de no revelar hechos confidenciales conocidos en el ejercicio de su profesión"
    ],
    correctAnswerIndex: 3,
    explanation: "Ciertas profesiones (médicos, abogados) están protegidas y obligadas al secreto profesional y no pueden ser forzadas a testificar sobre esos hechos."
  },
  {
    id: 198,
    question: "Considerando que 'Ciertas profesiones (médicos, abogados) están protegidas y obligadas al secreto profesional y no pueden ser forzadas a testificar sobre esos hechos.', ¿qué es el 'secreto profesional' en el marco de la prueba testimonial?",
    options: [
      "El derecho del juez a ocultar la prueba",
      "La facultad de los testigos de no asistir a declarar",
      "La obligación legal de determinadas personas de no revelar hechos confidenciales conocidos en el ejercicio de su profesión",
      "Una sanción económica"
    ],
    correctAnswerIndex: 2,
    explanation: "Ciertas profesiones (médicos, abogados) están protegidas y obligadas al secreto profesional y no pueden ser forzadas a testificar sobre esos hechos."
  },
  {
    id: 199,
    question: "En relación con el siguiente interrogante: ¿Qué efecto tiene el 'sobreseimiento' en el proceso penal?, indique la respuesta correcta:",
    options: [
      "Agrava la condena",
      "Inicia la investigación preliminar",
      "Pone fin al proceso de forma definitiva y tiene fuerza de cosa juzgada material",
      "Suspende el juicio temporalmente"
    ],
    correctAnswerIndex: 2,
    explanation: "El sobreseimiento cierra el proceso de manera definitiva e irrevocable respecto del imputado a cuyo favor se dicta."
  },
  {
    id: 200,
    question: "Considerando que 'El sobreseimiento cierra el proceso de manera definitiva e irrevocable respecto del imputado a cuyo favor se dicta.', ¿qué efecto tiene el 'sobreseimiento' en el proceso penal?",
    options: [
      "Inicia la investigación preliminar",
      "Agrava la condena",
      "Suspende el juicio temporalmente",
      "Pone fin al proceso de forma definitiva y tiene fuerza de cosa juzgada material"
    ],
    correctAnswerIndex: 3,
    explanation: "El sobreseimiento cierra el proceso de manera definitiva e irrevocable respecto del imputado a cuyo favor se dicta."
  },
  {
    id: 201,
    question: "En relación con el siguiente interrogante: ¿Cuál es el máximo tribunal de la Provincia de San Juan?, indique la respuesta correcta:",
    options: [
      "El Juzgado de Paz.",
      "La Cámara de Apelaciones.",
      "La Corte de Justicia.",
      "El Tribunal Superior de Justicia."
    ],
    correctAnswerIndex: 2,
    explanation: "La Corte de Justicia."
  },
  {
    id: 202,
    question: "Considerando que 'La Corte de Justicia.', ¿cuál es el máximo tribunal de la provincia de san juan?",
    options: [
      "El Tribunal Superior de Justicia.",
      "La Cámara de Apelaciones.",
      "El Juzgado de Paz.",
      "La Corte de Justicia."
    ],
    correctAnswerIndex: 3,
    explanation: "La Corte de Justicia."
  },
  {
    id: 203,
    question: "En relación con el siguiente interrogante: ¿Quién ejerce el control de constitucionalidad en Argentina?, indique la respuesta correcta:",
    options: [
      "Todos los jueces (sistema difuso).",
      "El Presidente de la Nación.",
      "Solo la Corte Suprema.",
      "Solo el Poder Legislativo."
    ],
    correctAnswerIndex: 0,
    explanation: "Todos los jueces (sistema difuso)."
  },
  {
    id: 204,
    question: "Considerando que 'Todos los jueces (sistema difuso).', ¿quién ejerce el control de constitucionalidad en argentina?",
    options: [
      "Todos los jueces (sistema difuso).",
      "El Presidente de la Nación.",
      "Solo la Corte Suprema.",
      "Solo el Poder Legislativo."
    ],
    correctAnswerIndex: 0,
    explanation: "Todos los jueces (sistema difuso)."
  },
  {
    id: 205,
    question: "En relación con el siguiente interrogante: El Ministerio Público Fiscal de San Juan tiene como función principal:, indique la respuesta correcta:",
    options: [
      "Organizar las elecciones.",
      "Defender a los imputados sin recursos.",
      "Dictar sentencias definitivas.",
      "Promover la acción penal y defender la legalidad."
    ],
    correctAnswerIndex: 3,
    explanation: "Promover la acción penal y defender la legalidad."
  },
  {
    id: 206,
    question: "Considerando la siguiente premisa: 'Promover la acción penal y defender la legalidad.'. El Ministerio Público Fiscal de San Juan tiene como función principal:",
    options: [
      "Promover la acción penal y defender la legalidad.",
      "Organizar las elecciones.",
      "Dictar sentencias definitivas.",
      "Defender a los imputados sin recursos."
    ],
    correctAnswerIndex: 0,
    explanation: "Promover la acción penal y defender la legalidad."
  },
  {
    id: 207,
    question: "En relación con el siguiente interrogante: ¿Qué función cumple la Defensa Oficial?, indique la respuesta correcta:",
    options: [
      "Emitir leyes.",
      "Acusar a los delincuentes.",
      "Controlar el presupuesto judicial.",
      "Garantizar la defensa en juicio de quienes no pueden contratar un abogado particular."
    ],
    correctAnswerIndex: 3,
    explanation: "Garantizar la defensa en juicio de quienes no pueden contratar un abogado particular."
  },
  {
    id: 208,
    question: "Considerando que 'Garantizar la defensa en juicio de quienes no pueden contratar un abogado particular.', ¿qué función cumple la defensa oficial?",
    options: [
      "Garantizar la defensa en juicio de quienes no pueden contratar un abogado particular.",
      "Controlar el presupuesto judicial.",
      "Emitir leyes.",
      "Acusar a los delincuentes."
    ],
    correctAnswerIndex: 0,
    explanation: "Garantizar la defensa en juicio de quienes no pueden contratar un abogado particular."
  },
  {
    id: 209,
    question: "En relación con el siguiente interrogante: El Consejo de la Magistratura tiene a su cargo:, indique la respuesta correcta:",
    options: [
      "El dictado de fallos supremos.",
      "El control de los fiscales.",
      "La selección de los magistrados inferiores.",
      "La recaudación de impuestos."
    ],
    correctAnswerIndex: 2,
    explanation: "La selección de los magistrados inferiores."
  },
  {
    id: 210,
    question: "Considerando la siguiente premisa: 'La selección de los magistrados inferiores.'. El Consejo de la Magistratura tiene a su cargo:",
    options: [
      "La recaudación de impuestos.",
      "La selección de los magistrados inferiores.",
      "El control de los fiscales.",
      "El dictado de fallos supremos."
    ],
    correctAnswerIndex: 1,
    explanation: "La selección de los magistrados inferiores."
  },
  {
    id: 211,
    question: "En relación con el siguiente interrogante: El Jurado de Enjuiciamiento sirve para:, indique la respuesta correcta:",
    options: [
      "Juzgar el mal desempeño o delitos de magistrados inferiores.",
      "Nombrar al Gobernador.",
      "Juzgar a ciudadanos comunes.",
      "Designar jueces."
    ],
    correctAnswerIndex: 0,
    explanation: "Juzgar el mal desempeño o delitos de magistrados inferiores."
  },
  {
    id: 212,
    question: "Considerando la siguiente premisa: 'Juzgar el mal desempeño o delitos de magistrados inferiores.'. El Jurado de Enjuiciamiento sirve para:",
    options: [
      "Juzgar a ciudadanos comunes.",
      "Juzgar el mal desempeño o delitos de magistrados inferiores.",
      "Designar jueces.",
      "Nombrar al Gobernador."
    ],
    correctAnswerIndex: 1,
    explanation: "Juzgar el mal desempeño o delitos de magistrados inferiores."
  },
  {
    id: 213,
    question: "En relación con el siguiente interrogante: En el sistema acusatorio adversarial, la investigación penal preparatoria está a cargo de:, indique la respuesta correcta:",
    options: [
      "El Fiscal.",
      "El Juez de Garantías.",
      "El Defensor Oficial.",
      "El Juez de Instrucción."
    ],
    correctAnswerIndex: 0,
    explanation: "El Fiscal."
  },
  {
    id: 214,
    question: "Considerando la siguiente premisa: 'El Fiscal.'. En el sistema acusatorio adversarial, la investigación penal preparatoria está a cargo de:",
    options: [
      "El Juez de Instrucción.",
      "El Fiscal.",
      "El Defensor Oficial.",
      "El Juez de Garantías."
    ],
    correctAnswerIndex: 1,
    explanation: "El Fiscal."
  },
  {
    id: 215,
    question: "En relación con el siguiente interrogante: El Juez de Garantías en el sistema acusatorio tiene como rol:, indique la respuesta correcta:",
    options: [
      "Investigar los delitos.",
      "Buscar las pruebas de cargo.",
      "Defender al imputado.",
      "Controlar el respeto de los derechos y garantías constitucionales durante la investigación."
    ],
    correctAnswerIndex: 3,
    explanation: "Controlar el respeto de los derechos y garantías constitucionales durante la investigación."
  },
  {
    id: 216,
    question: "Considerando la siguiente premisa: 'Controlar el respeto de los derechos y garantías constitucionales durante la investigación.'. El Juez de Garantías en el sistema acusatorio tiene como rol:",
    options: [
      "Defender al imputado.",
      "Buscar las pruebas de cargo.",
      "Controlar el respeto de los derechos y garantías constitucionales durante la investigación.",
      "Investigar los delitos."
    ],
    correctAnswerIndex: 2,
    explanation: "Controlar el respeto de los derechos y garantías constitucionales durante la investigación."
  },
  {
    id: 217,
    question: "En relación con el siguiente interrogante: ¿Qué es el Procedimiento de Flagrancia?, indique la respuesta correcta:",
    options: [
      "Un recurso ante la Corte Suprema.",
      "Un procedimiento especial y expedito para quienes son sorprendidos cometiendo un delito.",
      "Una mediación laboral.",
      "Un juicio civil por deudas."
    ],
    correctAnswerIndex: 1,
    explanation: "Un procedimiento especial y expedito para quienes son sorprendidos cometiendo un delito."
  },
  {
    id: 218,
    question: "Considerando que 'Un procedimiento especial y expedito para quienes son sorprendidos cometiendo un delito.', ¿qué es el procedimiento de flagrancia?",
    options: [
      "Un procedimiento especial y expedito para quienes son sorprendidos cometiendo un delito.",
      "Un juicio civil por deudas.",
      "Un recurso ante la Corte Suprema.",
      "Una mediación laboral."
    ],
    correctAnswerIndex: 0,
    explanation: "Un procedimiento especial y expedito para quienes son sorprendidos cometiendo un delito."
  },
  {
    id: 219,
    question: "En relación con el siguiente interrogante: El principio de inocencia implica que:, indique la respuesta correcta:",
    options: [
      "Todos son culpables si hay sospecha.",
      "Toda persona se presume inocente hasta que una sentencia firme demuestre lo contrario.",
      "Nadie puede ir a la cárcel.",
      "El acusado debe demostrar su inocencia."
    ],
    correctAnswerIndex: 1,
    explanation: "Toda persona se presume inocente hasta que una sentencia firme demuestre lo contrario."
  },
  {
    id: 220,
    question: "Considerando la siguiente premisa: 'Toda persona se presume inocente hasta que una sentencia firme demuestre lo contrario.'. El principio de inocencia implica que:",
    options: [
      "Toda persona se presume inocente hasta que una sentencia firme demuestre lo contrario.",
      "Nadie puede ir a la cárcel.",
      "El acusado debe demostrar su inocencia.",
      "Todos son culpables si hay sospecha."
    ],
    correctAnswerIndex: 0,
    explanation: "Toda persona se presume inocente hasta que una sentencia firme demuestre lo contrario."
  },
  {
    id: 221,
    question: "En relación con el siguiente interrogante: El 'Habeas Corpus' procede ante:, indique la respuesta correcta:",
    options: [
      "Privaciones o amenazas ilegítimas a la libertad física.",
      "Violaciones al derecho de propiedad.",
      "Despidos sin causa.",
      "Deudas comerciales."
    ],
    correctAnswerIndex: 0,
    explanation: "Privaciones o amenazas ilegítimas a la libertad física."
  },
  {
    id: 222,
    question: "Considerando la siguiente premisa: 'Privaciones o amenazas ilegítimas a la libertad física.'. El 'Habeas Corpus' procede ante:",
    options: [
      "Privaciones o amenazas ilegítimas a la libertad física.",
      "Despidos sin causa.",
      "Deudas comerciales.",
      "Violaciones al derecho de propiedad."
    ],
    correctAnswerIndex: 0,
    explanation: "Privaciones o amenazas ilegítimas a la libertad física."
  },
  {
    id: 223,
    question: "En relación con el siguiente interrogante: El principio de legalidad penal ('nullum crimen nulla poena sine lege') significa que:, indique la respuesta correcta:",
    options: [
      "El Código Penal no rige en las provincias.",
      "Los jueces pueden crear delitos.",
      "La ley penal es retroactiva.",
      "No hay delito ni pena sin ley previa."
    ],
    correctAnswerIndex: 3,
    explanation: "No hay delito ni pena sin ley previa."
  },
  {
    id: 224,
    question: "Considerando la siguiente premisa: 'No hay delito ni pena sin ley previa.'. El principio de legalidad penal ('nullum crimen nulla poena sine lege') significa que:",
    options: [
      "La ley penal es retroactiva.",
      "El Código Penal no rige en las provincias.",
      "No hay delito ni pena sin ley previa.",
      "Los jueces pueden crear delitos."
    ],
    correctAnswerIndex: 2,
    explanation: "No hay delito ni pena sin ley previa."
  },
  {
    id: 225,
    question: "En relación con el siguiente interrogante: ¿Cuándo comienza la existencia de la persona humana según el CCyC?, indique la respuesta correcta:",
    options: [
      "A los 18 años.",
      "Desde el nacimiento.",
      "Desde que se la inscribe en el Registro Civil.",
      "Desde la concepción."
    ],
    correctAnswerIndex: 3,
    explanation: "Desde la concepción."
  },
  {
    id: 226,
    question: "Considerando que 'Desde la concepción.', ¿cuándo comienza la existencia de la persona humana según el ccyc?",
    options: [
      "A los 18 años.",
      "Desde la concepción.",
      "Desde que se la inscribe en el Registro Civil.",
      "Desde el nacimiento."
    ],
    correctAnswerIndex: 1,
    explanation: "Desde la concepción."
  },
  {
    id: 227,
    question: "En relación con el siguiente interrogante: ¿Cuáles son atributos de la personalidad?, indique la respuesta correcta:",
    options: [
      "Patrimonio, deudas, profesión y residencia.",
      "Nombre, capacidad, domicilio y estado.",
      "Nacionalidad, religión y afiliación política.",
      "Sexo, edad, peso y altura."
    ],
    correctAnswerIndex: 1,
    explanation: "Nombre, capacidad, domicilio y estado."
  },
  {
    id: 228,
    question: "Considerando que 'Nombre, capacidad, domicilio y estado.', ¿cuáles son atributos de la personalidad?",
    options: [
      "Nombre, capacidad, domicilio y estado.",
      "Nacionalidad, religión y afiliación política.",
      "Sexo, edad, peso y altura.",
      "Patrimonio, deudas, profesión y residencia."
    ],
    correctAnswerIndex: 0,
    explanation: "Nombre, capacidad, domicilio y estado."
  },
  {
    id: 229,
    question: "En relación con el siguiente interrogante: El divorcio vincular en el régimen actual argentino:, indique la respuesta correcta:",
    options: [
      "Requiere que pasen 3 años de separación.",
      "Es irrevocable.",
      "Puede ser solicitado por uno o ambos cónyuges sin invocar causa.",
      "Solo procede por adulterio o injurias graves."
    ],
    correctAnswerIndex: 2,
    explanation: "Puede ser solicitado por uno o ambos cónyuges sin invocar causa."
  },
  {
    id: 230,
    question: "Considerando la siguiente premisa: 'Puede ser solicitado por uno o ambos cónyuges sin invocar causa.'. El divorcio vincular en el régimen actual argentino:",
    options: [
      "Es irrevocable.",
      "Requiere que pasen 3 años de separación.",
      "Puede ser solicitado por uno o ambos cónyuges sin invocar causa.",
      "Solo procede por adulterio o injurias graves."
    ],
    correctAnswerIndex: 2,
    explanation: "Puede ser solicitado por uno o ambos cónyuges sin invocar causa."
  },
  {
    id: 231,
    question: "En relación con el siguiente interrogante: ¿Qué es la Responsabilidad Parental?, indique la respuesta correcta:",
    options: [
      "La obligación del Estado de mantener a los niños.",
      "El conjunto de deberes y derechos de los progenitores sobre la persona y bienes del hijo.",
      "La patria potestad exclusiva del padre.",
      "El deber de los abuelos de cuidar a los nietos."
    ],
    correctAnswerIndex: 1,
    explanation: "El conjunto de deberes y derechos de los progenitores sobre la persona y bienes del hijo."
  },
  {
    id: 232,
    question: "Considerando que 'El conjunto de deberes y derechos de los progenitores sobre la persona y bienes del hijo.', ¿qué es la responsabilidad parental?",
    options: [
      "La patria potestad exclusiva del padre.",
      "El conjunto de deberes y derechos de los progenitores sobre la persona y bienes del hijo.",
      "El deber de los abuelos de cuidar a los nietos.",
      "La obligación del Estado de mantener a los niños."
    ],
    correctAnswerIndex: 1,
    explanation: "El conjunto de deberes y derechos de los progenitores sobre la persona y bienes del hijo."
  },
  {
    id: 233,
    question: "En relación con el siguiente interrogante: Las uniones convivenciales producen:, indique la respuesta correcta:",
    options: [
      "Efectos jurídicos si cumplen los requisitos legales (como convivencia pública, notoria y estable).",
      "Los mismos derechos hereditarios que el matrimonio.",
      "La división de bienes en partes iguales a los 6 meses.",
      "Ningún efecto legal."
    ],
    correctAnswerIndex: 0,
    explanation: "Efectos jurídicos si cumplen los requisitos legales (como convivencia pública, notoria y estable)."
  },
  {
    id: 234,
    question: "Considerando la siguiente premisa: 'Efectos jurídicos si cumplen los requisitos legales (como convivencia pública, notoria y estable).'. Las uniones convivenciales producen:",
    options: [
      "Ningún efecto legal.",
      "Los mismos derechos hereditarios que el matrimonio.",
      "Efectos jurídicos si cumplen los requisitos legales (como convivencia pública, notoria y estable).",
      "La división de bienes en partes iguales a los 6 meses."
    ],
    correctAnswerIndex: 2,
    explanation: "Efectos jurídicos si cumplen los requisitos legales (como convivencia pública, notoria y estable)."
  },
  {
    id: 235,
    question: "En relación con el siguiente interrogante: El proceso de familia se caracteriza por ser:, indique la respuesta correcta:",
    options: [
      "Unilateral y secreto.",
      "Inquisitivo y demorado.",
      "Estrictamente escrito y público.",
      "Interdisciplinario y enfocado en la pacificación del conflicto."
    ],
    correctAnswerIndex: 3,
    explanation: "Interdisciplinario y enfocado en la pacificación del conflicto."
  },
  {
    id: 236,
    question: "Considerando la siguiente premisa: 'Interdisciplinario y enfocado en la pacificación del conflicto.'. El proceso de familia se caracteriza por ser:",
    options: [
      "Unilateral y secreto.",
      "Interdisciplinario y enfocado en la pacificación del conflicto.",
      "Estrictamente escrito y público.",
      "Inquisitivo y demorado."
    ],
    correctAnswerIndex: 1,
    explanation: "Interdisciplinario y enfocado en la pacificación del conflicto."
  },
  {
    id: 237,
    question: "En relación con el siguiente interrogante: El principio 'in dubio pro operario' significa que:, indique la respuesta correcta:",
    options: [
      "El empleador no debe probar nada.",
      "El trabajador siempre tiene la razón en los hechos.",
      "En caso de duda, se favorece al empleador.",
      "En caso de duda sobre la interpretación de una norma, se aplica la más favorable al trabajador."
    ],
    correctAnswerIndex: 3,
    explanation: "En caso de duda sobre la interpretación de una norma, se aplica la más favorable al trabajador."
  },
  {
    id: 238,
    question: "Considerando la siguiente premisa: 'En caso de duda sobre la interpretación de una norma, se aplica la más favorable al trabajador.'. El principio 'in dubio pro operario' significa que:",
    options: [
      "En caso de duda sobre la interpretación de una norma, se aplica la más favorable al trabajador.",
      "El empleador no debe probar nada.",
      "El trabajador siempre tiene la razón en los hechos.",
      "En caso de duda, se favorece al empleador."
    ],
    correctAnswerIndex: 0,
    explanation: "En caso de duda sobre la interpretación de una norma, se aplica la más favorable al trabajador."
  },
  {
    id: 239,
    question: "En relación con el siguiente interrogante: El contrato de trabajo se presume celebrado:, indique la respuesta correcta:",
    options: [
      "Por tiempo indeterminado.",
      "A plazo fijo por 6 meses.",
      "Por temporada.",
      "Como trabajo eventual."
    ],
    correctAnswerIndex: 0,
    explanation: "Por tiempo indeterminado."
  },
  {
    id: 240,
    question: "Considerando la siguiente premisa: 'Por tiempo indeterminado.'. El contrato de trabajo se presume celebrado:",
    options: [
      "Por tiempo indeterminado.",
      "Como trabajo eventual.",
      "A plazo fijo por 6 meses.",
      "Por temporada."
    ],
    correctAnswerIndex: 0,
    explanation: "Por tiempo indeterminado."
  },
  {
    id: 241,
    question: "En relación con el siguiente interrogante: ¿Qué es el principio de irrenunciabilidad?, indique la respuesta correcta:",
    options: [
      "La imposibilidad jurídica de privarse voluntariamente de las ventajas concedidas por el derecho laboral.",
      "La obligación de aceptar cualquier salario.",
      "El empleador no puede renunciar a la empresa.",
      "El derecho a no renunciar al empleo."
    ],
    correctAnswerIndex: 0,
    explanation: "La imposibilidad jurídica de privarse voluntariamente de las ventajas concedidas por el derecho laboral."
  },
  {
    id: 242,
    question: "Considerando que 'La imposibilidad jurídica de privarse voluntariamente de las ventajas concedidas por el derecho laboral.', ¿qué es el principio de irrenunciabilidad?",
    options: [
      "La obligación de aceptar cualquier salario.",
      "El derecho a no renunciar al empleo.",
      "La imposibilidad jurídica de privarse voluntariamente de las ventajas concedidas por el derecho laboral.",
      "El empleador no puede renunciar a la empresa."
    ],
    correctAnswerIndex: 2,
    explanation: "La imposibilidad jurídica de privarse voluntariamente de las ventajas concedidas por el derecho laboral."
  },
  {
    id: 243,
    question: "En relación con el siguiente interrogante: En el proceso laboral sanjuanino rige el principio de:, indique la respuesta correcta:",
    options: [
      "Secreto de actuaciones.",
      "Mediación penal.",
      "Gratuidad para el trabajador.",
      "Pago previo de costas."
    ],
    correctAnswerIndex: 2,
    explanation: "Gratuidad para el trabajador."
  },
  {
    id: 244,
    question: "Considerando la siguiente premisa: 'Gratuidad para el trabajador.'. En el proceso laboral sanjuanino rige el principio de:",
    options: [
      "Mediación penal.",
      "Secreto de actuaciones.",
      "Pago previo de costas.",
      "Gratuidad para el trabajador."
    ],
    correctAnswerIndex: 3,
    explanation: "Gratuidad para el trabajador."
  },
  {
    id: 245,
    question: "En relación con el siguiente interrogante: La Ley 26.485 protege contra:, indique la respuesta correcta:",
    options: [
      "La violencia contra las mujeres en los ámbitos en que desarrollen sus relaciones interpersonales.",
      "La violencia deportiva.",
      "Los conflictos vecinales.",
      "El acoso escolar exclusivamente."
    ],
    correctAnswerIndex: 0,
    explanation: "La violencia contra las mujeres en los ámbitos en que desarrollen sus relaciones interpersonales."
  },
  {
    id: 246,
    question: "Considerando la siguiente premisa: 'La violencia contra las mujeres en los ámbitos en que desarrollen sus relaciones interpersonales.'. La Ley 26.485 protege contra:",
    options: [
      "Los conflictos vecinales.",
      "La violencia deportiva.",
      "La violencia contra las mujeres en los ámbitos en que desarrollen sus relaciones interpersonales.",
      "El acoso escolar exclusivamente."
    ],
    correctAnswerIndex: 2,
    explanation: "La violencia contra las mujeres en los ámbitos en que desarrollen sus relaciones interpersonales."
  },
  {
    id: 247,
    question: "En relación con el siguiente interrogante: ¿Qué es la violencia psicológica según la Ley 26.485?, indique la respuesta correcta:",
    options: [
      "La que causa daño emocional, disminución de la autoestima o perjudica el desarrollo personal.",
      "Los golpes o maltrato físico.",
      "El daño al patrimonio de la víctima.",
      "La desigualdad salarial."
    ],
    correctAnswerIndex: 0,
    explanation: "La que causa daño emocional, disminución de la autoestima o perjudica el desarrollo personal."
  },
  {
    id: 248,
    question: "Considerando que 'La que causa daño emocional, disminución de la autoestima o perjudica el desarrollo personal.', ¿qué es la violencia psicológica según la ley 26.485?",
    options: [
      "La desigualdad salarial.",
      "Los golpes o maltrato físico.",
      "El daño al patrimonio de la víctima.",
      "La que causa daño emocional, disminución de la autoestima o perjudica el desarrollo personal."
    ],
    correctAnswerIndex: 3,
    explanation: "La que causa daño emocional, disminución de la autoestima o perjudica el desarrollo personal."
  },
  {
    id: 249,
    question: "En relación con el siguiente interrogante: La Convención de Belém do Pará refiere a:, indique la respuesta correcta:",
    options: [
      "El derecho del mar.",
      "La regulación de los tratados de paz.",
      "El comercio internacional.",
      "La prevención, sanción y erradicación de la violencia contra la mujer."
    ],
    correctAnswerIndex: 3,
    explanation: "La prevención, sanción y erradicación de la violencia contra la mujer."
  },
  {
    id: 250,
    question: "Considerando la siguiente premisa: 'La prevención, sanción y erradicación de la violencia contra la mujer.'. La Convención de Belém do Pará refiere a:",
    options: [
      "La prevención, sanción y erradicación de la violencia contra la mujer.",
      "La regulación de los tratados de paz.",
      "El derecho del mar.",
      "El comercio internacional."
    ],
    correctAnswerIndex: 0,
    explanation: "La prevención, sanción y erradicación de la violencia contra la mujer."
  },
  {
    id: 251,
    question: "En relación con el siguiente interrogante: En casos de violencia familiar, los jueces pueden ordenar:, indique la respuesta correcta:",
    options: [
      "Medidas cautelares urgentes de protección (ej: exclusión del hogar, restricción de acercamiento).",
      "El despido laboral del agresor.",
      "El pago de una multa a la provincia.",
      "Prisión perpetua automática."
    ],
    correctAnswerIndex: 0,
    explanation: "Medidas cautelares urgentes de protección (ej: exclusión del hogar, restricción de acercamiento)."
  },
  {
    id: 252,
    question: "Considerando la siguiente premisa: 'Medidas cautelares urgentes de protección (ej: exclusión del hogar, restricción de acercamiento).'. En casos de violencia familiar, los jueces pueden ordenar:",
    options: [
      "Prisión perpetua automática.",
      "Medidas cautelares urgentes de protección (ej: exclusión del hogar, restricción de acercamiento).",
      "El pago de una multa a la provincia.",
      "El despido laboral del agresor."
    ],
    correctAnswerIndex: 1,
    explanation: "Medidas cautelares urgentes de protección (ej: exclusión del hogar, restricción de acercamiento)."
  },
  {
    id: 253,
    question: "En relación con el siguiente interrogante: ¿Qué es la jurisdicción?, indique la respuesta correcta:",
    options: [
      "El poder de cobrar impuestos.",
      "La división de provincias.",
      "La zona donde actúa la policía.",
      "La potestad del Estado para administrar justicia y resolver conflictos."
    ],
    correctAnswerIndex: 3,
    explanation: "La potestad del Estado para administrar justicia y resolver conflictos."
  },
  {
    id: 254,
    question: "Considerando que 'La potestad del Estado para administrar justicia y resolver conflictos.', ¿qué es la jurisdicción?",
    options: [
      "La potestad del Estado para administrar justicia y resolver conflictos.",
      "El poder de cobrar impuestos.",
      "La división de provincias.",
      "La zona donde actúa la policía."
    ],
    correctAnswerIndex: 0,
    explanation: "La potestad del Estado para administrar justicia y resolver conflictos."
  },
  {
    id: 255,
    question: "En relación con el siguiente interrogante: ¿Qué es la competencia?, indique la respuesta correcta:",
    options: [
      "El horario de tribunales.",
      "La rivalidad entre abogados.",
      "La habilidad del juez para fallar.",
      "El límite o medida de la jurisdicción (por territorio, materia, grado)."
    ],
    correctAnswerIndex: 3,
    explanation: "El límite o medida de la jurisdicción (por territorio, materia, grado)."
  },
  {
    id: 256,
    question: "Considerando que 'El límite o medida de la jurisdicción (por territorio, materia, grado).', ¿qué es la competencia?",
    options: [
      "El horario de tribunales.",
      "La habilidad del juez para fallar.",
      "El límite o medida de la jurisdicción (por territorio, materia, grado).",
      "La rivalidad entre abogados."
    ],
    correctAnswerIndex: 2,
    explanation: "El límite o medida de la jurisdicción (por territorio, materia, grado)."
  },
  {
    id: 257,
    question: "En relación con el siguiente interrogante: Un acto jurídico es:, indique la respuesta correcta:",
    options: [
      "Cualquier hecho humano.",
      "Un acto voluntario lícito que tiene por fin inmediato producir efectos jurídicos.",
      "Un delito penado por la ley.",
      "Un acontecimiento de la naturaleza."
    ],
    correctAnswerIndex: 1,
    explanation: "Un acto voluntario lícito que tiene por fin inmediato producir efectos jurídicos."
  },
  {
    id: 258,
    question: "Considerando la siguiente premisa: 'Un acto voluntario lícito que tiene por fin inmediato producir efectos jurídicos.'. Un acto jurídico es:",
    options: [
      "Un acontecimiento de la naturaleza.",
      "Cualquier hecho humano.",
      "Un delito penado por la ley.",
      "Un acto voluntario lícito que tiene por fin inmediato producir efectos jurídicos."
    ],
    correctAnswerIndex: 3,
    explanation: "Un acto voluntario lícito que tiene por fin inmediato producir efectos jurídicos."
  },
  {
    id: 259,
    question: "En relación con el siguiente interrogante: La preclusión procesal significa:, indique la respuesta correcta:",
    options: [
      "Que el juicio comienza.",
      "Que el juicio es gratis.",
      "Que el juez dicte sentencia.",
      "La pérdida de una facultad procesal por haber transcurrido el plazo para ejercerla."
    ],
    correctAnswerIndex: 3,
    explanation: "La pérdida de una facultad procesal por haber transcurrido el plazo para ejercerla."
  },
  {
    id: 260,
    question: "Considerando la siguiente premisa: 'La pérdida de una facultad procesal por haber transcurrido el plazo para ejercerla.'. La preclusión procesal significa:",
    options: [
      "Que el juez dicte sentencia.",
      "La pérdida de una facultad procesal por haber transcurrido el plazo para ejercerla.",
      "Que el juicio es gratis.",
      "Que el juicio comienza."
    ],
    correctAnswerIndex: 1,
    explanation: "La pérdida de una facultad procesal por haber transcurrido el plazo para ejercerla."
  },
  {
    id: 261,
    question: "En relación con el siguiente interrogante: ¿Cuáles son los niveles de gobierno en el Estado Federal Argentino?, indique la respuesta correcta:",
    options: [
      "Nacional, Provincial, Municipal y CABA.",
      "Nacional y Provincial únicamente.",
      "Nacional, Mercosur y ONU.",
      "Provincial y Departamental."
    ],
    correctAnswerIndex: 0,
    explanation: "Nacional, Provincial, Municipal y CABA."
  },
  {
    id: 262,
    question: "Considerando que 'Nacional, Provincial, Municipal y CABA.', ¿cuáles son los niveles de gobierno en el estado federal argentino?",
    options: [
      "Nacional, Provincial, Municipal y CABA.",
      "Provincial y Departamental.",
      "Nacional, Mercosur y ONU.",
      "Nacional y Provincial únicamente."
    ],
    correctAnswerIndex: 0,
    explanation: "Nacional, Provincial, Municipal y CABA."
  },
  {
    id: 263,
    question: "En relación con el siguiente interrogante: Los Tratados de Derechos Humanos con jerarquía constitucional:, indique la respuesta correcta:",
    options: [
      "Están por debajo de las leyes nacionales.",
      "Tienen la misma jerarquía que la Constitución.",
      "Solo aplican si una ley los reglamenta.",
      "Son superiores a la Constitución."
    ],
    correctAnswerIndex: 1,
    explanation: "Tienen la misma jerarquía que la Constitución."
  },
  {
    id: 264,
    question: "Considerando la siguiente premisa: 'Tienen la misma jerarquía que la Constitución.'. Los Tratados de Derechos Humanos con jerarquía constitucional:",
    options: [
      "Solo aplican si una ley los reglamenta.",
      "Están por debajo de las leyes nacionales.",
      "Tienen la misma jerarquía que la Constitución.",
      "Son superiores a la Constitución."
    ],
    correctAnswerIndex: 2,
    explanation: "Tienen la misma jerarquía que la Constitución."
  },
  {
    id: 265,
    question: "En relación con el siguiente interrogante: El amparo es la acción para proteger:, indique la respuesta correcta:",
    options: [
      "Únicamente derechos patrimoniales.",
      "El derecho a cobrar una herencia.",
      "La libertad física exclusivamente.",
      "Derechos constitucionales lesionados de manera manifiesta y arbitraria (que no sean la libertad física)."
    ],
    correctAnswerIndex: 3,
    explanation: "Derechos constitucionales lesionados de manera manifiesta y arbitraria (que no sean la libertad física)."
  },
  {
    id: 266,
    question: "Considerando la siguiente premisa: 'Derechos constitucionales lesionados de manera manifiesta y arbitraria (que no sean la libertad física).'. El amparo es la acción para proteger:",
    options: [
      "Únicamente derechos patrimoniales.",
      "La libertad física exclusivamente.",
      "El derecho a cobrar una herencia.",
      "Derechos constitucionales lesionados de manera manifiesta y arbitraria (que no sean la libertad física)."
    ],
    correctAnswerIndex: 3,
    explanation: "Derechos constitucionales lesionados de manera manifiesta y arbitraria (que no sean la libertad física)."
  },
  {
    id: 267,
    question: "En relación con el siguiente interrogante: ¿Qué principio rige la prueba en el sistema acusatorio?, indique la respuesta correcta:",
    options: [
      "El Juez debe conseguir las pruebas.",
      "La carga de la prueba le corresponde a la Fiscalía (quien acusa).",
      "Las pruebas se presumen verdaderas sin demostración.",
      "La carga es del imputado (debe probar su inocencia)."
    ],
    correctAnswerIndex: 1,
    explanation: "La carga de la prueba le corresponde a la Fiscalía (quien acusa)."
  },
  {
    id: 268,
    question: "Considerando que 'La carga de la prueba le corresponde a la Fiscalía (quien acusa).', ¿qué principio rige la prueba en el sistema acusatorio?",
    options: [
      "Las pruebas se presumen verdaderas sin demostración.",
      "La carga es del imputado (debe probar su inocencia).",
      "La carga de la prueba le corresponde a la Fiscalía (quien acusa).",
      "El Juez debe conseguir las pruebas."
    ],
    correctAnswerIndex: 2,
    explanation: "La carga de la prueba le corresponde a la Fiscalía (quien acusa)."
  },
  {
    id: 269,
    question: "En relación con el siguiente interrogante: ¿Qué es la cosa juzgada?, indique la respuesta correcta:",
    options: [
      "El inicio de una causa judicial.",
      "El atributo de la sentencia definitiva contra la cual no proceden más recursos.",
      "Cuando un objeto ha sido embargado.",
      "Cuando el juez opina sobre un tema antes del juicio."
    ],
    correctAnswerIndex: 1,
    explanation: "El atributo de la sentencia definitiva contra la cual no proceden más recursos."
  },
  {
    id: 270,
    question: "Considerando que 'El atributo de la sentencia definitiva contra la cual no proceden más recursos.', ¿qué es la cosa juzgada?",
    options: [
      "El atributo de la sentencia definitiva contra la cual no proceden más recursos.",
      "Cuando el juez opina sobre un tema antes del juicio.",
      "El inicio de una causa judicial.",
      "Cuando un objeto ha sido embargado."
    ],
    correctAnswerIndex: 0,
    explanation: "El atributo de la sentencia definitiva contra la cual no proceden más recursos."
  },
  {
    id: 271,
    question: "En relación con el siguiente interrogante: En el Derecho de Familia, el Interés Superior del Niño implica:, indique la respuesta correcta:",
    options: [
      "Que el niño siempre se queda con la madre.",
      "Que las decisiones deben priorizar el máximo bienestar y los derechos del menor de edad.",
      "Que el niño manda sobre sus padres.",
      "Que los abuelos deciden por el niño."
    ],
    correctAnswerIndex: 1,
    explanation: "Que las decisiones deben priorizar el máximo bienestar y los derechos del menor de edad."
  },
  {
    id: 272,
    question: "Considerando la siguiente premisa: 'Que las decisiones deben priorizar el máximo bienestar y los derechos del menor de edad.'. En el Derecho de Familia, el Interés Superior del Niño implica:",
    options: [
      "Que el niño manda sobre sus padres.",
      "Que las decisiones deben priorizar el máximo bienestar y los derechos del menor de edad.",
      "Que el niño siempre se queda con la madre.",
      "Que los abuelos deciden por el niño."
    ],
    correctAnswerIndex: 1,
    explanation: "Que las decisiones deben priorizar el máximo bienestar y los derechos del menor de edad."
  },
  {
    id: 273,
    question: "En relación con el siguiente interrogante: La acción de amparo por mora procede:, indique la respuesta correcta:",
    options: [
      "Cuando un deudor moroso no paga la cuota alimentaria.",
      "Contra un juez por demorar la sentencia.",
      "Ante la falta de pago de un pagaré.",
      "Ante la demora injustificada de la Administración Pública en dictar una resolución."
    ],
    correctAnswerIndex: 3,
    explanation: "Ante la demora injustificada de la Administración Pública en dictar una resolución."
  },
  {
    id: 274,
    question: "Considerando la siguiente premisa: 'Ante la demora injustificada de la Administración Pública en dictar una resolución.'. La acción de amparo por mora procede:",
    options: [
      "Ante la falta de pago de un pagaré.",
      "Contra un juez por demorar la sentencia.",
      "Ante la demora injustificada de la Administración Pública en dictar una resolución.",
      "Cuando un deudor moroso no paga la cuota alimentaria."
    ],
    correctAnswerIndex: 2,
    explanation: "Ante la demora injustificada de la Administración Pública en dictar una resolución."
  },
  {
    id: 275,
    question: "En relación con el siguiente interrogante: El Secreto de Sumario en la instrucción mixta sirve para:, indique la respuesta correcta:",
    options: [
      "Impedir que se conozcan los actos procesales para no frustrar la investigación.",
      "Proteger los secretos comerciales.",
      "Proteger la identidad del juez.",
      "Ocultar el fallo al público."
    ],
    correctAnswerIndex: 0,
    explanation: "Impedir que se conozcan los actos procesales para no frustrar la investigación."
  },
  {
    id: 276,
    question: "Considerando la siguiente premisa: 'Impedir que se conozcan los actos procesales para no frustrar la investigación.'. El Secreto de Sumario en la instrucción mixta sirve para:",
    options: [
      "Impedir que se conozcan los actos procesales para no frustrar la investigación.",
      "Ocultar el fallo al público.",
      "Proteger la identidad del juez.",
      "Proteger los secretos comerciales."
    ],
    correctAnswerIndex: 0,
    explanation: "Impedir que se conozcan los actos procesales para no frustrar la investigación."
  },
  {
    id: 277,
    question: "En relación con el siguiente interrogante: El trabajo en relación de dependencia se caracteriza por:, indique la respuesta correcta:",
    options: [
      "El trabajo autónomo e independiente.",
      "El trabajo voluntario ad honorem.",
      "La subordinación jurídica, técnica y económica del trabajador.",
      "El trabajo societario de riesgo compartido."
    ],
    correctAnswerIndex: 2,
    explanation: "La subordinación jurídica, técnica y económica del trabajador."
  },
  {
    id: 278,
    question: "Considerando la siguiente premisa: 'La subordinación jurídica, técnica y económica del trabajador.'. El trabajo en relación de dependencia se caracteriza por:",
    options: [
      "La subordinación jurídica, técnica y económica del trabajador.",
      "El trabajo autónomo e independiente.",
      "El trabajo voluntario ad honorem.",
      "El trabajo societario de riesgo compartido."
    ],
    correctAnswerIndex: 0,
    explanation: "La subordinación jurídica, técnica y económica del trabajador."
  },
  {
    id: 279,
    question: "En relación con el siguiente interrogante: Las Garantías Constitucionales son:, indique la respuesta correcta:",
    options: [
      "Los mecanismos jurídicos que protegen los derechos reconocidos en la Constitución.",
      "Los deberes de los ciudadanos.",
      "Los castigos para los delincuentes.",
      "Declaraciones políticas sin fuerza de ley."
    ],
    correctAnswerIndex: 0,
    explanation: "Los mecanismos jurídicos que protegen los derechos reconocidos en la Constitución."
  },
  {
    id: 280,
    question: "Considerando la siguiente premisa: 'Los mecanismos jurídicos que protegen los derechos reconocidos en la Constitución.'. Las Garantías Constitucionales son:",
    options: [
      "Los deberes de los ciudadanos.",
      "Los mecanismos jurídicos que protegen los derechos reconocidos en la Constitución.",
      "Declaraciones políticas sin fuerza de ley.",
      "Los castigos para los delincuentes."
    ],
    correctAnswerIndex: 1,
    explanation: "Los mecanismos jurídicos que protegen los derechos reconocidos en la Constitución."
  },
  {
    id: 281,
    question: "En relación con el siguiente interrogante: El principio 'non bis in idem' significa:, indique la respuesta correcta:",
    options: [
      "Que no se pueden pagar dos impuestos iguales.",
      "Que los jueces deben ser dos por causa.",
      "Que nadie puede ser perseguido penalmente dos veces por el mismo hecho.",
      "Que nadie puede ir preso sin abogado."
    ],
    correctAnswerIndex: 2,
    explanation: "Que nadie puede ser perseguido penalmente dos veces por el mismo hecho."
  },
  {
    id: 282,
    question: "Considerando la siguiente premisa: 'Que nadie puede ser perseguido penalmente dos veces por el mismo hecho.'. El principio 'non bis in idem' significa:",
    options: [
      "Que los jueces deben ser dos por causa.",
      "Que nadie puede ser perseguido penalmente dos veces por el mismo hecho.",
      "Que nadie puede ir preso sin abogado.",
      "Que no se pueden pagar dos impuestos iguales."
    ],
    correctAnswerIndex: 1,
    explanation: "Que nadie puede ser perseguido penalmente dos veces por el mismo hecho."
  },
  {
    id: 283,
    question: "En relación con el siguiente interrogante: La igualdad ante la ley (Art. 16 CN) implica que:, indique la respuesta correcta:",
    options: [
      "No hay distinciones por edad para ningún acto.",
      "Se debe tratar igual a los iguales en igualdad de circunstancias.",
      "Se eliminan las jerarquías en el empleo público.",
      "Todos los ciudadanos deben cobrar el mismo sueldo."
    ],
    correctAnswerIndex: 1,
    explanation: "Se debe tratar igual a los iguales en igualdad de circunstancias."
  },
  {
    id: 284,
    question: "Considerando la siguiente premisa: 'Se debe tratar igual a los iguales en igualdad de circunstancias.'. La igualdad ante la ley (Art. 16 CN) implica que:",
    options: [
      "No hay distinciones por edad para ningún acto.",
      "Se eliminan las jerarquías en el empleo público.",
      "Se debe tratar igual a los iguales en igualdad de circunstancias.",
      "Todos los ciudadanos deben cobrar el mismo sueldo."
    ],
    correctAnswerIndex: 2,
    explanation: "Se debe tratar igual a los iguales en igualdad de circunstancias."
  },
  {
    id: 285,
    question: "En relación con el siguiente interrogante: El Poder Judicial de la Provincia de San Juan tiene como cabeza a:, indique la respuesta correcta:",
    options: [
      "La Corte de Justicia.",
      "La Suprema Corte Nacional.",
      "El Fiscal General.",
      "El Tribunal de Cuentas."
    ],
    correctAnswerIndex: 0,
    explanation: "La Corte de Justicia."
  },
  {
    id: 286,
    question: "Considerando la siguiente premisa: 'La Corte de Justicia.'. El Poder Judicial de la Provincia de San Juan tiene como cabeza a:",
    options: [
      "El Fiscal General.",
      "La Suprema Corte Nacional.",
      "El Tribunal de Cuentas.",
      "La Corte de Justicia."
    ],
    correctAnswerIndex: 3,
    explanation: "La Corte de Justicia."
  },
  {
    id: 287,
    question: "En relación con el siguiente interrogante: En materia laboral, si una norma es ambigua, ¿qué sucede?, indique la respuesta correcta:",
    options: [
      "Se aplica en el sentido más favorable al trabajador (regla in dubio pro operario).",
      "Queda anulada automáticamente.",
      "Se debe votar en la Legislatura nuevamente.",
      "Se resuelve a favor del Estado."
    ],
    correctAnswerIndex: 0,
    explanation: "Se aplica en el sentido más favorable al trabajador (regla in dubio pro operario)."
  },
  {
    id: 288,
    question: "Considerando que 'Se aplica en el sentido más favorable al trabajador (regla in dubio pro operario).', en materia laboral, si una norma es ambigua, ¿qué sucede?",
    options: [
      "Se debe votar en la Legislatura nuevamente.",
      "Queda anulada automáticamente.",
      "Se aplica en el sentido más favorable al trabajador (regla in dubio pro operario).",
      "Se resuelve a favor del Estado."
    ],
    correctAnswerIndex: 2,
    explanation: "Se aplica en el sentido más favorable al trabajador (regla in dubio pro operario)."
  },
  {
    id: 289,
    question: "En relación con el siguiente interrogante: El control de constitucionalidad en Argentina es 'difuso' porque:, indique la respuesta correcta:",
    options: [
      "Se realiza mediante un referéndum popular.",
      "Lo hace el Poder Ejecutivo.",
      "Solo la Corte Suprema puede ejercerlo.",
      "Puede ser ejercido por cualquier juez de cualquier fuero o instancia."
    ],
    correctAnswerIndex: 3,
    explanation: "Puede ser ejercido por cualquier juez de cualquier fuero o instancia."
  },
  {
    id: 290,
    question: "Considerando la siguiente premisa: 'Puede ser ejercido por cualquier juez de cualquier fuero o instancia.'. El control de constitucionalidad en Argentina es 'difuso' porque:",
    options: [
      "Lo hace el Poder Ejecutivo.",
      "Puede ser ejercido por cualquier juez de cualquier fuero o instancia.",
      "Solo la Corte Suprema puede ejercerlo.",
      "Se realiza mediante un referéndum popular."
    ],
    correctAnswerIndex: 1,
    explanation: "Puede ser ejercido por cualquier juez de cualquier fuero o instancia."
  },
  {
    id: 291,
    question: "En relación con el siguiente interrogante: La adopción plena tiene como efecto principal:, indique la respuesta correcta:",
    options: [
      "Dar solo el apellido sin derechos hereditarios.",
      "Emplazar al adoptado en la familia adoptante como si fuera hijo biológico, extinguiendo los vínculos con la familia de origen.",
      "Ser revocable en cualquier momento sin motivo.",
      "Otorgar un permiso de cuidado temporal."
    ],
    correctAnswerIndex: 1,
    explanation: "Emplazar al adoptado en la familia adoptante como si fuera hijo biológico, extinguiendo los vínculos con la familia de origen."
  },
  {
    id: 292,
    question: "Considerando la siguiente premisa: 'Emplazar al adoptado en la familia adoptante como si fuera hijo biológico, extinguiendo los vínculos con la familia de origen.'. La adopción plena tiene como efecto principal:",
    options: [
      "Emplazar al adoptado en la familia adoptante como si fuera hijo biológico, extinguiendo los vínculos con la familia de origen.",
      "Dar solo el apellido sin derechos hereditarios.",
      "Otorgar un permiso de cuidado temporal.",
      "Ser revocable en cualquier momento sin motivo."
    ],
    correctAnswerIndex: 0,
    explanation: "Emplazar al adoptado en la familia adoptante como si fuera hijo biológico, extinguiendo los vínculos con la familia de origen."
  },
  {
    id: 293,
    question: "En relación con el siguiente interrogante: El Ministerio Público de la Defensa en San Juan:, indique la respuesta correcta:",
    options: [
      "Vota las leyes penales provinciales.",
      "Garantiza el acceso a la justicia y la defensa técnica de personas vulnerables o ausentes.",
      "Es el encargado de investigar los homicidios.",
      "Controla los fondos de la Corte de Justicia."
    ],
    correctAnswerIndex: 1,
    explanation: "Garantiza el acceso a la justicia y la defensa técnica de personas vulnerables o ausentes."
  },
  {
    id: 294,
    question: "Considerando la siguiente premisa: 'Garantiza el acceso a la justicia y la defensa técnica de personas vulnerables o ausentes.'. El Ministerio Público de la Defensa en San Juan:",
    options: [
      "Vota las leyes penales provinciales.",
      "Es el encargado de investigar los homicidios.",
      "Controla los fondos de la Corte de Justicia.",
      "Garantiza el acceso a la justicia y la defensa técnica de personas vulnerables o ausentes."
    ],
    correctAnswerIndex: 3,
    explanation: "Garantiza el acceso a la justicia y la defensa técnica de personas vulnerables o ausentes."
  },
  {
    id: 295,
    question: "En relación con el siguiente interrogante: Los decretos de necesidad y urgencia (DNU):, indique la respuesta correcta:",
    options: [
      "Los dicta el Congreso en secreto.",
      "Los dictan los Jueces de Paz.",
      "No están previstos en nuestra Constitución.",
      "Los dicta el Poder Ejecutivo en circunstancias excepcionales, prohibiéndose en materia penal, tributaria, electoral o de partidos políticos."
    ],
    correctAnswerIndex: 3,
    explanation: "Los dicta el Poder Ejecutivo en circunstancias excepcionales, prohibiéndose en materia penal, tributaria, electoral o de partidos políticos."
  },
  {
    id: 296,
    question: "Considerando la siguiente premisa: 'Los dicta el Poder Ejecutivo en circunstancias excepcionales, prohibiéndose en materia penal, tributaria, electoral o de partidos políticos.'. Los decretos de necesidad y urgencia (DNU):",
    options: [
      "Los dicta el Poder Ejecutivo en circunstancias excepcionales, prohibiéndose en materia penal, tributaria, electoral o de partidos políticos.",
      "Los dicta el Congreso en secreto.",
      "No están previstos en nuestra Constitución.",
      "Los dictan los Jueces de Paz."
    ],
    correctAnswerIndex: 0,
    explanation: "Los dicta el Poder Ejecutivo en circunstancias excepcionales, prohibiéndose en materia penal, tributaria, electoral o de partidos políticos."
  },
  {
    id: 297,
    question: "En relación con el siguiente interrogante: El principio de continuidad de la relación laboral:, indique la respuesta correcta:",
    options: [
      "En caso de duda, se debe interpretar que el contrato sigue vigente.",
      "El empleador no puede cerrar la empresa nunca.",
      "El trabajador no puede tomar vacaciones.",
      "El salario debe pagarse todos los días."
    ],
    correctAnswerIndex: 0,
    explanation: "En caso de duda, se debe interpretar que el contrato sigue vigente."
  },
  {
    id: 298,
    question: "Considerando la siguiente premisa: 'En caso de duda, se debe interpretar que el contrato sigue vigente.'. El principio de continuidad de la relación laboral:",
    options: [
      "El salario debe pagarse todos los días.",
      "El empleador no puede cerrar la empresa nunca.",
      "En caso de duda, se debe interpretar que el contrato sigue vigente.",
      "El trabajador no puede tomar vacaciones."
    ],
    correctAnswerIndex: 2,
    explanation: "En caso de duda, se debe interpretar que el contrato sigue vigente."
  },
  {
    id: 299,
    question: "En relación con el siguiente interrogante: La capacidad de derecho es:, indique la respuesta correcta:",
    options: [
      "El patrimonio total de una persona.",
      "La aptitud para ejercer los derechos por sí mismo.",
      "La aptitud para ser titular de derechos y deberes jurídicos.",
      "La posibilidad física de realizar trabajos."
    ],
    correctAnswerIndex: 2,
    explanation: "La aptitud para ser titular de derechos y deberes jurídicos."
  },
  {
    id: 300,
    question: "Considerando la siguiente premisa: 'La aptitud para ser titular de derechos y deberes jurídicos.'. La capacidad de derecho es:",
    options: [
      "La aptitud para ejercer los derechos por sí mismo.",
      "La aptitud para ser titular de derechos y deberes jurídicos.",
      "La posibilidad física de realizar trabajos.",
      "El patrimonio total de una persona."
    ],
    correctAnswerIndex: 1,
    explanation: "La aptitud para ser titular de derechos y deberes jurídicos."
  },
];
