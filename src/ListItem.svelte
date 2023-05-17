<script>
  export let Name;
  export let Address;
  export let detailCategoryName;
</script>

<div class="card">
  <!-- <span class="avatar" style="background: url({avatar})" /> -->
  <h2>{Name}</h2>
  <p>{Address}</p>
  <p class="category">{detailCategoryName}</p>
</div>

<style>
  .card {
    position: relative;
    margin: 0.5em;
    padding: 0.5em 0.5em 0.5em 6em;
    border: 1px solid #eee;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    min-height: 5em;
  }

  .category {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: auto;
    background-color: #eee;
    text-align: center;
    align-items: center;
    padding: 10px 0;
  }
  .card::after {
    clear: both;
    display: block;
  }

  h2 {
    margin: 0 0 0.5em 0;
    font-size: 16px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
</style>
