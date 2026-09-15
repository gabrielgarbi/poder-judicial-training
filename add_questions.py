import re

extra_q = [
    # Constitucional y Orgánica
    ("¿Cuál es el máximo tribunal de la Provincia de San Juan?", "La Corte de Justicia.", ["El Tribunal Superior de Justicia.", "La Cámara de Apelaciones.", "El Juzgado de Paz."], 0),
    ("¿Quién ejerce el control de constitucionalidad en Argentina?", "Todos los jueces (sistema difuso).", ["Solo la Corte Suprema.", "Solo el Poder Legislativo.", "El Presidente de la Nación."], 0),
    ("El Ministerio Público Fiscal de San Juan tiene como función principal:", "Promover la acción penal y defender la legalidad.", ["Dictar sentencias definitivas.", "Defender a los imputados sin recursos.", "Organizar las elecciones."], 0),
    ("¿Qué función cumple la Defensa Oficial?", "Garantizar la defensa en juicio de quienes no pueden contratar un abogado particular.", ["Acusar a los delincuentes.", "Controlar el presupuesto judicial.", "Emitir leyes."], 0),
    ("El Consejo de la Magistratura tiene a su cargo:", "La selección de los magistrados inferiores.", ["El dictado de fallos supremos.", "La recaudación de impuestos.", "El control de los fiscales."], 0),
    ("El Jurado de Enjuiciamiento sirve para:", "Juzgar el mal desempeño o delitos de magistrados inferiores.", ["Juzgar a ciudadanos comunes.", "Designar jueces.", "Nombrar al Gobernador."], 0),
    
    # Procesal Penal y Penal
    ("En el sistema acusatorio adversarial, la investigación penal preparatoria está a cargo de:", "El Fiscal.", ["El Juez de Instrucción.", "El Juez de Garantías.", "El Defensor Oficial."], 0),
    ("El Juez de Garantías en el sistema acusatorio tiene como rol:", "Controlar el respeto de los derechos y garantías constitucionales durante la investigación.", ["Investigar los delitos.", "Defender al imputado.", "Buscar las pruebas de cargo."], 0),
    ("¿Qué es el Procedimiento de Flagrancia?", "Un procedimiento especial y expedito para quienes son sorprendidos cometiendo un delito.", ["Un juicio civil por deudas.", "Un recurso ante la Corte Suprema.", "Una mediación laboral."], 0),
    ("El principio de inocencia implica que:", "Toda persona se presume inocente hasta que una sentencia firme demuestre lo contrario.", ["El acusado debe demostrar su inocencia.", "Nadie puede ir a la cárcel.", "Todos son culpables si hay sospecha."], 0),
    ("El 'Habeas Corpus' procede ante:", "Privaciones o amenazas ilegítimas a la libertad física.", ["Deudas comerciales.", "Despidos sin causa.", "Violaciones al derecho de propiedad."], 0),
    ("El principio de legalidad penal ('nullum crimen nulla poena sine lege') significa que:", "No hay delito ni pena sin ley previa.", ["La ley penal es retroactiva.", "Los jueces pueden crear delitos.", "El Código Penal no rige en las provincias."], 0),
    
    # Civil y Familia
    ("¿Cuándo comienza la existencia de la persona humana según el CCyC?", "Desde la concepción.", ["Desde el nacimiento.", "A los 18 años.", "Desde que se la inscribe en el Registro Civil."], 0),
    ("¿Cuáles son atributos de la personalidad?", "Nombre, capacidad, domicilio y estado.", ["Patrimonio, deudas, profesión y residencia.", "Sexo, edad, peso y altura.", "Nacionalidad, religión y afiliación política."], 0),
    ("El divorcio vincular en el régimen actual argentino:", "Puede ser solicitado por uno o ambos cónyuges sin invocar causa.", ["Requiere que pasen 3 años de separación.", "Solo procede por adulterio o injurias graves.", "Es irrevocable."], 0),
    ("¿Qué es la Responsabilidad Parental?", "El conjunto de deberes y derechos de los progenitores sobre la persona y bienes del hijo.", ["La obligación del Estado de mantener a los niños.", "La patria potestad exclusiva del padre.", "El deber de los abuelos de cuidar a los nietos."], 0),
    ("Las uniones convivenciales producen:", "Efectos jurídicos si cumplen los requisitos legales (como convivencia pública, notoria y estable).", ["Los mismos derechos hereditarios que el matrimonio.", "Ningún efecto legal.", "La división de bienes en partes iguales a los 6 meses."], 0),
    ("El proceso de familia se caracteriza por ser:", "Interdisciplinario y enfocado en la pacificación del conflicto.", ["Estrictamente escrito y público.", "Inquisitivo y demorado.", "Unilateral y secreto."], 0),
    
    # Laboral
    ("El principio 'in dubio pro operario' significa que:", "En caso de duda sobre la interpretación de una norma, se aplica la más favorable al trabajador.", ["El trabajador siempre tiene la razón en los hechos.", "En caso de duda, se favorece al empleador.", "El empleador no debe probar nada."], 0),
    ("El contrato de trabajo se presume celebrado:", "Por tiempo indeterminado.", ["A plazo fijo por 6 meses.", "Por temporada.", "Como trabajo eventual."], 0),
    ("¿Qué es el principio de irrenunciabilidad?", "La imposibilidad jurídica de privarse voluntariamente de las ventajas concedidas por el derecho laboral.", ["El derecho a no renunciar al empleo.", "La obligación de aceptar cualquier salario.", "El empleador no puede renunciar a la empresa."], 0),
    ("En el proceso laboral sanjuanino rige el principio de:", "Gratuidad para el trabajador.", ["Pago previo de costas.", "Secreto de actuaciones.", "Mediación penal."], 0),
    
    # Violencia de Género
    ("La Ley 26.485 protege contra:", "La violencia contra las mujeres en los ámbitos en que desarrollen sus relaciones interpersonales.", ["La violencia deportiva.", "Los conflictos vecinales.", "El acoso escolar exclusivamente."], 0),
    ("¿Qué es la violencia psicológica según la Ley 26.485?", "La que causa daño emocional, disminución de la autoestima o perjudica el desarrollo personal.", ["El daño al patrimonio de la víctima.", "Los golpes o maltrato físico.", "La desigualdad salarial."], 0),
    ("La Convención de Belém do Pará refiere a:", "La prevención, sanción y erradicación de la violencia contra la mujer.", ["El comercio internacional.", "El derecho del mar.", "La regulación de los tratados de paz."], 0),
    ("En casos de violencia familiar, los jueces pueden ordenar:", "Medidas cautelares urgentes de protección (ej: exclusión del hogar, restricción de acercamiento).", ["Prisión perpetua automática.", "El pago de una multa a la provincia.", "El despido laboral del agresor."], 0),

    # Conceptos Generales
    ("¿Qué es la jurisdicción?", "La potestad del Estado para administrar justicia y resolver conflictos.", ["La zona donde actúa la policía.", "La división de provincias.", "El poder de cobrar impuestos."], 0),
    ("¿Qué es la competencia?", "El límite o medida de la jurisdicción (por territorio, materia, grado).", ["La rivalidad entre abogados.", "La habilidad del juez para fallar.", "El horario de tribunales."], 0),
    ("Un acto jurídico es:", "Un acto voluntario lícito que tiene por fin inmediato producir efectos jurídicos.", ["Un acontecimiento de la naturaleza.", "Un delito penado por la ley.", "Cualquier hecho humano."], 0),
    ("La preclusión procesal significa:", "La pérdida de una facultad procesal por haber transcurrido el plazo para ejercerla.", ["Que el juez dicte sentencia.", "Que el juicio es gratis.", "Que el juicio comienza."], 0),
    
    # Constitucional Part 2
    ("¿Cuáles son los niveles de gobierno en el Estado Federal Argentino?", "Nacional, Provincial, Municipal y CABA.", ["Nacional y Provincial únicamente.", "Nacional, Mercosur y ONU.", "Provincial y Departamental."], 0),
    ("Los Tratados de Derechos Humanos con jerarquía constitucional:", "Tienen la misma jerarquía que la Constitución.", ["Son superiores a la Constitución.", "Están por debajo de las leyes nacionales.", "Solo aplican si una ley los reglamenta."], 0),
    ("El amparo es la acción para proteger:", "Derechos constitucionales lesionados de manera manifiesta y arbitraria (que no sean la libertad física).", ["Únicamente derechos patrimoniales.", "La libertad física exclusivamente.", "El derecho a cobrar una herencia."], 0),
    
    # Mix
    ("¿Qué principio rige la prueba en el sistema acusatorio?", "La carga de la prueba le corresponde a la Fiscalía (quien acusa).", ["La carga es del imputado (debe probar su inocencia).", "El Juez debe conseguir las pruebas.", "Las pruebas se presumen verdaderas sin demostración."], 0),
    ("¿Qué es la cosa juzgada?", "El atributo de la sentencia definitiva contra la cual no proceden más recursos.", ["Cuando un objeto ha sido embargado.", "Cuando el juez opina sobre un tema antes del juicio.", "El inicio de una causa judicial."], 0),
    ("En el Derecho de Familia, el Interés Superior del Niño implica:", "Que las decisiones deben priorizar el máximo bienestar y los derechos del menor de edad.", ["Que el niño siempre se queda con la madre.", "Que el niño manda sobre sus padres.", "Que los abuelos deciden por el niño."], 0),
    ("La acción de amparo por mora procede:", "Ante la demora injustificada de la Administración Pública en dictar una resolución.", ["Ante la falta de pago de un pagaré.", "Cuando un deudor moroso no paga la cuota alimentaria.", "Contra un juez por demorar la sentencia."], 0),
    ("El Secreto de Sumario en la instrucción mixta sirve para:", "Impedir que se conozcan los actos procesales para no frustrar la investigación.", ["Proteger la identidad del juez.", "Ocultar el fallo al público.", "Proteger los secretos comerciales."], 0),
    ("El trabajo en relación de dependencia se caracteriza por:", "La subordinación jurídica, técnica y económica del trabajador.", ["El trabajo autónomo e independiente.", "El trabajo voluntario ad honorem.", "El trabajo societario de riesgo compartido."], 0),
    ("Las Garantías Constitucionales son:", "Los mecanismos jurídicos que protegen los derechos reconocidos en la Constitución.", ["Declaraciones políticas sin fuerza de ley.", "Los deberes de los ciudadanos.", "Los castigos para los delincuentes."], 0),
    ("El principio 'non bis in idem' significa:", "Que nadie puede ser perseguido penalmente dos veces por el mismo hecho.", ["Que nadie puede ir preso sin abogado.", "Que los jueces deben ser dos por causa.", "Que no se pueden pagar dos impuestos iguales."], 0),
    ("La igualdad ante la ley (Art. 16 CN) implica que:", "Se debe tratar igual a los iguales en igualdad de circunstancias.", ["Todos los ciudadanos deben cobrar el mismo sueldo.", "No hay distinciones por edad para ningún acto.", "Se eliminan las jerarquías en el empleo público."], 0),
    ("El Poder Judicial de la Provincia de San Juan tiene como cabeza a:", "La Corte de Justicia.", ["La Suprema Corte Nacional.", "El Fiscal General.", "El Tribunal de Cuentas."], 0),
    ("En materia laboral, si una norma es ambigua, ¿qué sucede?", "Se aplica en el sentido más favorable al trabajador (regla in dubio pro operario).", ["Queda anulada automáticamente.", "Se resuelve a favor del Estado.", "Se debe votar en la Legislatura nuevamente."], 0)
]

