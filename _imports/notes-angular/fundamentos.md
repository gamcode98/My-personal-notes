# Angular

## Instalación de Angular CLI

```console
npm i -g @angular/cli
```

## Comandos de Angular para correr un proyecto

- Siguiente comando a ejecutar es : `ng version`
- Comando para crear un proyecto: `ng new my-app`
- Correr servidor en Angular: `ng serve`, con la opción `-o` abre el navegador por defecto.
- Cambiar de puerto: `ng serve -o --port=3500`
- Con `ng version` dentro de un proyecto podemos ver las dependencias que trae el proyecto.

## Estructura de un proyecto en Angular

- La carpeta **src** es donde se desarrolla.
- El archivo **.browserslistrc** figuran los navegadores a los cuales se les puede dar soporte.
- El archivo **.editorconfig** se establecen las normativas para trabajar en equipo (identación, etc), hay que tener instalado la extesión en **vscode**.
- Una extensión para **vscode** que ayuda en el desarrollo es **Angular Language Service**
- Una recomendación es agregar un archivo **.nvmrc** en el proyecto e indicar la versión que se está utilizando de **node**.

## Comandos básicos de TypeScript para usar en Angular

- Asignar tipo de dato:

```TypeScript
const username: string | number = 'gamcode';
//Se está diciendo que username puede ser de tipo string o number
```

- Ejemplo de una función suma:

```TypeScript
  const suma = (a: number, b : number)=>{
    return a + b;
  }
  suma(2,"asdad") //Marca error de sintaxis en vscode algo que no sucede con vanilla JS
```

> Angular usa el concepto de POO

- Ejemplo:

```TypeScript
class Person {
  age: number;
  lastName: string;

  constructor(age: number, lastName: string){
    this.age = age;
    this.lastName = lastName
  }
}
```

- Otra forma de hacer lo mismo:

```TypeScript
class Person {
  constructor(public age: number, public lastName: string) {}
}
```

- Se lo puede usar:

```TypeScript
  const gabriel = new Person(23,"Mamani")
  gabriel.age
```

## String Interpolation

La forma en la que desde la lógica (TypeScript) se puede pasar datos a reenderizar a los templates (vista).

- Ejemplo:

```TypeScript
<h2>{{"Hello world".repeat(5)}}</h2>
<p>3 + 3 = {{3+3}}</p>
```

En la carpeta **src** hay un archivo **app.component.ts** en donde hay configuraciones que indican en donde se va a reendirazar la vista y variables que se pueden reenderizar.

```TypeScript

//Archivo app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Gabriel';
  img = "https://placeimg.com/640/480/any"
}
//Las variables deben tener acceso público, por defecto lo es
```

```html
<!--Archivo app.component.html-->
<h3>Hi, I'm {{name}}</h3>
<img src="{{img}}" alt="image" />
```

## Property [Binding]

Es la forma en la que se puede modificar atributos desde el controlador y mandarlos a la vista

```TypeScript
//Archivo app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  img = 'https://placeimg.com/200/200/any';
  name = 'Gabriel';
  number = 12;
  btnDisabled = true;
  thing = {
    name: 'Gabriel',
    number: 21,
    img: 'https://placeimg.com/200/200/any',
  };
}
```

```html
<!--Archivo app.component.html-->
<h2>Propiedades</h2>
<button [disabled]="btnDisabled">Enviar</button>
<input type="text" [value]="name" />
<progress max="100" [value]="number"></progress>
<img [src]="img" alt="image" />
<br />
<h2>Propiedades usando un objeto</h2>
<button [disabled]="btnDisabled">Enviar</button>
<input type="text" [value]="thing.name" />
<progress max="100" [value]="thing.number"></progress>
<img [src]="thing.img" alt="image" />
```

## ¿String Interpolation o Property [Binding]?

- **String Interpolation** se lo usar para ingresar contenido como en un párrafo, h1 en donde se lo necesite reenderizarlo.

- **Property [Binding]** es especificamente para propiedades de las etiquetas HTML

**Nota**: Si se están usando **Objetos** es más recomendable usar **Property Binding**

## Event Binding

```html
<!--Archivo app.component.html-->
<h1>Eventos</h1>
<button [disabled]="btnDisabled">Enviar</button>
<button (click)="toggleButton()">Toggle Button</button>
<br />
<button (click)="increaseNumber()">Number ++</button>
<p>Number: {{thing.number}}</p>
```

```TypeScript
//Archivo app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  img = 'https://placeimg.com/200/200/any';
  name = 'Gabriel';
  number = 12;
  btnDisabled = true;
  thing = {
    name: 'Gabriel',
    number: 21,
    img: 'https://placeimg.com/200/200/any',
  };
  //Puede ser public o private, pero si se lo quiere usar en el componente debe ser public (por defecto)
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  increaseNumber() {
    this.thing.number += 1;
  }
}
```

## Otros eventos que escuchar

- Keyup, Scroll

