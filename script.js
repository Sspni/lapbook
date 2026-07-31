/* =============== DATOS =============== */
const applications = [
  { icon: "🎓", title: "Educación", text: "Tutores virtuales y plataformas que adaptan el contenido al ritmo del estudiante." },
  { icon: "🏥", title: "Medicina", text: "Apoyo en diagnóstico por imágenes y análisis de grandes volúmenes de datos clínicos." },
  { icon: "🚗", title: "Transporte", text: "Optimización de rutas, semáforos inteligentes y vehículos con conducción asistida." },
  { icon: "🎬", title: "Entretenimiento", text: "Recomendación de música, series y videojuegos según los gustos del usuario." },
  { icon: "🏢", title: "Empresas", text: "Automatización de procesos, atención al cliente y análisis de mercado." },
  { icon: "🔒", title: "Seguridad", text: "Detección de fraudes, ciberataques y comportamientos anómalos en redes." },
  { icon: "📱", title: "Vida cotidiana", text: "Asistentes de voz, traductores automáticos y filtros de correo no deseado." }
];

const benefits = [
  { icon: "⏱️", title: "Ahorro de tiempo", text: "Automatiza tareas repetitivas y libera tiempo para actividades más creativas." },
  { icon: "⚙️", title: "Automatización", text: "Ejecuta procesos complejos sin intervención humana constante." },
  { icon: "📈", title: "Productividad", text: "Ayuda a producir más en menos tiempo con menos errores." },
  { icon: "♿", title: "Accesibilidad", text: "Herramientas como lectores de voz facilitan el acceso a la información." },
  { icon: "📊", title: "Análisis de datos", text: "Procesa grandes cantidades de información en segundos." },
  { icon: "🧑‍🏫", title: "Educación personalizada", text: "Adapta el aprendizaje al ritmo y estilo de cada estudiante." },
  { icon: "💡", title: "Innovación", text: "Impulsa nuevas soluciones en ciencia, arte e industria." }
];

const risks = [
  { icon: "📰", title: "Desinformación", text: "Puede generar contenido falso que parece real." },
  { icon: "🎭", title: "Deepfakes", text: "Videos o audios falsificados que imitan a personas reales." },
  { icon: "🔐", title: "Privacidad", text: "Uso indebido de datos personales para entrenar modelos." },
  { icon: "⚖️", title: "Sesgos", text: "Puede repetir prejuicios presentes en los datos de entrenamiento." },
  { icon: "🔗", title: "Dependencia tecnológica", text: "Delegar demasiadas decisiones sin criterio propio." },
  { icon: "💼", title: "Transformación laboral", text: "Automatiza tareas y transforma profesiones existentes." },
  { icon: "🛡️", title: "Seguridad", text: "Puede ser usada para crear ciberataques más sofisticados." },
  { icon: "⚠️", title: "Uso irresponsable", text: "Aplicarla sin ética ni supervisión humana adecuada." }
];

const professions = [
  { icon: "🩺", title: "Médico", ia: "Apoya en diagnóstico e imágenes.", humano: "Empatía, criterio clínico y trato humano." },
  { icon: "🧑‍🏫", title: "Profesor", ia: "Genera material y ejercicios.", humano: "Motivación, guía y evaluación personal." },
  { icon: "🎨", title: "Diseñador", ia: "Genera ideas e imágenes.", humano: "Creatividad, criterio y dirección artística." },
  { icon: "💻", title: "Programador", ia: "Sugiere y corrige código.", humano: "Lógica de diseño y solución de problemas reales." },
  { icon: "⚖️", title: "Abogado", ia: "Analiza documentos y jurisprudencia.", humano: "Argumentación, ética y estrategia legal." },
  { icon: "🛠️", title: "Ingeniero", ia: "Simula y optimiza diseños.", humano: "Innovación y decisiones técnicas complejas." },
  { icon: "📝", title: "Periodista", ia: "Resume datos e información.", humano: "Investigación, verificación y contexto." },
  { icon: "🏗️", title: "Arquitecto", ia: "Genera bocetos y modelos 3D.", humano: "Visión estética y sentido del espacio." }
];

const myths = [
  { mito: "La IA siempre tiene la razón.", realidad: "Puede equivocarse y generar información incorrecta." },
  { mito: "La IA piensa exactamente igual que una persona.", realidad: "Procesa datos y patrones mediante modelos computacionales." },
  { mito: "La IA reemplazará inmediatamente todos los trabajos.", realidad: "Transforma tareas; algunas profesiones cambian y surgen otras nuevas." }
];

