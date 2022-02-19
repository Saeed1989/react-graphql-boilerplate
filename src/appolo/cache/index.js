import { InMemoryCache } from '@apollo/client';
import { CachePersistor, LocalStorageWrapper } from 'apollo3-cache-persist';

async function initCache() {
  const cache = new InMemoryCache();
  const newPersistor = new CachePersistor({
    cache,
    storage: new LocalStorageWrapper(window.localStorage),
    debug: true,
    trigger: 'write',
  });
  await newPersistor.restore();

  return cache;
}
export default initCache;
