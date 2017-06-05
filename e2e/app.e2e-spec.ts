import { PokedexPage } from './app.po';

describe('pokedex App', () => {
  let page: PokedexPage;

  beforeEach(() => {
    page = new PokedexPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
