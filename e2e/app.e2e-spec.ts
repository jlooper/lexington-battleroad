import { BluetoothScannerPage } from './app.po';

describe('bluetooth-scanner App', function() {
  let page: BluetoothScannerPage;

  beforeEach(() => {
    page = new BluetoothScannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
