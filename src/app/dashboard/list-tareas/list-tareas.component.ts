import { Component, OnInit } from '@angular/core';

interface Tarea {
  nombre: string;
  finalizada: boolean;
}

@Component({
  selector: 'app-list-tareas',
  templateUrl: './list-tareas.component.html',
  styleUrls: ['./list-tareas.component.css']
})
export class ListTareasComponent implements OnInit {

  tarea = '';  
  listaTareas: Tarea[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    console.log(this.tarea);
    const nuevaTarea: Tarea = {
      nombre: this.tarea,
      finalizada : false
    }
    this.listaTareas.push(nuevaTarea);
    this.tarea = '';
  }

  eliminarTarea(index: number){
    this.listaTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea, index: number){
    console.log("dsa");
    this.listaTareas[0].finalizada = !tarea.finalizada;
    console.log(this.listaTareas);
  }
}