# Total extra questions = 44. Added to the existing 50, that makes ~94. Let's add 6 more to hit exactly 100 total (50 original + 50 new)

extra_q.extend([
    ("El control de constitucionalidad en Argentina es 'difuso' porque:", "Puede ser ejercido por cualquier juez de cualquier fuero o instancia.", ["Solo la Corte Suprema puede ejercerlo.", "Se realiza mediante un referéndum popular.", "Lo hace el Poder Ejecutivo."], 0),
    ("La adopción plena tiene como efecto principal:", "Emplazar al adoptado en la familia adoptante como si fuera hijo biológico, extinguiendo los vínculos con la familia de origen.", ["Otorgar un permiso de cuidado temporal.", "Dar solo el apellido sin derechos hereditarios.", "Ser revocable en cualquier momento sin motivo."], 0),
    ("El Ministerio Público de la Defensa en San Juan:", "Garantiza el acceso a la justicia y la defensa técnica de personas vulnerables o ausentes.", ["Es el encargado de investigar los homicidios.", "Controla los fondos de la Corte de Justicia.", "Vota las leyes penales provinciales."], 0),
    ("Los decretos de necesidad y urgencia (DNU):", "Los dicta el Poder Ejecutivo en circunstancias excepcionales, prohibiéndose en materia penal, tributaria, electoral o de partidos políticos.", ["Los dicta el Congreso en secreto.", "Los dictan los Jueces de Paz.", "No están previstos en nuestra Constitución."], 0),
    ("El principio de continuidad de la relación laboral:", "En caso de duda, se debe interpretar que el contrato sigue vigente.", ["El trabajador no puede tomar vacaciones.", "El empleador no puede cerrar la empresa nunca.", "El salario debe pagarse todos los días."], 0),
    ("La capacidad de derecho es:", "La aptitud para ser titular de derechos y deberes jurídicos.", ["La posibilidad física de realizar trabajos.", "La aptitud para ejercer los derechos por sí mismo.", "El patrimonio total de una persona."], 0)
])

