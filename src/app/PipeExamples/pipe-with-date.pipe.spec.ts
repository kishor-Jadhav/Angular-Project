import { PipeWithDatePipe } from './pipe-with-date.pipe';

describe('PipeWithDatePipe', () => {
  it('create an instance', () => {
    const pipe = new PipeWithDatePipe();
    expect(pipe).toBeTruthy();
  });
});
