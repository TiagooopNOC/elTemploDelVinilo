# El Templo del Vinilo

Single Page Application de e-commerce desarrollada con React. La aplicacion
permite explorar un catalogo de vinilos, filtrar productos por categoria,
consultar sus detalles, administrar un carrito y registrar ordenes de compra
en Firebase Firestore.

## Requisitos previos

Antes de instalar el proyecto se necesita:

- Node.js 20.19 o superior.
- npm, incluido con Node.js.
- Una clave de API valida para el proyecto de Firebase.

Para comprobar las versiones instaladas:

```bash
node --version
npm --version
```

## Instalacion

1. Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

2. Entrar en la carpeta del proyecto:

```bash
cd elTemploDelVinilo
```

3. Instalar las dependencias:

```bash
npm install
```

4. Crear un archivo `.env` en la raiz del proyecto:

```env
VITE_API_KEY=TU_CLAVE_DE_FIREBASE
```

El archivo `.env` no se incluye en el repositorio. La clave necesaria debe ser
solicitada por el medio indicado para la entrega.

## Ejecucion local

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrara en la terminal la direccion local de la aplicacion, normalmente:

```text
http://localhost:5173
```

## Verificacion

Comprobar la calidad del codigo con ESLint:

```bash
npm run lint
```

Generar la version de produccion:

```bash
npm run build
```

El resultado se guardara en la carpeta `dist`.

Para probar localmente la version compilada:

```bash
npm run preview
```

## Firebase

La aplicacion utiliza las siguientes colecciones de Firestore:

- `items`: contiene los productos del catalogo.
- `orders`: almacena las ordenes generadas durante el checkout.

Para que el catalogo y las compras funcionen correctamente, el proyecto de
Firebase debe tener ambas colecciones y reglas que permitan las operaciones
necesarias.

## Scripts disponibles

| Comando | Descripcion |
| --- | --- |
| `npm run dev` | Inicia el entorno de desarrollo. |
| `npm run lint` | Analiza el codigo con ESLint. |
| `npm run build` | Genera la aplicacion para produccion. |
| `npm run preview` | Ejecuta una vista previa del build. |

## Tecnologias principales

- React
- React Router
- Firebase Firestore
- React Context
- Tailwind CSS
- Vite
