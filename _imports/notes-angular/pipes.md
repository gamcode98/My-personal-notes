## Pipes

Los pipes son una herramienta de Angular que nos permite transformar visualmente la información, por ejemplo, cambiar un texto a mayúsculas o minúsculas, o darle formato de fecha y hora. Los pipes reciben un dato, y pueden transformar ese dato. Entonces, se puede decir que su cometido principal es transformar data.

### Los pipes pueden ser puros o impuros

De forma predeterminada, los pipes, se definen como puros, de modo que Angular ejecuta el Pipe solo cuando detecta un cambio puro en el valor de entrada. Mientras que los pipes que son impuros cada vez que se ejecuta el ciclo de detección de cambios en angular, el volverá a transformar esa data aunque esa data no haya cambiado.

### Pipes propios de Angular

Ejemplo:

```html
<p>{{'6/1/15, 9:03 AM' | date:'full'}}</p>
<p>My birhtday: {{'6/1/15, 9:03 AM' | date:'short' | uppercase}}</p>
<p>My birhtday: {{'99' | currency:'EUR' }}</p>
<p>My birhtday: {{'99' | currency:'ARG' }}</p>
```

### Pipes personalizados

Ver documentación:

```console
ng g pipe filter
```

```typescript
//filter.ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(value: string[], arg: string): string[] {
    let result: string[] = [];

    for (const value of values) {
      if (value.indexOf(arg) > -1) {
        result = [...result, value];
      }
    }
    return result;
  }
}
```

```html
<!--app.component.ts-->
<input type="text" [(ngModel)]="criterio" />
```

```typescript
// app.component.ts
export class AppComponent {
  criterio = "";
}
```
