var vuelo = function(){
// Aqui creamos un objeto de tipo vuelo, donde encontraremos toda la informacion.
	this.data = {  
		numero: null,
		origen: null,
		destino: null,
		fechaPartida: null,
		fechaLlegada: null,
		actualFechaPartida: null,
		actualFechaLlegada: null
	};

	this.registrar = function(info){
		for(var propiedad in this.data){
		// verificamos si existe la propiedad, si es verdad asinamos el valor de parametro
			if(this.data[propiedad] != 'undefined'){
				this.data[propiedad] = info[propiedad];
			}
		}
	};

	this.triggerPartida = function(){
		this.data.actualFechaPartida = Date.now();
	};
	this.triggerLlegada = function(){
		this.data.actualFechaLlegada = Date.now();
	};
	this.getInformation = function(){
		return this.data;
	};
};


module.exports = function(info){
	// Creamos la instancia, ojo "new"
	var instancia = new vuelo();
	instancia.registrar(info);
	return instancia;
};