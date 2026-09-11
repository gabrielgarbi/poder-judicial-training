export interface Topic {
  id: number;
  title: string;
  description: string;
  content: string;
}

export const studyTopics: Topic[] = [
  {
    id: 1,
    title: "Tema I. Derecho Constitucional",
    description: "Conceptos, Supremacía de la Constitución, Estado Federal, Declaraciones, Derechos y Garantías, División de Poderes.",
    content: "El Derecho Constitucional es la rama del derecho público que estudia la estructura del Estado y sus órganos, así como los derechos y garantías de los habitantes. La Supremacía Constitucional (Art. 31 CN) establece que la Constitución Nacional, las leyes nacionales y los tratados internacionales conforman el bloque normativo supremo. El Estado Federal argentino se caracteriza por la descentralización territorial del poder: existe un Estado Nacional soberano y Provincias autónomas. La División de Poderes busca evitar la tiranía, separando las funciones en Poder Legislativo (crea las leyes), Poder Ejecutivo (administra el país) y Poder Judicial (resuelve conflictos y ejerce el control de constitucionalidad)."
  },
  {
    id: 2,
    title: "Tema II. Constitución Provincial",
    description: "Constitución de la Provincia de San Juan: Análisis y estudio de su articulado.",
    content: "La Constitución de la Provincia de San Juan establece el marco legal e institucional de la provincia. Reconoce derechos fundamentales y garantías procesales para todos los habitantes. Estructura el gobierno provincial en los tres poderes tradicionales: Ejecutivo (a cargo del Gobernador), Legislativo (Cámara de Diputados) y Judicial (Corte de Justicia y tribunales inferiores). Además, prevé regímenes especiales para la educación, el régimen municipal (autonomía de los municipios), y mecanismos de participación ciudadana como la consulta y la iniciativa popular. Su principal objetivo es asegurar el bienestar general, el orden y la justicia dentro del territorio provincial."
  },
  {
    id: 3,
    title: "Tema III. Organización del Poder Judicial de San Juan",
    description: "Organización, funciones, Jurisdicción y Competencia, Corte de Justicia, Ministerio Público Fiscal, Defensa Oficial.",
    content: "El Poder Judicial de San Juan es el encargado de administrar justicia. Está encabezado por la Corte de Justicia, que ejerce la superintendencia sobre todos los tribunales inferiores. La jurisdicción es la potestad del Estado para juzgar, mientras que la competencia es la medida de esa jurisdicción (según materia, territorio, etc.). Se organiza en fueros especializados: Civil, Comercial, Penal, Laboral y de Familia. Magistrados y funcionarios gozan de garantías como la inamovilidad en sus cargos y la intangibilidad de sus remuneraciones para asegurar su independencia."
  },
  {
    id: 4,
    title: "Tema IV. Ministerio Público de la Provincia de San Juan",
    description: "Ley Provincial Nº 633-E, Defensa Oficial, Funciones y Misión.",
    content: "El Ministerio Público es un órgano extrapoder con autonomía funcional. Se divide en dos grandes ramas: el Ministerio Público Fiscal y el Ministerio Público de la Defensa. El Fiscal General dirige a los fiscales, cuya misión principal es promover la acción penal, dirigir las investigaciones en el sistema acusatorio, y resguardar la legalidad y los intereses de la sociedad. Por su parte, la Defensa Oficial garantiza el derecho irrenunciable a la defensa en juicio de los ciudadanos que no pueden o no desean contratar un abogado particular, asegurando el principio de igualdad ante la ley."
  },
  {
    id: 5,
    title: "Tema V. Derecho Civil y Procesal Civil",
    description: "Persona Humana, Atributos de la personalidad, Hechos y Actos Jurídicos, Contratos, Principios procesales.",
    content: "El Derecho Civil regula las relaciones privadas. La persona humana adquiere derechos desde la concepción. Sus atributos son: nombre, capacidad (de derecho y de ejercicio), domicilio y estado. Los hechos jurídicos son acontecimientos que producen consecuencias legales, mientras que los actos jurídicos son actos voluntarios lícitos cuyo fin inmediato es crear o extinguir derechos (ej: contratos). El Proceso Civil es predominantemente dispositivo, escrito, y está regido por principios como la preclusión, el impulso procesal por las partes y la igualdad de trato. Los jueces deben resolver basándose en las pruebas aportadas por las partes."
  },
  {
    id: 6,
    title: "Tema VI. Derecho Laboral y Procesal Laboral",
    description: "Trabajo humano, Relación de dependencia, Principios del Derecho del Trabajo, Principio Protectorio, In dubio pro operario.",
    content: "El Derecho Laboral protege al trabajador por encontrarse en una posición de inferioridad frente al empleador (desigualdad negocial). Sus principios fundamentales incluyen: Principio Protectorio (regla 'in dubio pro operario': en caso de duda, se falla a favor del trabajador), Principio de Irrenunciabilidad de los derechos, y Principio de Continuidad de la relación laboral. La relación de dependencia implica subordinación jurídica, técnica y económica. El proceso laboral se caracteriza por la gratuidad para el trabajador, el impulso de oficio por parte del juez, la celeridad y la concentración de la prueba para resolver los conflictos rápidamente."
  },
  {
    id: 7,
    title: "Tema VII. Derecho de las Familias",
    description: "Principios generales, Matrimonio, Divorcio, Uniones Convivenciales, Parentesco, Filiación, Adopción, Responsabilidad Parental.",
    content: "El moderno Derecho de las Familias se basa en la pluralidad de formas familiares, la solidaridad y el interés superior del niño. Regula instituciones como el matrimonio igualitario, el divorcio incausado (se puede pedir de forma unilateral sin invocar motivos), y las uniones convivenciales. La Responsabilidad Parental (antes 'patria potestad') es el conjunto de deberes y derechos de los progenitores sobre la persona y bienes del hijo menor de edad, enfocado en su protección y desarrollo integral. Los procesos de familia son reservados, multidisciplinarios y buscan la pacificación del conflicto, con participación activa del juez."
  },
  {
    id: 8,
    title: "Tema VIII. Derecho Penal y Procesal Penal",
    description: "Delitos, Sistemas procesales, Acusatorio vs Inquisitivo, Proceso de Flagrancia.",
    content: "El Derecho Penal tipifica conductas como delitos y establece penas. Rigen principios como la legalidad (no hay crimen ni pena sin ley previa), culpabilidad, e inocencia. En materia procesal, San Juan ha transitado hacia el Sistema Acusatorio Adversarial, donde los roles están claramente separados: el Fiscal investiga y acusa, la Defensa asiste al imputado, y el Juez de Garantías controla la legalidad y decide imparcialmente de manera oral y pública. El Procedimiento Especial de Flagrancia permite juzgar de manera muy veloz a quienes son sorprendidos en el momento exacto de cometer el delito."
  },
  {
    id: 9,
    title: "Tema IX. Normativa de Género",
    description: "Ley de Protección Integral a las Mujeres 26.485, Tipos y modalidades de violencia, Convención de Belém do Pará.",
    content: "Este bloque aborda los derechos y protecciones contra la discriminación y la violencia basada en el género. La Convención de Belém do Pará es el principal tratado internacional. La Ley 26.485 reconoce distintos tipos de violencia (física, psicológica, sexual, económica/patrimonial, simbólica y política) y modalidades según el ámbito donde ocurran (doméstica, institucional, laboral, obstétrica, mediática, etc.). Es deber del Estado y del Poder Judicial juzgar con 'perspectiva de género', removiendo los estereotipos y asegurando un acceso real y efectivo a la justicia para las víctimas de violencia."
  }
];