/// <reference types="cypress" />

export class todoPage{
    
    todoPageMap map;

    todoPage(){
        map = new todoPageMap()
    }
    /**
     * Navigating the to Todo Page  applications
     * Author : Nishit Gupta
     * Date : 06/21/2023
     */
    navigate(){
        cy.visit("https://todomvc-app-for-testing.surge.sh/")
    }

    /**
     * Validating that text or title of Todo page should display on page
     * Author:Nishit Gupta  Date:06/21/2023
     */
    validateHeaderText(expectedValue){
        map.todoHeader.should('have.text',expectedValue)
    }

    /**
     * Adding new todo's to list
     */
    addNewTodo(todoList){
        todoList.forEach(element => {
            map.todoList.type(element+"{enter}")
        });

    validateTodosAdded(todoList[]){

    }
}
}


export class todoPageMap{
    todoPageMap(){
        
    }
    todoHeader => cy.get("h1")
    todoTextBox => cy.get('.new-todo')
}