import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //Liste de tâches
  taskList:Task[] = [];

  constructor() {}

  /**
   * Getter pour la liste de tâches
   * @returns Liste de tâches
   */
  getList():Task[] {
    return this.taskList;
  }

  /**
   * Fonction de création d'une nouvelle tâche
   * @param newTaskName nom de la nouvelle tâche
   */
  addTask = (newTaskName:string):void => {
    this.taskList.push({
        name: newTaskName,
        status: false
      });
  }

  /**
   * Une fonction permettant de supprimer un élement de la liste
   * @param idTask la position de l'élement dans la liste
   */  
  removeTask = (idTask:number):void => {
    this.taskList.splice(idTask, 1);
  }

  /**
   * Fonction de mise à jour d'une tâche déjà existante
   * @param idTask ID de la tâche dans al liste
   * @param task nouvelle valeur à attribuer à cette tâche
   */
  updateTask = (idTask:number, task:Task):void => {
    this.taskList[idTask] = task;
  }
}
