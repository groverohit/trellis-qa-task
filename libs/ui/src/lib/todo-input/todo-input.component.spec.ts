import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputComponent } from './todo-input.component';

describe('TodoInputComponent', () => {
  let component: TodoInputComponent;
  let fixture: ComponentFixture<TodoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Check that the input box to enter a To-do title exists
  it('should contain an input box to enter todo title', function(){
    const titleInput: HTMLInputElement = fixture.nativeElement.querySelector('input'); 
    expect(titleInput).toBeTruthy();
  });

  //Check that the button to create a To-Do exists
  it('should contain a button to create a todo', function(){
    const buttonCreate: HTMLButtonElement = fixture.nativeElement.querySelector('button'); 
    expect(buttonCreate).toBeTruthy();
  });

});
