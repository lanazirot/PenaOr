# Captura y propagación de eventos en JS ✈️
### Alan Peña Ortiz 19100234
----

## Antes de comenzar: ¿Qué es un evento en JS?
<p style="text-align: justify">JavaScript tiene eventos que permiten hacer páginas web que sean dinámicas.
Estos eventos estan ligados al modelo de objetos de documento, es decir el DOM. Esto hace
que sea posible la interacción entre los usuarios y la página. Un evento no es más que el resultado
de la acción de un usuario, la cuál produce un efecto, por ejemplo mensajes, llenado de formularios, etc. </p> 

## Listeners  
<p style="text-align: justify">Los listeners, o escuchadores de eventos son funciones de JavaScript que nos permiten interactuar
con los elementos HTML "escuchando" diferentes tipos de eventos que tienen lugar en la página web, como cuando
se pulsa un botón, se hace scroll en la página, cuando se presiona una tecla, etc. Cuando un evento sucede, el listener
captura o "escucha" lo que haya sucedido, generalmente en un objeto que contiene algunas propiedades o características
de lo que haya sucedido y posteriormente ejecuta algo.  
Entre los eventos más comunes existen: </p> 

1. load
2. click
3. mouseover
4. keydown

<p style="text-align: justify">Existen distintas formas de escuchar un evento, puede ser directamente en el código HTML, donde cada elemento contiene todos o
la mayoría de los atributos para escuchar eventos (es la forma que menos se recomienda), también existe el API DOM, que es por donde
comúnmente los programadores colocan todo el código (suele ser en otro archivo JS separado del código HTML) y finalmente, por librerías
o frameworks que se encargan de este trabajo.</p>  

## Event Flow (Flujo de eventos)  
<p style="text-align: justify">Esta es una serie de conceptos que se deben manejar antes de conocer la captura y burbujeo en JavaScript.  
Cuando se programa una página, y se empiezan a colocar eventos, si hay una serie de elementos que están teniendo el mismo evento,
puede ser confuso a la hora de saber cuál va a ser ejecutado primero; un evento es propagado hacia el elemento objetivo empezando desde
sus elementos padres, y se propagará hacia atrás (se regresa) hasta su elemento padre. Existen 3 fases de capturas para los eventos en JS:  </p>

1. Captura (capture o capturing)
2. Elemento objetivo (target element, es donde tiene lugar el último o primer evento, dependiendo del método de propagación, digamos que es el punto medio)
3. Burbujeo (bubble o bubbling)  


## Captura de eventos (Capturing)  
<p style="text-align: justify">La captura de eventos tiene lugar cuando los eventos se propagan, empezando desde el elemento padre (incluso el elemento window del API DOM si lo está escuchando puede tener ), 
llegando hasta el elemento objetivo quien tuvo la "culpa" de iniciar el evento (es quien lo inició). La fase de captura es raro que 
el programador la manipule, es en algunas ocasiones "invisible" y con la llegada de librerías y frameworks, es un tema que pasa a tener
lugar para los desarrolladores de las mismas.</p>

## Burbujeo de eventos (Bubbling)  
<p style="text-align: justify">El burbujeo de evento es simple y exactamente lo contrario a la captura de eventos: empieza desde el elemento objetivo y se propaga hacia arriba del árbol del DOM hasta el último padre que tenga el mismo evento en escucha (listener). Este es otro método de propagación de los eventos en el documento HTML.</p>  

### Resumen de captura y propagación de eventos en una imagen  

<img src="https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg" alt="Flujo de eventos"/>  

En general, podemos decir que  

1. Captura de eventos: desde el padre hacia el hijo
2. Burbujeo de eventos: desde el hijo hacia el padre (comportamiento por defecto)

## Event Listeners en JS y su sintaxis  
<p style="text-align: justify">En JavaScript, en general se suele usar la función addEventListener del API DOM para poder asignar distintos tipos de eventos a los elementos del documento. Su sintaxis es sencilla, y es la siguiente:  </p>

