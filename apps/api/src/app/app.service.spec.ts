import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return the created test todo', () => {
      expect(service.getData()).toEqual([{"completed": false, "id": 1, "title": "Test"}]);
    });

    //Test to add, complete and delete a To-Do
    it('should be able to add, complete and delete a todo', () => {
      let id: Number = service.addTodo({title: 'Test-int-todo'}).id;
      expect(id).toBeTruthy;

      expect(service.toggleCompleted(id)[1].completed).toEqual(true);

      let remainingTodos: Object = service.deleteTodo(id).map(a=>a.id);
      expect(remainingTodos).not.toContain(id);
    });
  });
});
