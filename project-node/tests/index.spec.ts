import * as assert from 'assert';
import cpu from '..';

describe('System Information', () => {
  it('should retrieve information', async () => {
    const info = await cpu();
    assert.equal(info.cores, 8);
  });
});