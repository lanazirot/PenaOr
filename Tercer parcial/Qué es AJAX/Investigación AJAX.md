# AJAX 🅰️ 
### Alan Peña Ortiz 19100234
----

## ¿Qué es AJAX? ❓
<p style="text-align: justify">Es un grupo de tecnologías que se usan para desarrollar aplicaciones web.  
Al combinar dichas tecnologías, las páginas web se hacen más "dinámicas" y ligeras  
a raíz de que los paquetes se intercambian en montos de datos pequeños con el servidor  
y también evita que esta se recargue cada vez que un cliente, usuario, realice algúna  
petición a ella, ya sea alguna extracción de datos, algun cambio de input, por ejemplo  
cuando se están realizando búsquedas en algun catálogo, estas son peticiones que se  
están mandando constantemente al servidor, debido a que, no podríamos cargar toda la  
información de un solo golpe. Las páginas web no serían tan sencillas de usar sin tecnologías  
como AJAX. </p>

## Acrónimo AJAX 📖
Asynchronous JavaScript And XML

## ¿Cómo funciona AJAX? ❓
<p style="text-align: justify">Usando AJAX, no se interrumpe las interacciones que el usuario esté realizando con la página web. Permite que el usuario siga interactuando con la página independientemente de lo que esté sucediendo.</p> 

<img src="https://www.ibm.com/docs/es/SS8PJ7_9.6.1/com.ibm.etools.webtoolscore.doc/images/ajaxWebAppModel.gif"/>

## ¿De qué se compone AJAX? ❓
1. XHTML y CSS para presentar información
2. DOM (Document Object Model) que sirve para visualizar e interactuar con la página presentada
3. XMLHttpRequest para manipular los datos de forma asíncrona con el servidor (este es un elemento clave para AJAX)
4. XML, HTML, XSTL para el intercambio de datos
5. JavaScript para poder enlazar solicitudes (en cadena) e información de datos.

## Y, ¿qué me permite hacer AJAX? ❓
<p style="text-align: justify">Modificar partes específicas de una página (en general lo que se modifica es el DOM, el árbol de componentes del HTML) sin necesidad de hacer un refrescado de la página. Algo que su nombre lo indica, es que AJAX permite trabajar de forma asíncrona; lo que estemos haciendo seguirá corriendo mientras la parte de la página que estas tratando de modificar intenta recargarse. ¿Cómo se compara esto con un código síncrono? Imaginemos, en un sistema de múltiples entradas y salidas, que estamos tratando de cargar un documento sumamente pesado, por ejemplo un archivo ZIP de 10 Gb; ¿que sería conveniente? un sistema que te permita subir el archivo, pero que no puedas hacer absolutamente nada al estar subiéndolo, o, un sistema que te permita subir el archivo y poder dejarlo como tarea en segundo plano mientras realizas más actividades dentro del sistema. Esto es un ejemplo de sincronía y asincronía, poder realizar tareas específicas sin necesidad de estar en sincronía con el resto de código.</p>

## Limitaciones de AJAX 🛑
1. Muchos navegadores (se dice "muchos", porque aún existen, en algunas partes del mundo, navegadores que no conocemos, o no usamos) no permiten la ejecución de código JS o no tienen incluido el objeto XMLHttpRequest.
2. Tiene problemas con la seguridad y la privacidad del usuario (esto ya se resuelve utilizando otras librerías, frameworks u objetos del mismo JS)
3. Puede tener un comportamiento inadecuado, ya que al ser asíncrono, es díficil asegurarse que al finalizar el contenido cargado de la petición AJAX, no repercuta en otras partes de la página web.
4. No es posible realizar búsquedas en aplicaciones AJAX



## ¿Por qué casi no escucho más el término AJAX? ¿Es obsoleto? 🥴
<p style="text-align: justify">Respondiendo a la primera pregunta, el porqué de no escuchar más del término se debe a la tendencia de nuevas tecnologías, o soluciones, que permiten hacer las peticiones al servidor de forma más sencilla; realmente es algo "complejo" utilizar los objetos de forma nativa, por lo que distintas soluciones a lo largo de los años han sido planteadas ante la comunidad de desarolladores para poder hacer el trabajo un poco más sencillo, incluyendo aspectos de seguridad que no se han manejado con anterioridad. A la segunda pregunta, la respuesta es, depende de qué se entienda por obsoleto o cómo quiera la gente tratar este término. Muchas páginas web siguen utilizando AJAX en sus desarrollos, y hay que tener en cuenta que muchas de las tecnologías de comunicaciones con los servidores, tienen a AJAX como base para su funcionamiento.</p>

## Alternativas a AJAX 🆕

1. JQuery Ajax
2. Qwest
3. Http-client
4. Axios
5. Fetch (nativo de JS)

## Referencias electrónicas 🌐
https://developer.mozilla.org/es/docs/Glossary/AJAX
https://www.ibm.com/docs/es/rational-soft-arch/9.6.1?topic=page-asynchronous-javascript-xml-ajax-overview