import { NgAotGuidePage } from './app.po';

describe('ng-aot-guide App', () => {
  let page: NgAotGuidePage;

  beforeEach(() => {
    page = new NgAotGuidePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
