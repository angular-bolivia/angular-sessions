import { Session01Page } from './app.po';

describe('session01 App', () => {
  let page: Session01Page;

  beforeEach(() => {
    page = new Session01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
