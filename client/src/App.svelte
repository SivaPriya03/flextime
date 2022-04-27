<script>
  let name = 'me';
  function makeid(length) {
    let result = '';
    let characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function onClick() {
    name = makeid(5);
  }
</script>

<h1 on:click={onClick}>Click {name}!</h1>

<style>
  h1 {
    text-align: center;
    cursor: pointer;
  }
</style>
