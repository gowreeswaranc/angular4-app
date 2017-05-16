import { LearningAngular4Page } from './app.po';

describe('learning-angular4 App', () => {
  let page: LearningAngular4Page;

  beforeEach(() => {
    page = new LearningAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
