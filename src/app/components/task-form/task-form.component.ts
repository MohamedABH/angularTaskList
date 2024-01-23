import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  // Le nom de la nouvelle tâche
  newTaskName!:string;

  @Output()
  newTaskEvent = new EventEmitter<string>();

  /**
   * Fonction déclenchant l'évènement de création d'une nouvelle tâche
   */
  addTask():void {
    this.newTaskEvent.emit(this.newTaskName);
  }

}
