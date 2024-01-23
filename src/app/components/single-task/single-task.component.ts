import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.css'
})
export class SingleTaskComponent {

  // Si l'utilisateur est en traind d'éditer le nom de la tâche
  editing:boolean = false;
  // Variable contenant le nouveau nom de la tâche
  editingName:string = "";

  //La tâche à afficher
  @Input()
  task!:Task;

  @Output()
  taskDeletionEvent = new EventEmitter<Task>();

  @Output()
  taskUpdateEvent = new EventEmitter<Task>();

  /**
   * Fonction envoyant un évènement qui comprend la tâche mise à jour après que son statut soit mis à jour
   * @param event l'évènement de changement du statut
   */
  onChange(event: Event):void {
    this.taskUpdateEvent.emit(
      {
        name: this.task.name,
        status: (event.target as HTMLTextAreaElement).value=="true"
      }
    )
  }

  /**
   * Fonction envoyant un évènement lorsque la tâche doit être supprimée
   */
  delete() {
    this.taskDeletionEvent.emit();
  }

  /**
   * Fonction envoyant un évènement lorsque le nom de la tâche est modifiée puis sauvegardée
   */
  edit() {
    if(this.editing) {
      this.taskUpdateEvent.emit({
        name: this.editingName,
        status: this.task.status
      });
      this.editingName = "";
    }
    this.editing = !this.editing;
  }

  /**
   * Fonction qui met à jour la variable editingName, qui correspond au nouveau nom de la tâche
   * @param event évènement de changement du nom
   */
  nameChange(event:Event) {
    this.editingName = (event.target as HTMLTextAreaElement).value;
  }

}