import validator from './validator';
import log from './log';

const SETTING = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0';

// eslint-disable-next-line consistent-return
function doGet() {
  if (validator()) {
    log('access with permissions');
    return HtmlService.createTemplateFromFile('index_for_valid_user')
      .evaluate()
      .addMetaTag('viewport', SETTING);
  }

  log('access without permissions');
  return ContentService.createTextOutput('No permission');
}

export default {
  doGet,
};
