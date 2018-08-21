module Tienda{
	export class Ropa{
		constructor(public titulo: string){
			alert(titulo);

		}
	}

	export class Informatica{
		constructor(public titulo: string){
			alert(titulo);

		}
	}
}

import Informatica = Tienda.Informatica;
let informatica  = new Informatica('supertienda');

function arranque(lanzar:string){
	return function(target:Function){
		target.prototype.lanzamiento = function():void{
			alert(lanzar);
		}
	}
}

@arranque('lanzamiento del curso de Nodejs')
class Programa {

	public nombre: string;
	public version: number;

	getNombre(){
		return this.nombre;
	}

	setNombre(nombre: string){
		this.nombre = nombre;
	}

	getVersion(){
		return this.version;
	}

	setVersion(version: number){
		this.version = version;
	}
}

var programa = new Programa();
programa.lanzamiento();

class EditorVideo extends Programa{

	public timeline: number;

	setTimeline(timeline: number){
		this.timeline = timeline;
	}

	getTimeline(){
		return this.timeline;
	}

	getAllData(): string{

		return this.getNombre()+ "-"+this.getVersion()+"-"+this.getTimeline();
	}
}

var editor = new EditorVideo();
editor.setNombre("Camstasia Studio");
editor.setVersion(8);

editor.setTimeline(4000);

//console.log(editor.getAllData());

// Logica del formulario

var programas = [];

function guardar(){

	var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

	var programa = new Programa();

	programa.setNombre(nombre);
	

	programas.push(programa);

	var list = ""; 

	for(var i = 0; i < programas.length; i++) { 

		list = list+"<li>"+programas[i].getNombre()+"</li>";
	}

		var listado = <HTMLElement> document.getElementById("listado");

		listado.innerHTML = list;

		alert(listado);
		

}