import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  //Liste des tâches
  taskList:Task[] = this.tasks.getList();

  //La liste des différents filtres d'affichage de tâches
  statusList:string[] = ["All", "Ongoing", "Finished"];

  //La valeur actuelle du filtre d'affichage
  showValue:string = "All";

  constructor(private tasks: TaskService) { }

  /**
   * Une fonction permettant d'afficher dans le log la valeur de la liste de tâche
   */
  logList():void {
    console.log(this.tasks.getList());
  }
  
  /**
   * Fonction d'ajout d'une nouvelle tâche à la liste déjà existante
   * @param newTask La nouvelle tâche
   */
  addTask(newTaskName:string):void {
    this.tasks.addTask(newTaskName);
    this.taskList = this.tasks.getList();
  }

  /**
   * Une fonction permettant de supprimer un élement de la liste
   * @param id la position de l'élement dans la liste
   */
  taskDeletion(id:number):void {
    this.tasks.removeTask(id);
  }

  /**
   * Une fonction permettant la mise à jour d'une tâche
   * @param id indice de la tâche dans la liste
   * @param task nouvelle valeur pour cette tâche
   */
  taskUpdate(id:number, task:Task):void {
    this.tasks.updateTask(id, task);
  }

  /**
   * La fonction permettant de changer le filtre d'affichage
   * @param event l'évènement du changement de filtre
   */
  changeShowValue(event:Event) {
    this.showValue = (event.target as HTMLTextAreaElement).value;
  }

}