const glossary = [
  { term: "Algoritmo", def: "Conjunto de pasos ordenados para resolver un problema." },
  { term: "Modelo", def: "Sistema entrenado que hace predicciones a partir de datos." },
  { term: "Datos", def: "Información usada para entrenar o alimentar una IA." },
  { term: "Machine Learning", def: "Aprendizaje automático a partir de datos y patrones." },
  { term: "Deep Learning", def: "Aprendizaje profundo mediante redes neuronales de varias capas." },
  { term: "Red neuronal", def: "Estructura inspirada en el cerebro que procesa información por capas." },
  { term: "Prompt", def: "Instrucción o texto que se le da a una IA para obtener una respuesta." },
  { term: "IA generativa", def: "IA capaz de crear texto, imágenes, audio o código nuevo." },
  { term: "Automatización", def: "Ejecutar tareas sin intervención humana constante." },
  { term: "Sesgo", def: "Tendencia injusta que puede aparecer por datos poco representativos." },
  { term: "Deepfake", def: "Contenido audiovisual falsificado con IA que imita a una persona real." }
];

const quizData = [
  { p: "¿Qué significa IA?", o: ["Inteligencia Artificial", "Internet Automático", "Información Avanzada"], r: 0 },
  { p: "¿Quién propuso el Test de Turing?", o: ["Isaac Newton", "Alan Turing", "Albert Einstein"], r: 1 },
  { p: "¿En qué conferencia nació el término 'Inteligencia Artificial'?", o: ["Dartmouth", "Harvard", "MIT Media Lab"], r: 0 },
  { p: "¿Qué tipo de IA existe actualmente?", o: ["IA general", "Superinteligencia", "IA estrecha"], r: 2 },
  { p: "¿Qué aprendizaje usa datos ya etiquetados?", o: ["Supervisado", "No supervisado", "Por refuerzo"], r: 0 },
  { p: "¿Qué puede generar la IA generativa?", o: ["Solo texto", "Texto, imágenes, audio y código", "Solo imágenes"], r: 1 },
  { p: "¿Qué es un deepfake?", o: ["Un tipo de red social", "Contenido audiovisual falsificado", "Un lenguaje de programación"], r: 1 },
  { p: "¿Qué habilidad humana sigue siendo clave frente a la IA?", o: ["Copiar resultados", "Criterio y creatividad", "Memorizar datos"], r: 1 }
];

/* =============== TEMA =============== */
const root = document.documentElement;
const themeBtn = document.getElementById("theme-toggle");
const temaGuardado = localStorage.getItem("lapbook-theme");
if (temaGuardado === "dark") { root.setAttribute("data-theme", "dark"); themeBtn.textContent = "☀️"; }
themeBtn.addEventListener("click", () => {
  const esOscuro = root.getAttribute("data-theme") === "dark";
  root.setAttribute("data-theme", esOscuro ? "light" : "dark");
  themeBtn.textContent = esOscuro ? "🌙" : "☀️";
  localStorage.setItem("lapbook-theme", esOscuro ? "light" : "dark");
});

/* =============== PORTADA -> LAPBOOK =============== */
document.getElementById("btn-comenzar").addEventListener("click", () => {
  document.getElementById("portada").classList.add("oculto");
  const lapbook = document.getElementById("lapbook");
  lapbook.classList.remove("oculto");
  lapbook.setAttribute("aria-hidden", "false");
  window.scrollTo(0, 0);
});

/* =============== TABS Y PROGRESO =============== */
const orden = ["que-es","historia","tipos","aprendizaje","ml-dl","generativa","aplicaciones",
  "beneficios","riesgos","profesiones","etica","educacion","mitos","glosario","quiz","reflexion"];

function mostrarPanel(id) {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("activo"));
  document.getElementById(id).classList.add("activo");
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("activa", t.dataset.tab === id));
  const idx = orden.indexOf(id);
  document.getElementById("progreso-barra").style.width = `${((idx + 1) / orden.length) * 100}%`;
  document.querySelector(".lapbook-header").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => mostrarPanel(tab.dataset.tab));
});

/* =============== GENERADOR DE TARJETAS =============== */
function crearGrid(contenedorId, datos, render) {
  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML = datos.map(render).join("");
}

