## One way data binding

### Interpolación {{angular}}

Permite colocar texto entre elementos html y atributos

```typescript
title: string = "tutorial";
url: string = "https://www.placeimg.com/300/400";
```

```html
<p>{{title}} para aprender Angular</p>
<p>Total: {{5+5}}</p>
<img src="{{url}}" alt="" />
```
