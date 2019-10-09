import { Course } from './course';

describe('Course', () => {
  it('should create an instance', () => {
    expect(new Course(0,'Main',1)).toBeTruthy();
  });
});
