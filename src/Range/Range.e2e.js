import eyes from 'eyes.it';
import {rangeTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';
import settings from '../../stories/Range/StorySettings';
import inputDriver from '../Input/Input.protractor.driver';
import datePickerDriver from '../DatePicker/DatePicker.protractor.driver';


const rangeTestkitE2EFactory = rangeDriver => {
  const component = rangeDriver.element();
  const byDataHook = ({component, dataHook}) => component.$(`[data-hook='${dataHook}']`);
  const firstItem = byDataHook({dataHook: 'first-item', component});
  const lastItem = byDataHook({dataHook: 'last-item', component});

  const inputDriverFirst = () => inputDriver(firstItem);
  const inputDriverLast = () => inputDriver(lastItem);

  const datePickerDriverFirst = () => datePickerDriver(firstItem);
  const datePickerDriverLast = () => datePickerDriver(lastItem);

  return ({
    ...rangeDriver,
    inputType: {
      isFocusedFirst: () => inputDriverFirst().isFocused(),
      isFocusedLast: () => inputDriverLast().isFocused(),
      clickFirst: () => inputDriverFirst().click(),
      clickLast: () => inputDriverLast().click()
    },
    dateType: {
      isFocusedFirst: () => datePickerDriverFirst().inputDriver.isFocused(),
      isFocusedLast: () => datePickerDriverLast().inputDriver.isFocused(),
      clickFirst: () => datePickerDriverFirst().inputDriver.click(),
      clickLast: () => datePickerDriverLast().inputDriver.click()
    }
  });
};

describe('Range', () => {
  const storyUrl = getStoryUrl(settings.kind, settings.storyName);

  const driverInput = rangeTestkitE2EFactory(rangeTestkitFactory({dataHook: settings.dataHookInput}));
  const driverDate = rangeTestkitE2EFactory(rangeTestkitFactory({dataHook: settings.dataHookDatePicker}));
  const waitForRange = () => waitForVisibilityOf(driverInput.element(), 'Cannot find Range');

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  beforeEach(async () => {
    await waitForRange();
  });

  describe('Input type', () => {
    const driver = driverInput.inputType;
    eyes.it('should have default props', async () => {
      expect(driver.isFocusedFirst()).toBe(false, 'isFocused');
      expect(driver.isFocusedLast()).toBe(false, 'isFocused');
    }, {version: '<Icons/> - use new set of icons'});

    eyes.it('should show focused styles for first item', async () => {
      expect(driver.isFocusedFirst()).toBe(false);
      await driver.clickFirst();
      expect(driver.isFocusedFirst()).toBe(true);
    }, {version: '<Icons/> - use new set of icons'});

    eyes.it('should show focused styles for last item', async () => {
      expect(driver.isFocusedLast()).toBe(false);
      await driver.clickLast();
      expect(driver.isFocusedLast()).toBe(true);
    }, {version: '<Icons/> - use new set of icons'});
  });

  describe('DatePicker type', () => {
    const driver = driverDate.dateType;
    eyes.it('should have default props', async () => {
      expect(driver.isFocusedFirst()).toBe(false, 'isFocusedFirst');
      expect(driver.isFocusedLast()).toBe(false, 'isFocusedLast');
    }, {version: '<Icons/> - use new set of icons'});

    eyes.it('should show focused styles for first item', async () => {
      expect(driver.isFocusedFirst()).toBe(false);
      await driver.clickFirst();
      expect(driver.isFocusedFirst()).toBe(true);
    }, {version: '<Icons /> - use new set of icons'});

    eyes.it('should show focused styles for last item', async () => {
      expect(driver.isFocusedLast()).toBe(false);
      await driver.clickLast();
      await driver.clickLast(); // TODO: temporary :)
      expect(driver.isFocusedLast()).toBe(true);
    }, {version: '<Icons/> - use new set of icons'});
  });
});

