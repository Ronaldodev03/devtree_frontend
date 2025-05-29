# devtree

### commands

- npm create vite@latest .
- npm install react@18.3.1 react-dom@18.3.1
- npm install -D @types/react@18.3.18 @types/react-dom@18.3.5
- npm i -D tailwindcss@3 postcss autoprefixer
- npx tailwindcss init -p
- npm i react-router-dom@6.21.3

### flow

- En el router: Si intento acceder a "/admin" entro en el layout <AppLayout />, pero no estoy authenticated me va a llevar a "auth/login", el cual tiene el layout <AuthLayout />, que no muestra ningun header, solo el logo. <LoginView /> y <RegisterView /> solo tendran los respectivos formularios. Si sí estoy authenticared entonces nos lleva a <Devtree />, ahí si tengo un header <Header />, el cual tiene el logo y <HomeNavigation /> o <AdminNavigation /> dependiendo de si estoy en "/" o no; En <HomeView /> tambien tenemos el <Header />.

- Problema en el router: Estoy viendo que yo podría estar logeado, ir a home (donde se me mostraría la navigation con login/register) y entrar a login y logearme de nuevo a pesar de ya estar logeado, hay que arreglar eso, puede ser haciendo en <AuthLayout /> lo que se hizo en <AppLayout />, es decir, chequear si esta el usuario y hacer una redireccion accordingly
