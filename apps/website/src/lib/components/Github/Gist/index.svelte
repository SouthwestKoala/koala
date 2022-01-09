<script lang="ts">
  export let file = '';
  export let gist: string;
  export let user: string;

  const title = file ? file : 'Gist';

  const query = new URLSearchParams({ file })
  const url = [`https://gist.github.com/${user}/${gist}.js`, query.toString()].filter((p) => p).join('?')
</script>

<div class="not-prose w-full">
  {@html `<script src="${url}"><${""}/script>`}
</div>
