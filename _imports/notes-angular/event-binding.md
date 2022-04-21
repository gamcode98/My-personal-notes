## Event binding

Para vincular a un evento, utiliza la sintaxis de vinculación de eventos Angular.

Esta sintaxis consta de un nombre de evento de destino entre paréntesis a la izquierda de un signo igual y una declaración de plantilla entre comillas a la derecha.
En el siguiente ejemplo, el nombre del evento de destino es click y la instrucción de la plantilla es onSave().

![event-binding](./../../assets/images/event-binding-angular.png)

Nos permite escuchar y responder a acciones del usuario, como por ejemplo: pulsasiones de teclas, movimientos del mouse, clicks.

```css
.selected {
  background-color: rebeccapurple;
  color: white;
  padding: 1rem;
}

.unSelected {
  background-color: white;
  color: black;
}

.red {
  color: red;
}
```

```html
<!--app.component.html-->
<ul>
  <li
    *ngFor="let city of cities"
    (click)="onCityClicked(city)"
    [ngClass]="{'selected':city===selection}"
  >
    {{city}}
  </li>
</ul>

<div *ngIf="selection">
  <p>Your city is: {{selection}}</p>
  <button (click)="onClear()">Clear your selection</button>
</div>
```

```typescript
//app.component.ts
name!: string;
selection!: string;
cities = ["Barcelona", "Madrid", "Lima"];

onCityClicked(city: string):void{
  console.log("City ->", city);
  this.selection = city;
}
onClear():void{
  this.selection = "";
}
```
