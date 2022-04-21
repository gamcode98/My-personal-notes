## Estructura de ficheros en Angular

### Archivos de configuración

- **tsconfig.spec.json** es el archivo de testing
- **tsconfig.json** es donde están las configuraciones de typescript
- **tsconfig.app.json** extiende del archivo anterior.
- **package.json** se encuentran los scripts que se pueden usar, dependencias, etc.
- **angular.json** se pueden indicar reglas como en donde se guardará el proyecto cuando se haga el **build**
  - _outputPath_ es el directorio final.
  - _styles_ aqui se puede agregar bootstrap.
  - _budgets_ se puede indicar cuanto se quiere que ocupe la aplicación como mínimo y máximo.

### La carpeta src

- _styles.css_ es el fichero de estilos global.
- _main.ts_ es el encargado de levantar la aplicación
- _index.html_ es donde Angular inyecta todo el código que se genere

### La carpeta app

- Es donde se crean los componentes, servicios, etc.
- _app.component.html_ es el segundo archivo html principal de la aplicación.
- _app.component.ts_ es el archivo asociado al html, es donde se escribe la lógica
- _app.module.ts_ es el módulo principal de la aplicación.

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent], //Se pueden declarar otros componentes que no tengan modulo propio
  imports: [BrowserModule, AppRoutingModule], //Se puede inyectar otros modulos
  providers: [], //Se puede inyectar servicios
  bootstrap: [AppComponent], //Es el componente inicial que se lanza en la aplicación
})
export class AppModule {}
```

### La carpeta assets

- Se puede tener imagenes, fuentes.

### La carpeta environments

- Los ficheros se los usa para crear variables en la aplicación, como por ejemplo una url de una api
