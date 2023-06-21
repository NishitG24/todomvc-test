/// <reference types="cypress" />
import { todoPage } from "../pages/todoPage";

describe('Validates and Add new Todo to List', () => { 
    const todo = new todoPage()
    beforeEach(()=>{
        todo.navigate()
    })

    it("I should see todo page opened",()=>{
        todo.validateHeaderText("todos")
    })

    it("I add new todo's to list",()=>{
        var arr=["clean room","do pottyu","javascrips"]
        map.addNewTodo(arr)
    })
 })