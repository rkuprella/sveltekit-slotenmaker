<script context="module">
  export const load = ({ error, status }) => {
    return {
      props: {
        error,
        status
      }
    };
  };
</script>

<script>
  export let error, status;
</script>

<svelte:head>
  <title>{status}: {error.name}</title>
</svelte:head>

<h1>{status}: {error.name}</h1>
