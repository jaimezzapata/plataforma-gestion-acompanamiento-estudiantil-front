# StudenCare - Plataforma de Gestión y Acompañamiento Estudiantil

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

StudenCare es una plataforma web moderna diseñada para facilitar la gestión y el acompañamiento estudiantil en instituciones educativas. Proporciona herramientas intuitivas para el seguimiento del progreso académico, gestión de perfiles y administración de notas.

## 📋 Descripción

StudenCare busca optimizar los procesos de acompañamiento estudiantil mediante una interfaz amigable que permite a coordinadores y personal educativo:

- Gestionar perfiles de estudiantes
- Realizar seguimiento académico
- Administrar y consultar calificaciones
- Monitorear el progreso estudiantil
- Facilitar la comunicación entre el personal educativo

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca principal para la construcción de la interfaz de usuario
- **Vite 7.1.7** - Herramienta de construcción y desarrollo rápido
- **React Router DOM 7.9.3** - Enrutamiento del lado del cliente
- **SweetAlert2 11.23.0** - Alertas y notificaciones interactivas

### Herramientas de Desarrollo
- **ESLint 9.36.0** - Linting y análisis de código
- **JSON Server 1.0.0-beta.3** - API REST simulada para desarrollo
- **Vite Plugin React SWC** - Compilación rápida con SWC

### Estilos y Diseño
- **CSS3** - Estilos personalizados y responsive design
- **Google Fonts** - Tipografías Roboto y Montserrat
- **CSS Variables** - Sistema de colores y temas consistente

## 📦 Instalación

### Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/jaimezzapata/plataforma-gestion-acompanamiento-estudiantil-front.git
   cd plataforma-gestion-acompanamiento-estudiantil-front
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir la aplicación**
   La aplicación estará disponible en `http://localhost:5173`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la construcción de producción
- `npm run lint` - Ejecuta el linter ESLint
- `npm run server` - Inicia el servidor JSON para desarrollo

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx      # Barra de navegación
│   ├── Footer.jsx      # Pie de página
│   └── ProtegerRuta.jsx # Protección de rutas privadas
├── pages/              # Páginas principales
│   ├── Home.jsx        # Página de inicio
│   ├── Login.jsx       # Página de autenticación
│   ├── Perfil.jsx      # Gestión de perfiles
│   └── Notas.jsx       # Gestión de calificaciones
├── routes/             # Configuración de rutas
│   └── routerApp.jsx   # Definición de rutas
├── utils/              # Utilidades y helpers
│   ├── alertas.js      # Funciones de alertas
│   ├── dataBase.js     # Datos simulados
│   └── funciones.js    # Funciones auxiliares
└── assets/             # Recursos estáticos
```

## 🔧 Funcionalidades

### Autenticación
- Sistema de login seguro
- Protección de rutas privadas
- Gestión de tokens de acceso
- Persistencia de sesión

### Gestión de Usuarios
- Perfiles de coordinadores y personal educativo
- Información personalizada por usuario
- Sistema de roles y permisos

### Navegación
- Interfaz responsive y moderna
- Navegación intuitiva entre módulos
- Breadcrumbs y estado de navegación

### Alertas y Notificaciones
- Notificaciones de éxito y error
- Confirmaciones de acciones
- Redirecciones automáticas

## 🤝 Cómo Colaborar

### Para Contribuidores

1. **Fork del repositorio**
   ```bash
   git fork https://github.com/jaimezzapata/plataforma-gestion-acompanamiento-estudiantil-front.git
   ```

2. **Crear una rama para tu feature**
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. **Realizar cambios y commits**
   ```bash
   git add .
   git commit -m "feat: descripción de la nueva funcionalidad"
   ```

4. **Push a tu fork**
   ```bash
   git push origin feature/nueva-funcionalidad
   ```

5. **Crear un Pull Request**
   - Describe claramente los cambios realizados
   - Incluye capturas de pantalla si es necesario
   - Menciona cualquier issue relacionado

### Estándares de Código

- Seguir las reglas de ESLint configuradas
- Usar nombres descriptivos para variables y funciones
- Mantener componentes pequeños y reutilizables
- Documentar funciones complejas
- Escribir CSS modular y responsive


## 🎯 Propósito y Objetivos

StudenCare tiene como objetivo principal **modernizar y centralizar** los procesos de acompañamiento estudiantil, proporcionando:

1. **Eficiencia Operativa**: Reducir tiempos en tareas administrativas
2. **Seguimiento Integral**: Visión completa del progreso estudiantil
3. **Experiencia de Usuario**: Interfaz intuitiva y accesible
4. **Escalabilidad**: Arquitectura preparada para crecimiento futuro
5. **Colaboración**: Facilitar el trabajo en equipo del personal educativo

## 📱 Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge (últimas versiones)
- **Dispositivos**: Desktop, tablet, móvil (responsive design)
- **Resoluciones**: Optimizado desde 320px hasta 1920px+

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo de Desarrollo

- **Jaime Zapata** - Desarrollador Principal y Coordinador del Proyecto

## 📞 Contacto y Soporte

Para preguntas, sugerencias o soporte técnico:

- 📧 Email: [jaimezzapata@github.com]
- 🐙 GitHub: [@jaimezzapata](https://github.com/jaimezzapata)
- 📱 Issues: [Reportar un problema](https://github.com/jaimezzapata/plataforma-gestion-acompanamiento-estudiantil-front/issues)

---

⭐ **¡No olvides dar una estrella al proyecto si te resulta útil!** ⭐
