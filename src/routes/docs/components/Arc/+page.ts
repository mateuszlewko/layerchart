import source from '$lib/components/Arc.svelte?raw';
import pageSource from './+page.svelte?raw';

export async function load() {
  return {
    meta: {
      source,
      pageSource,
      related: ['examples/Pie']
    }
  };
}
