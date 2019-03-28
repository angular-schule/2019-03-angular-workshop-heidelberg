import { $, browser } from 'protractor';

describe('Angular Buch', () => {

  beforeAll(() => browser.waitForAngularEnabled(false));

  it('should have a ranking smaller than 20', () => {

    browser.get('https://www.amazon.de/Angular-Grundlagen-fortgeschrittene-Practices-NativeScript/dp/3864906466/');
    const ranking = $('.zg_hrsr_rank');

    // // Nr. 17
    // const longText = ranking.getText();
    // expect(longText).toContain('Nr. 17');

    // Nr. 17
    ranking.getText().then(text => {
      const numberAsString = text.replace('Nr. ', '');
      const nr = parseInt(numberAsString, 10);
      console.log('Ranking: ', nr);
      expect(nr).toBeLessThanOrEqual(20);
    });


  });


  afterAll(() => browser.waitForAngularEnabled(true));

});