```html
<!--Archivo app.component.html-->
<div class="box" (scroll)="onScroll($event)">
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
    quidem incidunt adipisci quod saepe non. Ratione tempore incidunt et, quo
    eaque illo accusantium neque eveniet necessitatibus qui, consectetur
    eligendi vel. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Temporibus earum distinctio laboriosam unde porro dicta iure nam deleniti
    animi, officia, ad at odit repellendus provident error numquam eaque
    tempore! Maxime!
  </p>
</div>
<p>Nombre {{thing.name}}</p>
<input type="text" [value]="thing.name" (keyup)="changeName($event)" />
```

```css
//Archivo app.component.scss
.box {
  height: 200px;
  width: 200px;
  overflow: auto;
  background-color: rebeccapurple;
  color: white;
}
```

```TypeScript
//Archivo app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  img = 'https://placeimg.com/200/200/any';
  name = 'Gabriel';
  number = 12;
  btnDisabled = true;
  thing = {
    name: 'Gabriel',
    number: 21,
    img: 'https://placeimg.com/200/200/any',
  };

  // Otros eventos
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    console.log(element.value);
    this.thing.name = element.value;
  }
}
```

## Data binding con ngModel

```html
<!--Archivo app.component.html-->
<h1>ngModel</h1>
<p>Nombre: {{thing.name}}</p>
<input type="text" required #nameInput="ngModel" [(ngModel)]="thing.name" />
<p>Valid: {{nameInput.valid}}</p>
<br />
<p>Number: {{thing.number}}</p>
<input
  type="number"
  max="100"
  min="1"
  required
  #numberInput="ngModel"
  [(ngModel)]="thing.number"
/>
<p>Valid: {{numberInput.valid}}</p>
```

Para que funcione **ngModel** hay que importarlo

```TypeScript
// Archivo app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Esto se importa

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule], // Aqui tambien se lo coloca
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

## Estructuras de control

## Uso de \*ngIf

```html
<h1>*ngIf</h1>
<input type="text" required [(ngModel)]="thing.name" />
<p *ngIf="thing.name === 'gabriel'">Soy Gabriel</p>
<p *ngIf="thing.name === 'alejandro'">Soy Alejandro</p>
<!--Si se cumple, se muestra -->
<!--Tambien se puede hacer condicionales &&-->
<p *ngIf="thing.name === 'alejandro' && thing.number === 22; else  elseBlock">
  Soy Alejandro
</p>
<!-- Bloque de tipo else -->
<ng-template #elseBlock>
  <!-- El nombre que acompaña al #, es cualquiera -->
  <p>Bloque de else</p>
</ng-template>
```

## Uso de \*ngFor

```TypeScript
// Archivo app.component.ts
names : string[] | number[]= ["Gabriel", "Alejandro", "Simón"]
//any[] -> Indica que queremos cualquier valor, no es buena practica
```

```html
<h1>*ngFor</h1>
<ul>
  <!-- name es el nombre del item (variable temporal) a iterar, names es el array -->
  <!-- Para obtener el indice se usa index y lo renombramos con i egg-->
  <li *ngFor="let name of names; index as i">{{i}} - {{name}}</li>
</ul>
```

- Crear una lista dinamicamente y eliminar un item.

```TypeScript
// Archivo app.component.ts
  newName = "";
  addName(){
    this.names.push(this.newName);
    this.newName = "";
  }
  deleteName(index: number){
    this.names.splice(index,1);
  }
```

```html
<h1>*ngFor</h1>
<input type="text" required [(ngModel)]="newName" />
<button (click)="addName()">Add name</button>
<ul>
  <!-- name es el nombre del item (variable temporal) a iterar, names es el array -->
  <!-- Para obtener el indice se usa index y lo renombramos con i egg-->
  <li *ngFor="let name of names; index as i">
    {{i}} - {{name}}
    <button (click)="deleteName(i)">Delete</button>
  </li>
  <li *ngIf="names.length === 0">No hay nombres</li>
</ul>
```

## \*ngFor para arrays

```TypeScript
// Archivo app.component.ts
  products = [
    {
      name : "coso",
      price : 231,
      image : "./assets/images/toy1.jpg"
    }{
      name : "coso 2",
      price : 291,
      image : "./assets/images/toy2.jpg"
    }{
      name : "coso 3",
      price : 211,
      image : "./assets/images/toy3.jpg"
    }{
      name : "coso 4",
      price : 221,
      image : "./assets/images/toy4.jpg"
    }
  ]

```

- Hay que asignarle un tipado al array de productos, entonces se usa las interfaces.

```TypeScript
//Archivo product.model.ts
//La interface es una forma que nos dice que tipo de atributos debería tener cada objeto
export interface Product {
  name: string;
  price: number;
  image: string;
}
```

- Ahora se lo importa

```TypeScript
// Archivo app.component.ts

  import {Product} from "./product.model"
  //Los : (dos puntos) significa asignar un tipado
  products: Product[] = [
    {
      name : "coso 1",
      price : 231,
      image : "./assets/images/toy1.jpg"
      category: "all",
    }{
      name : "coso 2",
      price : 291,
      image : "./assets/images/toy2.jpg"
    }{
      name : "coso 3",
      price : 211,
      image : "./assets/images/toy3.jpg"
    }{
      name : "coso 4",
      price : 221,
      image : "./assets/images/toy4.jpg"
    }
  ]

