## Componentes

### ¿Qué es un componente en Angular?

Un componente básicamente es markup, meta-data y clase, todo esto combinado crea una UI (User Interface).

### Crear componente con la cli de Angular

\<nombre> es el nombre del componente

```console
ng g c <button>
```

### Inyectar un componente

```typescript
//archivo button.component.ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-button", //Nombre de la etiqueta del componente
  templateUrl: "./button.component.html", //Ruta del contenido html del componente
  styleUrls: ["./button.component.css"], //Ruta de los estilos del componente
})
export class ButtonComponent implements OnInit {
  //Lógica del componente
  constructor() {}

  ngOnInit(): void {}
}
```

Se lo inyecta al archivo **app.component.html** de la siguiente manera

```html
<!--archivo app.component.html-->
<app-button></app-button>
```