crearGrid("grid-aplicaciones", applications, d => `
  <div class="mini-card"><span class="icono">${d.icon}</span><strong>${d.title}</strong><p>${d.text}</p></div>`);

crearGrid("grid-beneficios", benefits, d => `
  <div class="mini-card"><span class="icono">${d.icon}</span><strong>${d.title}</strong><p>${d.text}</p></div>`);

crearGrid("grid-riesgos", risks, d => `
  <div class="mini-card"><span class="icono">${d.icon}</span><strong>${d.title}</strong><p>${d.text}</p></div>`);

crearGrid("grid-profesiones", professions, d => `
  <div class="mini-card"><span class="icono">${d.icon}</span><strong>${d.title}</strong>
    <p><strong>IA:</strong> ${d.ia}</p><p><strong>Humano:</strong> ${d.humano}</p></div>`);

/* mitos: flip cards */
crearGrid("grid-mitos", myths, (d, i) => `
  <button class="mini-card flip-card" data-idx="${i}" aria-label="Voltear tarjeta de mito">
    <div class="flip-inner">
      <div class="flip-front"><strong>Mito</strong><p>${d.mito}</p></div>
      <div class="flip-back"><strong>Realidad</strong><p>${d.realidad}</p></div>
    </div>
  </button>`);

document.getElementById("grid-mitos").addEventListener("click", e => {
  const card = e.target.closest(".flip-card");
  if (card) card.classList.toggle("volteada");
});

/* glosario */
crearGrid("lista-glosario", glossary, d => `
  <div class="glosario-item"><span class="badge">${d.term}</span><p>${d.def}</p></div>`);

/* =============== ÉTICA (acordeón) =============== */
document.querySelectorAll(".acordeon-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("respuesta-etica").textContent = btn.dataset.respuesta;
  });
});

/* =============== QUIZ =============== */
let puntaje = 0;
let respondidas = 0;

function renderQuiz() {
  const cont = document.getElementById("quiz-contenedor");
  cont.innerHTML = quizData.map((q, i) => `
    <div class="quiz-pregunta" data-idx="${i}">
      <h4>${i + 1}. ${q.p}</h4>
      ${q.o.map((op, j) => `<button class="quiz-opcion" data-j="${j}">${op}</button>`).join("")}
    </div>`).join("") + `<div id="quiz-resultado-slot"></div>`;

  cont.querySelectorAll(".quiz-pregunta").forEach(preg => {
    const idx = Number(preg.dataset.idx);
    preg.querySelectorAll(".quiz-opcion").forEach(btnOpcion => {
      btnOpcion.addEventListener("click", () => {
        if (preg.dataset.respondida) return;
        preg.dataset.respondida = "true";
        const j = Number(btnOpcion.dataset.j);
        const correcta = quizData[idx].r;
        preg.querySelectorAll(".quiz-opcion").forEach((b, k) => {
          if (k === correcta) b.classList.add("correcta");
          else if (k === j) b.classList.add("incorrecta");
        });
        if (j === correcta) puntaje++;
        respondidas++;
        if (respondidas === quizData.length) mostrarResultadoQuiz();
      });
    });
  });
}

function mostrarResultadoQuiz() {
  let mensaje = "Sigue repasando los conceptos clave.";
  if (puntaje >= 7) mensaje = "Excelente comprensión de la IA.";
  else if (puntaje >= 5) mensaje = "Buen manejo de los conceptos principales.";
  document.getElementById("quiz-resultado-slot").innerHTML = `
    <div class="quiz-resultado">
      <p class="puntaje">${puntaje} / ${quizData.length}</p>
      <p>${mensaje}</p>
    </div>`;
}

renderQuiz();

/* =============== REFLEXIÓN =============== */
const textoReflexion = document.getElementById("reflexion-texto");
const estadoReflexion = document.getElementById("reflexion-estado");
const guardadaPrevia = localStorage.getItem("lapbook-reflexion");
if (guardadaPrevia) textoReflexion.value = guardadaPrevia;

document.getElementById("btn-guardar-reflexion").addEventListener("click", () => {
  localStorage.setItem("lapbook-reflexion", textoReflexion.value);
  estadoReflexion.textContent = "Reflexión guardada ✓";
  setTimeout(() => (estadoReflexion.textContent = ""), 2500);
});