```

- Como **category** no existe, vscode avisa que algo anda mal, para solucionarlo se puede hacer que sea opcional agregando a la interfaz dicho atributo con un signo de pregunta **?**

```TypeScript
export interface Product {
  name: string;
  price: numb   er;
  image: string;
  category?:string;
}
```

- \*ngFor solo funciona en objetos que puedan iterarse

## Uso de ngSwitch

```html
<h2>ngSwitch</h2>
<input type="text" required [(ngModel)]="thing.name" />
<div [ngSwitch]="thing.name">
  <p *ngSwitchCase="'gabriel'">La persona es gabriel</p>
  <p *ngSwitchCase="'alejandro'">La persona es alejandro</p>
  <p *ngSwitchCase="'simon'">La persona es simon</p>
  <p *ngSwitchDefault>No hace match</p>
</div>
<!--
  Esto se haria si solo se usara *ngIf
  <p *ngIf=" thing.name==='gabriel'">La persona es gabriel</p>
  <p *ngIf=" thing.name==='alejandro'">La persona es alejandro</p>
  <p *ngIf=" thing.name==='simon'">La persona es simon</p> 
  -->
```

## Extensión para navegadores para desarrollar en Angular

> Angular Dev Tools

## Estilos en Angular

- La primera forma es la normal

- La otra es: Dynamic Class & Style

```TypeScript
// Archivo app.component.ts
  widthImg = 10;

```

```html
<h1>Class & Style</h1>
<input type="text" required #nameInput2="ngModel" [(ngModel)]="thing.name" />
<!--                     invalid es el nombre de la clase -->
<p class="message-error" [class.invalid]="nameInput2.invalid">
  El campo es requerido
</p>
<br />
<label>Nombre</label>
<!-- Como estilo en linea-->
<input type="text" required #nameInput3="ngModel" [(ngModel)]="thing.name" />
<p [style.font-style]="nameInput3.invalid  ? 'italic' : 'normal'">
  Texto texto texto
</p>
<br />
<div class="styles">
  <div>
    <input type="text" [(ngModel)]="widthImg" />
  </div>
  <div>
    <img [style.width.px]="widthImg" [src]="thing.avatar" />
  </div>
</div>
<hr />
```

- CSS del código HTML anterior

```css
.message-error {
  background-color: red;
  color: white;
  opacity: 0;
  transition: all linear 0.5s;
  &.invalid {
    opacity: 1;
  }
}

.styles {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
```

## NgClass & NgStyle

```html
<h2>NgClass</h2>
<input type="text" required #nameInput4="ngModel" [(ngModel)]="thing.name" />
<!-- Si se sigue con esto puede llegar a ser poco legible -->
<!-- <hr class="line-error" 
  [class.valid]="nameInput4.valid"
  [class.invalid]="nameInput4.invalid"> -->

<!-- Es mejor usar ...-->
<hr
  class="line-error"
  [ngClass]="{
    'valid':nameInput4.valid,
    'invalid':nameInput4.invalid
  }"
/>
<p class="message-error" [class.invalid]="nameInput4.invalid">
  El campo es requerido
</p>
<h2>Ng Style</h2>
<div class="styles">
  <div>
    <input type="number" [(ngModel)]="box.width" />
    <input type="number" [(ngModel)]="box.height" />
    <input type="color" [(ngModel)]="box.background" />
  </div>
  <div>
    <div
      [ngStyle]="{
        'width.px':box.width,
        'height.px':box.height,
        'background-color':box.background,
        'display': 'block'
      }"
    ></div>
  </div>
</div>
```

```TypeScript
 box = {
    width: 100,
    height: 100,
    background: 'red',
  };
```

## Creando un formulario

```html
<h2>Formulario</h2>
<form (ngSubmit)="onRegister()" #myForm="ngForm">
  <div class="input.group">
    <label for="name">Nombre</label>
    <input
      required
      name="name"
      type="text"
      id="name"
      [(ngModel)]="register.name"
    />
    <p>Mensajes de error</p>
  </div>
  <div class="input.group">
    <label for="email">Email</label>
    <input
      required
      name="email"
      type="text"
      id="email"
      [(ngModel)]="register.email"
    />
    <p>Mensajes de error</p>
  </div>
  <div class="input.group">
    <label for="password">Password</label>
    <input
      name="password"
      required
      type="text"
      id="password"
      [(ngModel)]="register.password"
    />
    <p>Mensajes de error</p>
  </div>
  <button [disabled]="myForm.invalid" type="submit">Registrar</button>
  <!-- Si hay otro boton que hace otra cosa que no sea enviar el formulario hay que ponerle un type="button", sino angular lo toma como si fuera un type="submit" -->
  <button type="button">Action</button>
</form>
```

```TypeScript
  register = {
    name: '',
    email: '',
    password: '',
  };
  onRegister() {
    console.log(this.register);
  }
}
```
