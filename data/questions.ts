export interface Question {
  question: string
  options: { value: string; label: string }[]
  correctAnswer: string
}

export const questions: Question[] = [
  {
    question: "¿Cuál de las siguientes describe mejor la función principal de Bettercap según las fuentes?",
    options: [
      { value: "a", label: "Herramienta de análisis forense para sistemas operativos específicos." },
      { value: "b", label: "Solución de código abierto para asegurar redes y realizar auditorías." },
      { value: "c", label: "Software propietario con un alto costo de licencia." },
      { value: "d", label: "Plataforma para el desarrollo de aplicaciones web seguras." },
    ],
    correctAnswer: "b",
  },
  {
    question: 'Según las fuentes, ¿qué se entiende por "resultados orgánicos" en un motor de búsqueda?',
    options: [
      { value: "a", label: "Resultados que aparecen en las primeras posiciones pagando publicidad." },
      { value: "b", label: "Resultados obtenidos mediante el uso de operadores de búsqueda avanzados." },
      { value: "c", label: "Resultados de búsqueda que aparecen de forma natural sin coste para el sitio web." },
      {
        value: "d",
        label: "Resultados que son generados por inteligencia artificial basada en el historial del usuario.",
      },
    ],
    correctAnswer: "c",
  },
  {
    question: "¿Qué tipo de fuente de información se considera una enciclopedia según las fuentes?",
    options: [
      { value: "a", label: "Fuente primaria." },
      { value: "b", label: "Fuente secundaria." },
      { value: "c", label: "Fuente terciaria." },
      { value: "d", label: "Fuente digital." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "¿Cuál de los siguientes operadores de búsqueda se utiliza en Google Dorking para buscar archivos de un tipo específico?",
    options: [
      { value: "a", label: "site:" },
      { value: "b", label: "inurl:" },
      { value: "c", label: "filetype:" },
      { value: "d", label: "intext:" },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "¿Qué herramienta se menciona en las fuentes como un motor de búsqueda para encontrar dispositivos específicos conectados a Internet?",
    options: [
      { value: "a", label: "Metagoofil." },
      { value: "b", label: "Exiftool." },
      { value: "c", label: "Shodan." },
      { value: "d", label: "Dirbuster." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes, ¿qué información puede extraer Metagoofil de los documentos de un dominio?",
    options: [
      { value: "a", label: "Contraseñas cifradas de los usuarios del dominio." },
      { value: "b", label: "Registros de actividad de red de los servidores del dominio." },
      { value: "c", label: "Nombres de usuarios y versiones de software utilizadas." },
      { value: "d", label: "El código fuente completo de las aplicaciones web del dominio." },
    ],
    correctAnswer: "c",
  },
  {
    question: "¿Cuál es la función principal de Exiftool según las fuentes?",
    options: [
      { value: "a", label: "Realizar búsquedas avanzadas en motores de búsqueda." },
      { value: "b", label: "Extraer y manipular metadatos de archivos." },
      { value: "c", label: "Analizar el tráfico de red en busca de vulnerabilidades." },
      { value: "d", label: "Generar diccionarios de contraseñas personalizadas." },
    ],
    correctAnswer: "b",
  },
  {
    question: "¿Qué método HTTP se utiliza principalmente para enviar datos al servidor, como al enviar un formulario?",
    options: [
      { value: "a", label: "GET" },
      { value: "b", label: "HEAD" },
      { value: "c", label: "DELETE" },
      { value: "d", label: "POST" },
    ],
    correctAnswer: "d",
  },
  {
    question: "¿Qué código de respuesta HTTP indica que la solicitud del cliente fue exitosa?",
    options: [
      { value: "a", label: "404 Not Found" },
      { value: "b", label: "500 Internal Server Error" },
      { value: "c", label: "3XX – Redirecciones" },
      { value: "d", label: "200 OK" },
    ],
    correctAnswer: "d",
  },
  {
    question: "¿Cuál es el propósito principal de Burp Intruder según las fuentes?",
    options: [
      { value: "a", label: "Analizar pasivamente el tráfico HTTP/S." },
      { value: "b", label: "Realizar ataques de fuerza bruta, pruebas de fuzzing y ataques de enumeración." },
      {
        value: "c",
        label: "Escanear automáticamente aplicaciones web en busca de vulnerabilidades (solo en la versión Pro).",
      },
      { value: "d", label: "Modificar manualmente solicitudes HTTP para pruebas específicas." },
    ],
    correctAnswer: "b",
  },
  {
    question: "¿Qué se necesita para instalar Metagoofil según lo mencionado en las fuentes?",
    options: [
      { value: "a", label: "Un sistema operativo Windows y la instalación de .NET Framework." },
      { value: "b", label: "Un entorno virtual de Python con las dependencias necesarias." },
      { value: "c", label: "Acceso de administrador al sistema y conexión a Internet de alta velocidad." },
      { value: "d", label: "La compra de una licencia de software específica." },
    ],
    correctAnswer: "b",
  },
  {
    question: "¿Qué utilidad tiene el comando `deactivate` según las fuentes relacionadas con Metagoofil?",
    options: [
      { value: "a", label: "Desinstalar la herramienta Metagoofil del sistema." },
      { value: "b", label: "Desactivar el entorno virtual de Python." },
      { value: "c", label: "Eliminar los archivos descargados por Metagoofil." },
      { value: "d", label: "Detener la búsqueda de Metagoofil en curso." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "¿Qué información se puede obtener sobre una empresa utilizando la herramienta InteligenciaX según las fuentes?",
    options: [
      { value: "a", label: "Información detallada sobre su infraestructura de red interna." },
      { value: "b", label: "Permite buscar amenazas online y recopilar información de inteligencia." },
      { value: "c", label: "Registros de las comunicaciones privadas de sus empleados." },
      { value: "d", label: "Análisis predictivos sobre su rendimiento financiero futuro." },
    ],
    correctAnswer: "b",
  },
  {
    question: "¿Cuál de las siguientes NO se menciona como una fase de un pentest en las fuentes?",
    options: [
      { value: "a", label: "Recolección de Información (Reconocimiento)." },
      { value: "b", label: "Análisis de Vulnerabilidades." },
      { value: "c", label: "Explotación." },
      { value: "d", label: "Desarrollo de software seguro." },
    ],
    correctAnswer: "d",
  },
  {
    question:
      "¿Qué tipo de recolección de información en un pentest implica interactuar directamente con el sistema objetivo?",
    options: [
      { value: "a", label: "Recolección pasiva." },
      { value: "b", label: "Recolección activa." },
      { value: "c", label: "Recolección de código fuente." },
      { value: "d", label: "Recolección de metadatos." },
    ],
    correctAnswer: "b",
  },
  {
    question: "¿Qué proporciona la herramienta `whois` según las fuentes?",
    options: [
      { value: "a", label: "Un listado de las vulnerabilidades conocidas de un sistema." },
      { value: "b", label: "Detalles sobre el propietario del dominio y la información de registro." },
      { value: "c", label: "Un análisis del tráfico de red de un sitio web." },
      { value: "d", label: "La ubicación geográfica de un servidor." },
    ],
    correctAnswer: "b",
  },
  {
    question: "¿Cuál es la última fase de un pentest según lo descrito en las fuentes?",
    options: [
      { value: "a", label: "Explotación de vulnerabilidades." },
      { value: "b", label: "Análisis de riesgos." },
      { value: "c", label: "Informe Final." },
      { value: "d", label: "Mantenimiento de acceso." },
    ],
    correctAnswer: "c",
  },
  {
    question: "¿Qué fórmula se menciona en las fuentes para calcular el riesgo asociado a una vulnerabilidad?",
    options: [
      { value: "a", label: "Riesgo = Amenaza + Impacto." },
      { value: "b", label: "Riesgo = Vulnerabilidad x Amenaza." },
      { value: "c", label: "Riesgo = Probabilidad del evento x Impacto del evento." },
      { value: "d", label: "Riesgo = Impacto / Probabilidad del evento." },
    ],
    correctAnswer: "c",
  },
  {
    question: "¿Qué es un SOC según las fuentes?",
    options: [
      { value: "a", label: "Un tipo de vulnerabilidad de seguridad." },
      { value: "b", label: "Un protocolo de comunicación segura." },
      { value: "c", label: "Un centro especializado para monitorear y responder a incidentes de seguridad." },
      { value: "d", label: "Un estándar para la gestión de riesgos en la ciberseguridad." },
    ],
    correctAnswer: "c",
  },
  {
    question: "¿Qué herramienta se menciona en las fuentes para realizar un ataque Man in the Middle?",
    options: [
      { value: "a", label: "Wireshark." },
      { value: "b", label: "Nmap." },
      { value: "c", label: "Ettercap." },
      { value: "d", label: "Tcpdump." },
    ],
    correctAnswer: "c",
  },
  {
    question: "¿Qué componente esencial forma parte de una petición HTTP según las fuentes?",
    options: [
      { value: "a", label: "El certificado digital del servidor." },
      { value: "b", label: "La línea de petición que incluye el método y el recurso solicitado." },
      { value: "c", label: "La dirección MAC del cliente." },
      { value: "d", label: "El registro de eventos del sistema operativo del cliente." },
    ],
    correctAnswer: "b",
  },
  {
    question: "¿Qué indica el encabezado `Content-Type` en una petición HTTP según las fuentes?",
    options: [
      { value: "a", label: "El idioma preferido del cliente." },
      { value: "b", label: "El sistema operativo del cliente." },
      { value: "c", label: "El tipo de datos que se envían al servidor." },
      { value: "d", label: "La dirección IP del cliente." },
    ],
    correctAnswer: "c",
  },
  {
    question: "¿Cuál es el propósito principal del código de estado HTTP 3XX según las fuentes?",
    options: [
      { value: "a", label: "Indicar un error en el servidor." },
      { value: "b", label: "Indicar un error en la solicitud del cliente." },
      { value: "c", label: "Indicar una redirección a otro recurso." },
      { value: "d", label: "Indicar que la solicitud fue recibida pero no procesada." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "¿Qué información proporciona el encabezado de respuesta `Server` en una respuesta HTTP según las fuentes?",
    options: [
      { value: "a", label: "La fecha y hora de la solicitud." },
      { value: "b", label: "Información sobre el software del servidor web." },
      { value: "c", label: "El tipo de contenido de la respuesta." },
      { value: "d", label: "La longitud del cuerpo de la respuesta." },
    ],
    correctAnswer: "b",
  },
  {
    question: "¿Cuál es una característica clave de la herramienta Postman según las fuentes?",
    options: [
      { value: "a", label: "Analiza el tráfico de red en tiempo real." },
      { value: "b", label: "Permite enviar solicitudes HTTP y recibir respuestas sin un navegador." },
      { value: "c", label: "Escanea sitios web en busca de vulnerabilidades automáticamente." },
      { value: "d", label: "Genera código en diferentes lenguajes de programación." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "¿Qué código de estado HTTP se espera en una respuesta exitosa a una petición POST que crea un nuevo recurso según las fuentes?",
    options: [
      { value: "a", label: "200 OK" },
      { value: "b", label: "201 Created" },
      { value: "c", label: "302 Found" },
      { value: "d", label: "400 Bad Request" },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "¿Qué método HTTP se utiliza para solicitar solo los encabezados de una respuesta, sin el cuerpo, según las fuentes?",
    options: [
      { value: "a", label: "GET" },
      { value: "b", label: "POST" },
      { value: "c", label: "PUT" },
      { value: "d", label: "HEAD" },
    ],
    correctAnswer: "d",
  },
  {
    question:
      "¿Qué método HTTP se describe en las fuentes como similar a PUT pero utilizado para modificar parcialmente un recurso?",
    options: [
      { value: "a", label: "DELETE" },
      { value: "b", label: "CONNECT" },
      { value: "c", label: "PATCH" },
      { value: "d", label: "TRACE" },
    ],
    correctAnswer: "c",
  },
  {
    question: "¿Cuál de las siguientes NO es un tipo de cabecera HTTP mencionada en las fuentes?",
    options: [
      { value: "a", label: "Cabeceras Generales." },
      { value: "b", label: "Cabeceras de Solicitud." },
      { value: "c", label: "Cabeceras de Respuesta." },
      { value: "d", label: "Cabeceras de Autenticación de Cliente." },
    ],
    correctAnswer: "d",
  },
  {
    question:
      "¿Qué herramienta se menciona en las fuentes para la enumeración de directorios en aplicaciones web utilizando diccionarios?",
    options: [
      { value: "a", label: "Nmap." },
      { value: "b", label: "Dirbuster." },
      { value: "c", label: "Wireshark." },
      { value: "d", label: "Metasploit." },
    ],
    correctAnswer: "b",
  },
  {
    question: "Según las fuentes sobre Bettercap, ¿qué ventaja ofrece su API REST?",
    options: [
      { value: "a", label: "Permite una configuración más compleja de los escaneos de puertos." },
      { value: "b", label: "Facilita la realización de ataques de forma programática." },
      { value: "c", label: "Simplifica la creación de módulos para la herramienta." },
      { value: "d", label: "Mejora el rendimiento de la interfaz gráfica de usuario." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "¿Cuál es el nombre de usuario y contraseña por defecto para acceder a la interfaz gráfica web de Bettercap según las fuentes?",
    options: [
      { value: "a", label: "usuario: admin, contraseña: password" },
      { value: "b", label: "usuario: user, contraseña: pass" },
      { value: "c", label: "usuario: root, contraseña: toor" },
      { value: "d", label: "usuario: bettercap, contraseña: bettercap" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Según las fuentes sobre Bettercap, ¿qué indica que se pueda acudir a sus foros en caso de problemas?",
    options: [
      { value: "a", label: "Que la herramienta es de código cerrado y requiere soporte de pago." },
      { value: "b", label: "Que la documentación oficial es limitada." },
      { value: "c", label: "Que existe una comunidad activa de usuarios que pueden ofrecer ayuda." },
      { value: "d", label: "Que la herramienta aún se encuentra en fase beta." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes sobre Bettercap, ¿qué protección ofrece la cookie HSTS en un navegador web?",
    options: [
      { value: "a", label: "Evita el seguimiento de la actividad del usuario por parte de sitios web." },
      {
        value: "b",
        label: "Asegura que las conexiones posteriores al mismo dominio se realicen siempre a través de HTTPS.",
      },
      { value: "c", label: "Cifra las cookies almacenadas en el navegador para evitar su robo." },
      { value: "d", label: "Advierte al usuario si un sitio web utiliza certificados digitales no confiables." },
    ],
    correctAnswer: "b",
  },
  {
    question: '¿Qué se indica en la fuente "U1_M1_D2.pdf" sobre la importancia del CIF?',
    options: [
      { value: "a", label: "Se utiliza para cifrar las comunicaciones de la empresa." },
      {
        value: "b",
        label: "Es el código de identificación fiscal de una persona jurídica y debe constar en las facturas.",
      },
      { value: "c", label: "Permite rastrear la ubicación física de la empresa." },
      { value: "d", label: "Sirve para autenticar el acceso a los servicios online de la empresa." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "Según las fuentes, ¿qué tipo de dispositivos se pueden encontrar utilizando dorks específicos en buscadores?",
    options: [
      { value: "a", label: "Servidores web vulnerables a ataques DDoS." },
      { value: "b", label: "Dispositivos conectados a la red como impresoras, cámaras IP y routers." },
      { value: "c", label: "Bases de datos expuestas sin autenticación." },
      { value: "d", label: "Redes Wi-Fi con contraseñas débiles." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "¿Qué se menciona en las fuentes como una forma de buscar información sobre alguien utilizando un número de teléfono?",
    options: [
      { value: "a", label: "Utilizar un motor de búsqueda especializado en registros telefónicos públicos." },
      {
        value: "b",
        label:
          "Emplear dorks específicos en buscadores añadiendo el número entre comillas y combinándolo con prefijos.",
      },
      { value: "c", label: "Acceder a bases de datos de operadores telefónicos (requiere autorización)." },
      { value: "d", label: "Utilizar herramientas de ingeniería social para obtener el número asociado a un nombre." },
    ],
    correctAnswer: "b",
  },
  {
    question: "Según las fuentes, ¿qué utilidad tiene la opción `-help` al ejecutar Metagoofil en la terminal?",
    options: [
      { value: "a", label: "Ejecuta la herramienta en modo de ayuda interactiva." },
      { value: "b", label: "Muestra la información sobre cómo funciona la herramienta y sus opciones." },
      { value: "c", label: "Abre un manual detallado de la herramienta en formato PDF." },
      { value: "d", label: "Verifica si la herramienta está correctamente instalada y configurada." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "¿Qué característica de Metagoofil se destaca en las fuentes en relación con la detección por sistemas de seguridad?",
    options: [
      { value: "a", label: "Utiliza técnicas de evasión avanzadas para ocultar su actividad." },
      { value: "b", label: "Cifra todo el tráfico de red generado durante su ejecución." },
      { value: "c", label: "No realiza interacciones activas que puedan ser detectadas como escaneos intrusivos." },
      {
        value: "d",
        label:
          "Requiere privilegios de administrador para ejecutarse, lo que dificulta su detección como proceso sospechoso.",
      },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes, ¿qué se necesita para instalar Exiftool?",
    options: [
      { value: "a", label: "Descargar el ejecutable desde el sitio web oficial e instalarlo manualmente." },
      { value: "b", label: "Utilizar los comandos del sistema operativo para instalar el paquete correspondiente." },
      { value: "c", label: "Compilar el código fuente de la herramienta." },
      { value: "d", label: "No requiere instalación, ya que es una herramienta web." },
    ],
    correctAnswer: "b",
  },
  {
    question: "Según las fuentes, ¿cuál es el comando básico para extraer metadatos de un archivo con Exiftool?",
    options: [
      { value: "a", label: "exiftool -extract nombre_archivo" },
      { value: "b", label: "metadata nombre_archivo" },
      { value: "c", label: "exiftool nombre_archivo" },
      { value: "d", label: "exiftool --metadata nombre_archivo" },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes, ¿qué acción realiza Spiderfoot al finalizar la recolección de datos?",
    options: [
      { value: "a", label: "Intenta explotar las vulnerabilidades encontradas." },
      { value: "b", label: "Genera un informe detallado en formato PDF." },
      { value: "c", label: "Realiza una correlación de los datos recopilados." },
      { value: "d", label: "Envía alertas a los administradores sobre posibles amenazas." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes, ¿qué tipo de acciones permite realizar IntelligenceX?",
    options: [
      { value: "a", label: "Realizar ataques de fuerza bruta contra servidores web." },
      { value: "b", label: "Buscar amenazas online y recopilar información de inteligencia." },
      { value: "c", label: "Analizar el tráfico de red en busca de patrones maliciosos." },
      { value: "d", label: "Descifrar contraseñas hash utilizando diferentes técnicas." },
    ],
    correctAnswer: "b",
  },
  {
    question: "Según las fuentes, ¿quién es Julián Gutiérrez y qué relación tiene con el OSINT Framework?",
    options: [
      { value: "a", label: "Es el creador de la herramienta de análisis forense Autopsy." },
      { value: "b", label: "Es un experto en seguridad que ha documentado vulnerabilidades comunes." },
      {
        value: "c",
        label: "Es un policía con experiencia en investigaciones OSINT que mantiene el sitio del OSINT Framework.",
      },
      { value: "d", label: "Es el desarrollador principal de la suite de herramientas Maltego." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes, ¿para qué se utiliza el comando `ping` en la administración de redes?",
    options: [
      { value: "a", label: "Para mostrar la configuración IP de un dispositivo." },
      { value: "b", label: "Para verificar la conectividad entre dos dispositivos de red." },
      { value: "c", label: "Para listar los servicios que se están ejecutando en un dispositivo." },
      { value: "d", label: "Para analizar el tráfico de red en tiempo real." },
    ],
    correctAnswer: "b",
  },
  {
    question: "Según las fuentes, ¿qué indica el concepto de TTL en redes?",
    options: [
      { value: "a", label: "La velocidad de transferencia de datos de un paquete." },
      { value: "b", label: "El tamaño máximo de un paquete IP." },
      {
        value: "c",
        label:
          "El tiempo de vida o el número máximo de nodos por los que puede pasar un paquete antes de ser descartado.",
      },
      { value: "d", label: "El nivel de prioridad de un paquete en la red." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Según las fuentes, ¿qué comando muestra la ruta que siguen los paquetes desde tu máquina hasta un destino?",
    options: [
      { value: "a", label: "ipconfig" },
      { value: "b", label: "netstat" },
      { value: "c", label: "traceroute / tracert" },
      { value: "d", label: "arp -a" },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Según las fuentes, ¿qué tipo de mensaje ICMP se intenta generar con el comando `traceroute` / `tracert`?",
    options: [
      { value: "a", label: "ECHO_REQUEST" },
      { value: "b", label: "ECHO_REPLY" },
      { value: "c", label: "TIME_EXCEEDED" },
      { value: "d", label: "DESTINATION_UNREACHABLE" },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Según las fuentes, ¿qué se necesita para iniciar sesión en el entorno gráfico después de loguearse en la máquina DVL?",
    options: [
      { value: "a", label: "Ejecutar el comando `sudo startx`." },
      { value: "b", label: "Reiniciar la máquina y seleccionar la opción gráfica." },
      { value: "c", label: "Ejecutar el comando `startx`." },
      { value: "d", label: "No es posible iniciar sesión en el entorno gráfico en esa máquina." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Según las fuentes, ¿qué característica importante tiene la máquina DVL en relación con los servicios que se levantan en ella?",
    options: [
      { value: "a", label: "Los servicios se inician automáticamente al arrancar la máquina." },
      {
        value: "b",
        label: "Los servicios son persistentes y se mantienen activos incluso después de apagar la máquina.",
      },
      { value: "c", label: "Es volátil, por lo que los servicios deben volverse a levantar después de apagarla." },
      { value: "d", label: "Los servicios están protegidos por un firewall que debe configurarse." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes sobre las flags TCP/IP, ¿qué indica la flag URG?",
    options: [
      { value: "a", label: "Que la conexión TCP debe cerrarse inmediatamente." },
      {
        value: "b",
        label: "Que los datos en el paquete deben ser procesados inmediatamente, antes que otros datos en la cola.",
      },
      { value: "c", label: "Que se ha establecido una conexión TCP exitosa." },
      { value: "d", label: "Que se requiere un acuse de recibo para este paquete." },
    ],
    correctAnswer: "b",
  },
  {
    question: "Según las fuentes sobre las flags TCP/IP, ¿qué indica la flag PSH?",
    options: [
      { value: "a", label: "Que el paquete debe ser descartado." },
      { value: "b", label: "Que los datos son urgentes y necesitan ser entregados y procesados inmediatamente." },
      { value: "c", label: "Que se está solicitando el establecimiento de una nueva conexión." },
      { value: "d", label: "Que se está finalizando una conexión existente." },
    ],
    correctAnswer: "b",
  },
  {
    question: "Según las fuentes sobre Nmap, ¿a qué se refiere la intensidad del escaneo?",
    options: [
      { value: "a", label: "A la velocidad de transferencia de datos durante el escaneo." },
      { value: "b", label: "Al número de puertos que se analizan." },
      {
        value: "c",
        label:
          "Al nivel de profundidad y detalle con el que se realizan los escaneos, así como la rapidez o sigilo con el que se ejecutan.",
      },
      { value: "d", label: "Al impacto en el rendimiento de la red durante el escaneo." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes sobre Nmap, ¿cuál es la intensidad de escaneo por defecto?",
    options: [
      { value: "a", label: "1" },
      { value: "b", label: "2" },
      { value: "c", label: "3" },
      { value: "d", label: "4" },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes sobre Nmap, ¿qué característica tienen los escaneos rápidos (-T4 o -T5)?",
    options: [
      { value: "a", label: "Son menos detectables por firewalls y sistemas de detección de intrusiones." },
      {
        value: "b",
        label: "Son útiles en redes confiables y cuando se necesitan resultados rápidamente, pero son más detectables.",
      },
      { value: "c", label: "Proporcionan mucha más información que los escaneos lentos." },
      { value: "d", label: "Tardan mucho más tiempo en completarse." },
    ],
    correctAnswer: "b",
  },
  {
    question: "Según las fuentes sobre Nmap, ¿qué característica tienen los escaneos lentos y sigilosos (-T0 o -T1)?",
    options: [
      { value: "a", label: "Son más fáciles de detectar por los sistemas de seguridad." },
      { value: "b", label: "Proporcionan resultados más rápidos." },
      { value: "c", label: "Son útiles para evitar la detección, pero pueden tomar mucho más tiempo en completarse." },
      { value: "d", label: "No dejan prácticamente ningún rastro en la red." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Según las fuentes sobre Nmap, ¿qué devuelve una máquina destino si un puerto TCP está abierto al recibir un SYN?",
    options: [
      { value: "a", label: "Un paquete RST." },
      { value: "b", label: "No devuelve nada." },
      { value: "c", label: "Un SYN|ACK." },
      { value: "d", label: "Un ACK." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Según las fuentes sobre Nmap, ¿qué devuelve una máquina destino si un puerto TCP está cerrado al recibir un SYN?",
    options: [
      { value: "a", label: "Un SYN|ACK." },
      { value: "b", label: "No devuelve nada." },
      { value: "c", label: "Un paquete RST." },
      { value: "d", label: "Un ACK." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Según las fuentes sobre el análisis de vulnerabilidades, ¿qué tipo de informes genera un escáner al terminar?",
    options: [
      { value: "a", label: "Informes cifrados que solo pueden ser leídos con una clave privada." },
      { value: "b", label: "Informes resumidos con solo las vulnerabilidades críticas." },
      { value: "c", label: "Informes muy completos de todas las vulnerabilidades detectadas." },
      { value: "d", label: "Informes que solo contienen los falsos positivos encontrados." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Según las fuentes sobre la gestión de vulnerabilidades, ¿por qué es importante verificar la relevancia de las vulnerabilidades detectadas por un escáner?",
    options: [
      { value: "a", label: "Para asegurarse de que el escáner ha utilizado las últimas firmas de vulnerabilidades." },
      {
        value: "b",
        label: "Porque los escáneres pueden generar falsos positivos, lo que requeriría tiempo de trabajo innecesario.",
      },
      { value: "c", label: "Para confirmar que las vulnerabilidades afectan a todos los activos de la empresa." },
      { value: "d", label: "Para obtener una puntuación de riesgo más precisa de cada vulnerabilidad." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "Según las fuentes sobre la gestión de vulnerabilidades, ¿por qué es necesario clasificar y priorizar los riesgos de las vulnerabilidades detectadas?",
    options: [
      { value: "a", label: "Para asignar responsables específicos para la reparación de cada vulnerabilidad." },
      {
        value: "b",
        label:
          "Porque es imposible arreglar todas las vulnerabilidades detectadas debido a limitaciones de tiempo, personal y presupuesto.",
      },
      { value: "c", label: "Para cumplir con las normativas de seguridad vigentes." },
      { value: "d", label: "Para facilitar la generación de informes para la alta dirección." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "Según las fuentes sobre la reparación de vulnerabilidades, ¿qué se debe hacer una vez que se han probado los parches y los cambios de configuración en una máquina?",
    options: [
      { value: "a", label: "Documentar detalladamente el proceso de prueba." },
      { value: "b", label: "Implementarlos en todas las demás máquinas en la red." },
      { value: "c", label: "Solicitar la aprobación de la alta dirección para su implementación." },
      { value: "d", label: "Realizar una nueva exploración de vulnerabilidades para verificar su efectividad." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "Según las fuentes sobre la metodología de análisis de vulnerabilidades, ¿por qué se debe mantener informada a la menor cantidad de personas durante el análisis?",
    options: [
      { value: "a", label: "Para evitar la filtración de información sensible sobre las vulnerabilidades." },
      { value: "b", label: "Para no generar pánico entre el personal de la empresa." },
      {
        value: "c",
        label:
          "Para que la utilización de la red por parte del personal sea normal y evitar cambios en sus prácticas habituales.",
      },
      {
        value: "d",
        label: "Para facilitar el trabajo del equipo de pentesting al no tener que responder preguntas del personal.",
      },
    ],
    correctAnswer: "c",
  },
  {
    question:
      'Según las fuentes sobre la metodología de análisis de vulnerabilidades, ¿qué se pretende demostrar a través del "análisis interior"?',
    options: [
      { value: "a", label: "La capacidad de un atacante externo para acceder a la red de la empresa." },
      { value: "b", label: "La eficacia de las medidas de seguridad perimetrales." },
      {
        value: "c",
        label: "Hasta dónde es posible llegar utilizando los privilegios de un usuario típico dentro de la empresa.",
      },
      { value: "d", label: "Las vulnerabilidades presentes en los servidores públicos de la empresa." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes sobre OpenVas, ¿qué se necesita hacer antes de lanzar un escaneo?",
    options: [
      { value: "a", label: "Configurar las políticas de escaneo detalladamente." },
      { value: "b", label: "Asegurarse de que todo esté sincronizado." },
      { value: "c", label: "Desactivar el firewall en la máquina objetivo." },
      { value: "d", label: "Obtener las credenciales de administrador de la máquina objetivo." },
    ],
    correctAnswer: "b",
  },
  {
    question: "Según las fuentes sobre OpenVas, ¿qué opciones de personalización ofrece para los escaneos?",
    options: [
      { value: "a", label: "Limitar el tiempo de duración del escaneo." },
      {
        value: "b",
        label: "Clonar escaneos, elegir el tipo de escaneo e incluso añadir puertos específicos a investigar.",
      },
      { value: "c", label: "Excluir ciertas vulnerabilidades del informe final." },
      { value: "d", label: "Modificar la severidad de las vulnerabilidades detectadas." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "Según las fuentes sobre OpenVas, ¿dónde se pueden revisar las vulnerabilidades detectadas en un informe?",
    options: [
      { value: "a", label: 'En la sección de "alertas críticas".' },
      { value: "b", label: "En un archivo CSV adjunto al informe." },
      { value: "c", label: 'En el apartado "vulnerabilidades" del informe.' },
      { value: "d", label: "En un resumen gráfico al inicio del informe." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes, ¿cuál fue la primera versión estándar y ampliamente utilizada del protocolo HTTP?",
    options: [
      { value: "a", label: "HTTP/2" },
      { value: "b", label: "HTTP/3" },
      { value: "c", label: "HTTP/1.0" },
      { value: "d", label: "HTTP/0.9" },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes, ¿qué mejora principal introdujo HTTP/1.1 en comparación con HTTP/1.0?",
    options: [
      { value: "a", label: "Mayor seguridad en la transferencia de datos." },
      {
        value: "b",
        label: "Conexiones persistentes, lo que permitía reutilizar la misma conexión TCP para múltiples solicitudes.",
      },
      { value: "c", label: "Soporte nativo para cifrado SSL/TLS." },
      { value: "d", label: "Transferencia de datos más eficiente mediante el uso de un protocolo binario." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "Según las fuentes sobre peticiones HTTP, ¿qué herramienta permite enviar solicitudes y recibir respuestas sin necesidad de un navegador?",
    options: [
      { value: "a", label: "Wireshark" },
      { value: "b", label: "Burp Suite" },
      { value: "c", label: "Postman" },
      { value: "d", label: "Nmap" },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Según las fuentes sobre peticiones HTTP con Postman, ¿qué método se utiliza para obtener un recurso específico del servidor?",
    options: [
      { value: "a", label: "POST" },
      { value: "b", label: "PUT" },
      { value: "c", label: "DELETE" },
      { value: "d", label: "GET" },
    ],
    correctAnswer: "d",
  },
  {
    question: "Según las fuentes sobre cabeceras HTTP, ¿cómo se representa cada cabecera en una petición o respuesta?",
    options: [
      { value: "a", label: "Como un objeto JSON con clave y valor." },
      {
        value: "b",
        label:
          "Como una cadena de caracteres insensible a mayúsculas y minúsculas, seguida por dos puntos (:) y un valor específico.",
      },
      { value: "c", label: "En formato XML con etiquetas específicas para el nombre y el valor." },
      { value: "d", label: "Como un array de bytes codificado en UTF-8." },
    ],
    correctAnswer: "b",
  },
  {
    question: "Según las fuentes, ¿qué tipo de información proporcionan las cabeceras generales HTTP?",
    options: [
      { value: "a", label: "Detalles sobre el contenido específico de los datos enviados o solicitados." },
      { value: "b", label: "Información sobre el navegador o cliente que realiza la solicitud." },
      {
        value: "c",
        label: "Información sobre el mensaje HTTP en general, sin estar relacionadas específicamente con los datos.",
      },
      { value: "d", label: "Directivas para el servidor sobre cómo procesar la solicitud." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      'Según las fuentes, ¿qué información se puede encontrar en la pestaña "Application" de las herramientas de desarrollador del navegador?',
    options: [
      { value: "a", label: "Datos del rendimiento de carga de la página." },
      { value: "b", label: "Registros de la memoria utilizada por la web." },
      { value: "c", label: "Las cookies que tiene el sitio web." },
      { value: "d", label: "Información sobre la seguridad del sitio web." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes, ¿qué herramienta se menciona para la enumeración de directorios en aplicaciones web?",
    options: [
      { value: "a", label: "Nmap" },
      { value: "b", label: "Dirbuster" },
      { value: "c", label: "Metasploit" },
      { value: "d", label: "SQLMap" },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "Según las fuentes, ¿cómo se puede intentar una búsqueda sencilla de directorios en muchas páginas web sin usar herramientas especializadas?",
    options: [
      { value: "a", label: "Analizando el código fuente HTML de la página." },
      { value: "b", label: "Añadiendo `/robots.txt` al final de la URL." },
      { value: "c", label: "Utilizando operadores de búsqueda avanzados en Google." },
      { value: "d", label: "Inspeccionando los encabezados de respuesta HTTP." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "Según las fuentes, ¿cuál es el nombre de la herramienta de OWASP mencionada para realizar pruebas de seguridad en aplicaciones web?",
    options: [
      { value: "a", label: "Burp Suite" },
      { value: "b", label: "Dirbuster" },
      { value: "c", label: "ZAP (Zed Attack Proxy)" },
      { value: "d", label: "Nikto" },
    ],
    correctAnswer: "c",
  },
  {
    question: 'Según las fuentes sobre Burp Suite Intruder, ¿qué se configura en la pestaña "Positions"?',
    options: [
      { value: "a", label: "Las opciones generales del ataque, como el número de threads." },
      { value: "b", label: "Las listas de palabras o datos de entrada que se usarán en el ataque." },
      { value: "c", label: "Las posiciones o campos en la solicitud que se desean manipular para el ataque." },
      { value: "d", label: "Los ajustes de personalización del ataque, como los límites de tiempo." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes sobre Burp Suite Repeater, ¿para qué es útil esta herramienta?",
    options: [
      { value: "a", label: "Para analizar pasivamente el tráfico HTTP/S." },
      { value: "b", label: "Para realizar escaneos automatizados de vulnerabilidades." },
      { value: "c", label: "Para enviar y modificar manualmente las solicitudes HTTP y realizar pruebas específicas." },
      { value: "d", label: "Para analizar la aleatoriedad de tokens y cookies." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      'Según las fuentes sobre Burp Suite Scanner (solo en la versión Pro), ¿qué se muestra en la subpestaña "Issues"?',
    options: [
      { value: "a", label: "El tráfico HTTP/S interceptado por el proxy." },
      { value: "b", label: "El mapa del sitio web descubierto." },
      { value: "c", label: "Una lista de vulnerabilidades encontradas, con detalles sobre cada una." },
      { value: "d", label: "El progreso en tiempo real del escaneo." },
    ],
    correctAnswer: "c",
  },
  {
    question: 'Según las fuentes sobre Burp Suite Comparer, ¿qué permite realizar la función "Paste"?',
    options: [
      { value: "a", label: "Pegar una solicitud HTTP previamente guardada para enviarla." },
      { value: "b", label: "Pegar un certificado digital para su análisis." },
      { value: "c", label: "Pegar dos conjuntos de datos para compararlos en búsqueda de diferencias." },
      { value: "d", label: "Pegar una lista de URLs para agregarlas al mapa del sitio." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes sobre Burp Suite Sequencer, ¿qué analiza esta herramienta?",
    options: [
      { value: "a", label: "El rendimiento del servidor web." },
      { value: "b", label: "La estructura de los directorios del sitio web." },
      { value: "c", label: "La aleatoriedad y entropía de tokens y cookies." },
      { value: "d", label: "El tiempo de respuesta de las solicitudes HTTP." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Según las fuentes sobre los filtros en Burp Suite Proxy, ¿qué tipo de filtro permite buscar palabras específicas dentro del cuerpo de las solicitudes o respuestas?",
    options: [
      { value: "a", label: "Filtro por código de estado HTTP." },
      { value: "b", label: "Filtro por tamaño de respuesta." },
      { value: "c", label: "Filtro por dominio." },
      { value: "d", label: "Filtro por palabras clave o expresiones regulares." },
    ],
    correctAnswer: "d",
  },
  {
    question:
      "Según las fuentes sobre los filtros en Burp Suite Target (Site Map), ¿cuál es el objetivo principal de estos filtros?",
    options: [
      { value: "a", label: "Analizar el contenido de las respuestas del servidor." },
      { value: "b", label: "Ayudar a organizar la visualización del mapa de la aplicación." },
      { value: "c", label: "Identificar peticiones con tiempos de respuesta anómalos." },
      { value: "d", label: "Filtrar por el tipo de contenido de las respuestas." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "Según las fuentes sobre los filtros en Burp Suite Intruder, ¿qué se puede filtrar para identificar posibles resultados exitosos en un ataque de fuerza bruta?",
    options: [
      { value: "a", label: "Solamente las respuestas con código de estado 401 Unauthorized." },
      { value: "b", label: "Las respuestas con el tamaño más pequeño." },
      {
        value: "c",
        label: "Las respuestas 200 OK con tiempos de respuesta más largos o tamaños que difieren del patrón habitual.",
      },
      { value: "d", label: "Solamente las respuestas que contienen encabezados específicos." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Según las fuentes sobre los filtros en Burp Suite Scanner, ¿qué tipo de filtro permite mostrar solo ciertos tipos de problemas de seguridad?",
    options: [
      { value: "a", label: "Filtro por URL de la vulnerabilidad." },
      { value: "b", label: "Filtro por la fecha en que se descubrió la vulnerabilidad." },
      { value: "c", label: "Filtro por tipo de vulnerabilidad, como SQL Injection o XSS." },
      { value: "d", label: "Filtro por el usuario que realizó el escaneo." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes, ¿cuál es una ventaja principal de la autenticación mediante redes sociales?",
    options: [
      { value: "a", label: "Mayor seguridad al utilizar proveedores de identidad confiables." },
      { value: "b", label: "No hace falta crear una cuenta aparte de forma manual." },
      { value: "c", label: "Mayor control sobre los datos personales compartidos." },
      { value: "d", label: "Anonimato al no tener que revelar información personal directamente al sitio web." },
    ],
    correctAnswer: "b",
  },
  {
    question: 'Según las fuentes, ¿en qué consiste un ataque de "password spraying"?',
    options: [
      { value: "a", label: "En probar todas las combinaciones posibles de caracteres para una cuenta específica." },
      {
        value: "b",
        label:
          "En utilizar una lista de contraseñas comunes y probarlas a intervalos prolongados en muchas cuentas diferentes.",
      },
      { value: "c", label: "En intentar adivinar la contraseña de un usuario basándose en su información personal." },
      { value: "d", label: "En interceptar las credenciales de un usuario durante el proceso de inicio de sesión." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "Según las fuentes sobre ataques de fuerza bruta, ¿qué factor incrementa la efectividad de estos ataques?",
    options: [
      { value: "a", label: "El uso de contraseñas complejas y aleatorias." },
      { value: "b", label: "La implementación de bloqueos de cuenta tras múltiples intentos fallidos." },
      { value: "c", label: "El uso de contraseñas débiles, cortas o comunes por parte de los usuarios." },
      { value: "d", label: "La activación de la autenticación de dos factores." },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Según las fuentes sobre diccionarios para ataques de fuerza bruta, ¿cuál es una característica del diccionario Rockyou?",
    options: [
      { value: "a", label: "Es un diccionario pequeño ideal para pruebas rápidas." },
      { value: "b", label: "Es un diccionario de contraseñas comunes que permite realizar ataques básicos." },
      { value: "c", label: "Es un diccionario de gran tamaño que contiene contraseñas complejas." },
      { value: "d", label: "No está disponible por defecto en Kali Linux." },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "Según las fuentes sobre diccionarios para ataques de fuerza bruta, ¿cuál es una característica del diccionario Kaonashi?",
    options: [
      { value: "a", label: "Es un diccionario pequeño y ligero, ideal para sistemas con pocos recursos." },
      {
        value: "b",
        label: "Es un diccionario de gran tamaño (aproximadamente 11 GB descomprimido) adecuado para equipos potentes.",
      },
      { value: "c", label: "Está incluido por defecto en Kali Linux." },
      { value: "d", label: "Se enfoca principalmente en contraseñas relacionadas con aplicaciones web." },
    ],
    correctAnswer: "b",
  },
  {
    question: "Según las fuentes sobre la herramienta Crunch, ¿para qué se utiliza principalmente?",
    options: [
      { value: "a", label: "Para analizar archivos de contraseñas ya existentes." },
      { value: "b", label: "Para cifrar y descifrar contraseñas." },
      { value: "c", label: "Para generar listas de palabras (wordlists) personalizadas para ataques de fuerza bruta." },
      { value: "d", label: "Para realizar ataques de diccionario directamente." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según la sintaxis básica de Crunch mencionada en las fuentes, ¿qué especifica el parámetro `<min>`?",
    options: [
      { value: "a", label: "El conjunto de caracteres a utilizar." },
      { value: "b", label: "La longitud máxima de caracteres deseada." },
      { value: "c", label: "La longitud mínima de caracteres deseada." },
      { value: "d", label: "La ruta donde se guardará el archivo del diccionario." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes sobre la herramienta Cewl, ¿cuál es su principal característica?",
    options: [
      { value: "a", label: "Generar diccionarios basados en patrones específicos definidos por el usuario." },
      { value: "b", label: "Extraer palabras clave de sitios web para crear diccionarios personalizados." },
      { value: "c", label: "Combinar múltiples diccionarios existentes en uno solo." },
      { value: "d", label: "Realizar ataques de fuerza bruta directamente contra un objetivo." },
    ],
    correctAnswer: "b",
  },
  {
    question: "Según las fuentes sobre la herramienta Cupp, ¿qué se necesita para ejecutarla en modo interactivo?",
    options: [
      { value: "a", label: "Ejecutar el comando `cupp -g` y proporcionar la URL del objetivo." },
      { value: "b", label: "Ejecutar el comando `cupp -w` y especificar el archivo de salida." },
      { value: "c", label: "Ejecutar el comando `cupp -i`." },
      { value: "d", label: "Ejecutar el comando `sudo cupp`." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes sobre la herramienta DyMerge, ¿para qué está diseñada principalmente?",
    options: [
      { value: "a", label: "Para generar diccionarios de contraseñas basados en información personal." },
      { value: "b", label: "Para realizar ataques de diccionario de forma eficiente." },
      { value: "c", label: "Para combinar o fusionar de forma eficiente diccionarios de contraseñas existentes." },
      { value: "d", label: "Para analizar la fortaleza de las contraseñas de un sistema." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes sobre la herramienta PyDictor, ¿qué tipo de combinaciones avanzadas permite configurar?",
    options: [
      { value: "a", label: "Solo combinaciones de letras y números." },
      { value: "b", label: "Solo combinaciones basadas en fechas importantes." },
      { value: "c", label: "Combinaciones de palabras, fechas importantes, nombres, números telefónicos, etc." },
      { value: "d", label: "Solo combinaciones generadas aleatoriamente sin ningún patrón." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes sobre Burp Suite Intruder para ataques de fuerza bruta, ¿qué acción se realiza después de capturar la petición y enviarla a Intruder?",
    options: [
      { value: "a", label: "Se inicia el ataque automáticamente con una lista de contraseñas por defecto." },
      { value: "b", label: "Se analiza la respuesta del servidor en busca de vulnerabilidades." },
      { value: "c", label: "Se seleccionan el nombre de usuario y la contraseña como las posiciones donde se insertarán los payloads." },
      { value: "d", label: "Se configura el tipo de ataque (por ejemplo, sniper, battering ram)." },
    ],
    correctAnswer: "c",
  },
  {
    question: "Según las fuentes sobre Burp Suite Intruder para ataques de fuerza bruta, ¿qué código de respuesta HTTP se debe buscar generalmente como indicativo de un intento de inicio de sesión exitoso?",
    options: [
      { value: "a", label: "401 Unauthorized" },
      { value: "b", label: "500 Internal Server Error" },
      { value: "c", label: "302 Found (redirección)" },
      { value: "d", label: "200 OK (puede indicar éxito, aunque se debe analizar el contenido y tamaño de la respuesta)" },
    ],
    correctAnswer: "d",
  },
  {
    question: "Según las fuentes sobre Burp Suite Intruder para ataques de fuerza bruta, ¿qué otra información en la respuesta del servidor puede dar pistas sobre un inicio de sesión exitoso además del código de estado?",
    options: [
      { value: "a", label: "El tipo de servidor web utilizado." },
      { value: "b", label: "La presencia de encabezados de seguridad específicos." },
      { value: "c", label: "El tamaño de la respuesta (length) y el tiempo de respuesta (Response Received)." },
      { value: "d", label: "La codificación del cuerpo de la respuesta." },
    ],
    correctAnswer: "c",
  },
]
