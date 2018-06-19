import {multiSelectCheckboxTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';
import eyes from 'eyes.it';

describe('MultiSelectCheckbox', () => {
  const storyUrl = getStoryUrl('4. Selection', '4.1 + MultiSelectCheckbox');
  const driver = multiSelectCheckboxTestkitFactory({dataHook: 'multi-select-checkbox'});

  beforeEach(() => {
    browser.get(storyUrl);
  });

  eyes.it('should update the input with selected values when select multiple check box in drop down', async () => {
    await waitForVisibilityOf(driver.element(), 'Cannot find <MultiSelectCheckbox/>');

    driver.clickInput();
    driver.selectItemById('Arkansas');
    driver.selectItemById('California');

    expect(driver.getInput().getAttribute('value')).toBe('Arkansas, California');
  }, {version: '<Icons/> - use new set of icons'});


  eyes.it('should open or close drop down when clicking on the input', async () => {
    await waitForVisibilityOf(driver.element(), 'Cannot find <MultiSelectCheckbox/>');

    driver.clickInput();
    expect(driver.getDropdown().isDisplayed()).toBe(true);

    driver.clickInput();
    expect(driver.getDropdown().isDisplayed()).toBe(false);
  }, {version: '<Icons/> - use new set of icons'});

});