with open("src/data/questions.ts", "r", encoding="utf-8") as f:
    lines = f.readlines()

# Find the end of the array (last '];')
for i in range(len(lines)-1, -1, -1):
    if '];' in lines[i]:
        insert_idx = i
        break

# The last object might not have a comma. Let's make sure it's valid TS.
# Just rewrite the file using string manipulation.
with open("src/data/questions.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Replace the closing bracket
content = content.replace("];", "")

# We need to find the max ID
import re
ids = re.findall(r'id:\s*(\d+)', content)
max_id = max([int(x) for x in ids]) if ids else 0

new_qs = ""
for q in extra_q:
    max_id += 1
    question = q[0].replace('"', '\\"')
    correct = q[1].replace('"', '\\"')
    opt1 = q[2][0].replace('"', '\\"')
    opt2 = q[2][1].replace('"', '\\"')
    opt3 = q[2][2].replace('"', '\\"')
    # Mix the correct answer in
    import random
    options = [opt1, opt2, opt3, correct]
    random.shuffle(options)
    correct_idx = options.index(correct)
    
    new_qs += f"  {{\n"
    new_qs += f"    id: {max_id},\n"
    new_qs += f'    question: "{question}",\n'
    new_qs += f'    options: [\n'
    new_qs += f'      "{options[0]}",\n'
    new_qs += f'      "{options[1]}",\n'
    new_qs += f'      "{options[2]}",\n'
    new_qs += f'      "{options[3]}"\n'
    new_qs += f'    ],\n'
    new_qs += f"    correctAnswerIndex: {correct_idx},\n"
    new_qs += f'    explanation: "{correct}"\n'
    new_qs += f"  }},\n"

# Remove trailing comma from new_qs if needed, but array can have trailing comma
content = content.rstrip().rstrip(',')
# If the last character was '}', add a comma
if content.strip().endswith('}'):
    content += ",\n"

content += new_qs + "];\n"

with open("src/data/questions.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Added 50 questions successfully! Total should be around {max_id}.")