elemento.addEventListener(tipoDeEvento, listener o function, useCapture | AddEventListenerOptions)  

Donde  

1. Elemento: el elemento HTML que estemos manejando (un botón, un div, un párrafo, etc.)
2. Tipo de evento: de la lista de eventos disponibles del API DOM ([véase el siguiente enlace](https://developer.mozilla.org/en-US/docs/Web/Events))
3. Listener o función de escucha: el método que se ejecutará cuando el evento sea escuchado
4. useCapture: valor booleano (true o false) que indica en qué fase del evento se encuentra, por default es falso e indica que nos encontramos en la fase de burubujeo. El otro valor que puede tomar es un objeto de opciones de tipo AddEventListenerOptions, que contiene las propiedades capture, once y passive.

Veamos el siguiente ejemplo  

_index.html_

```html
<html>
  <head>
    <meta charset="UTF-8">
    <script src="script.js"></script>
  </head>
  <body style="color: white;">
    <div id="div1" style="background: green;">
      Primer div <br>
      <div id="div2" style="background: red;">
        Segundo div <br>
      </div>
    </div>
  </body>
</html>
```
_script.js_

```javascript
window.addEventListener('click', () => {
  console.log('Evento window');
});

document.addEventListener('click', () => {
  console.log('Evento document');
});

document.getElementById('div1').addEventListener('click', () => {
  console.log('Div 1');
});

document.getElementById('div2').addEventListener('click', () => {
  console.log('Div 2');
});

```

La página luce de la siguiente forma  

<img src="Pagina%201.png" style="border: 1px solid black;"/>  

Entonces, como no estamos indicando la fase de captura, asumimos que la fase de burbujeo es la que está por default  

<p style="text-align: justify">¿Qué pasa si hacemos click en el elemento div 2?  
Ojo, hay que tener cuidado donde se coloca el script de JS, en este caso no producirá ningún efecto, o en cambio  
podemos colocar la función window.onload en el script de JS  </p>

```javascript
window.onload = function () {
  window.addEventListener('click', () => {
    console.log('Evento window');
  });

  document.addEventListener('click', () => {
    console.log('Evento document');
  });

  document.getElementById('div1').addEventListener('click', () => {
    console.log('Div 1');
  });

  document.getElementById('div2').addEventListener('click', () => {
    console.log('Div 2');
  });
};

```

Ahora sí, al hacer click en el elemento div 2, la consola mostrará el siguiente output  

1. Div 2  
2. Div 1
3. Evento document
4. Evento window

¿Qué sucedería al hacer click en el div 1?  

1. Div 1
2. Evento document
3. Evento window

¿Y en la parte blanca?  

1. Evento document
2. Evento window

Ahora bien, ¿qué sucedería si le indicamos useCapture = true en las funciones?  

```javascript
window.onload = function () {
  window.addEventListener(
    'click',
    () => {
      console.log('Evento window');
    },
    true
  );

  document.addEventListener(
    'click',
    () => {
      console.log('Evento document');
    },
    true
  );

  document.getElementById('div1').addEventListener(
    'click',
    () => {
      console.log('Div 1');
    },
    true
  );

  document.getElementById('div2').addEventListener(
    'click',
    () => {
      console.log('Div 2');
    },
    true
  );
};

```


Al hacer click en el elemento div 2 el output sería el siguiente  

1. Evento window
2. Evento document
3. Div 1
4. Div 2

Al hacer click en el elemento div 1 el output sería el siguiente

1. Evento window
2. Evento document
3. Div 1

Y al hacer click en el espacio en blanco, el output sería el siguiente

1. Evento window
2. Evento document

Ahora bien, qué sucedería si en algún elemento se le quita la opción de useCapture, por ejemplo, al documento  

```javascript
window.onload = function () {
  window.addEventListener(
    'click',
    () => {
      console.log('Evento window');
    },
    true
  );

  document.addEventListener('click', () => {
    console.log('Evento document');
  }); //Aquí

  document.getElementById('div1').addEventListener(
    'click',
    () => {
      console.log('Div 1');
    },
    true
  );

  document.getElementById('div2').addEventListener(
    'click',
    () => {
      console.log('Div 2');
    },
    true
  );
};

```
El output en consola, al dar clic en el elemento div 2, sería el siguiente  

1. Evento window
2. Div 1
3. Div 2
4. Evento document 

<p style="text-align: justify">¿Por qué sucede esto? Al estar marcados todos los elementos como captura, empezarán desde el elemento padre hasta el elemento objetivo  
que en este caso es el div 2; ahora bien, en la fase de burbujeo, es decir, el regreso, es cuando ahora escuchará a los elementos 
que no estuvieron en la fase de captura, en este caso, el elemento document. </p>

Analicemos otro ejemplo, donde el elemento div 2 se le quita la fase de captura

```javascript
window.onload = function () {
  window.addEventListener(
    'click',
    () => {
      console.log('Evento window');
    },
    true
  );

  document.addEventListener('click', () => {
    console.log('Evento document');
  }); //Aquí

  document.getElementById('div1').addEventListener(
    'click',
    () => {
      console.log('Div 1');
    },
    true
  );

  document.getElementById('div2').addEventListener('click', () => {
    console.log('Div 2');
  }); //Aquí
};

```

¿Qué sucederá al dar click?

<p style="text-align: justify">Primero, los elementos de fase de captura: window y div 1, posteriormente los elementos de fase de burbujeo: div 2 y document  </p>
Entonces, el output es el siguiente:  

1. Evento window
2. Div 1
3. Div 2
4. Evento document  

## Detener propagaciones de eventos  
<p style="text-align: justify">Y bueno, la pregunta que muchos nos vamos a hacer cuando programamos, ¿cómo detengo el evento de propagación en JavaScript?.  
Utilizando el ejemplo anterior, ¿qué sucedería si yo solo quiero que en realidad, al dar clic en el div 2, sólo se ejecute lo que  
pertenece sólo al listener del div 2?  </p>

Existen dos formas, la función stopPropagation, que previene cualquier propagación del evento, veamos un ejemplo  

### stopPropagation

```javascript
window.onload = function () {
  window.addEventListener('click', () => {
    console.log('Evento window');
  });

  document.addEventListener('click', () => {
    console.log('Evento document');
  });

  document.getElementById('div1').addEventListener('click', () => {
    console.log('Div 1');
  });

  document.getElementById('div2').addEventListener('click', (e) => {
    console.log('Div 2');
    e.stopPropagation();
  });
};

```

<p style="text-align: justify">Al dar clic en el elemento div 2, el output será únicamente "Div 2", ignorando la propagación del evento, evitando el burbujeo 
de los demás elementos padre que tenga. Ojo, esto no aplica si se le colocara useCapture: true, a los elementos padre, esto va 
por encima del stopPropagation.</p>  

### stopInmediatePropagation
<p style="text-align: justify">¿Qué sucedería si tengo varios listeners apuntando al mismo elemento, y quiero sólo ejecutar en el que estoy trabajando?  
Utilizar la función stopInmediatePropagation es lo ideal  </p>

```javascript
window.onload = function () {
  document.getElementById('div2').addEventListener('click', (e) => {
    console.log('Div 2 primer método');
    e.stopImmediatePropagation();
  });
  document.getElementById('div2').addEventListener('click', (e) => {
    console.log('Div 2 segundo método');
  });
};

```

Al dar clic en el elemento div 2, sólo es ejecutado el primer listener, imprimiendo en consola "Div 2 primer método".  


## Referencias electrónicas
https://www.w3.org/TR/uievents/
https://blog.bitsrc.io/event-bubbling-and-capturing-in-javascript-6bc908321b22

