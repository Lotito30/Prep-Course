Conceptos:

* Objetos
* Propiedades
* Métodos
* Bucle `for…in`
* Notación de puntos vs notación de corchetes

Objetos: Son datos almacenados por el termino 'clave:valor' clave significa la Propiedad y el valor el dato que se guarda en dicha Propiedad,
		 se pueden guardar cualquier tipo de datos, booleano,numero,string,otro objeto,array,funcion. ejem 
		 var objeto = {
		 	string:'objetos',
		 	numero:1,
		 	array:['perez',1,true],
		 	función: function(){
		 		console.log('Hola')},
		 	objeto:{saludar:'Hola'},
		 	booleano:true
		 }

Propiedades: Son las variables almacenadas dentro del objeto con su valor adjunto, las propiedades definen las caracteristicas de un objeto,
			 las propiedades son todas las 'clave:valor' que se almacenan dentro del objeto.

Metodos: Se le llaman metodos a todas las 'funciones(function)' que se realizan dentro del objeto, que se almacenan por 'clave:valor',
		 el valor es el nombre de la funcion a llamar. cuando llamamos al metodo del objeto lo hacemos con (). ejemplo objeto.funcion() 

bucle 'for ..in': El bucle for in nos permite iterar dentro del objeto recorriendo todas las clave, ya que no podemos usar el for comun 
				  porque los objetos no contienen indice asi que usamos el for(var clave in objeto). Para acceder al valor de esa clave
				  lo hacemos con los corchetes 'objeto[clave]' 

Notacion de puntos vs notacion de corchetes: 
	La notacion de puntos es mas facil de leer y escribir, ya que puedes llamar a la clave del objeto
con objeto.clave, se puede guardar un nuevo valor objeto.clave = valor, no se puede llamar al objeto
con el nombre de la propiedad que empiece con numeros o tenga algun tipo de caracter '-' ejemplo
objeto['123clave'], objeto['clave-122']. Con la notacion de puntos no podemos acceder a una variable 
que tenga almacenada la propiedad del objeto. ejemplo de la variable var variable = "clave" llamando 
a la variable mediante notacion de punto objeto.variable devolvera 'undefined', los corchetes nos permite
llamar una propiedad mediante una variable que su valor sea el 'valor' de la propiedad del objeto desde 
afuera del objeto.
