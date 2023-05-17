<!-- https://github.com/sveltejs/svelte-virtual-list -->
<!--https://svelte.dev/repl/4863a658f3584b81bbe3d9f54eb67899?version=3.32.3-->
<script>
  import { onMount } from "svelte";
  import "./app.css";
  import items from "./data.js";

  import ListItem from "./ListItem.svelte";
  import InfiniteScroll from "./InfiniteScroll.svelte";

  let searchTerm = "";

  $: filteredList = items.filter(
    (item) => item.Name.indexOf(searchTerm) !== -1
  );

  // if the api (like in this example) just have a simple numeric pagination
  let page = 0;
  // but most likely, you'll have to store a token to fetch the next page
  let nextUrl = "";
  // store all the data here.
  let data = [];
  // store the new batch of data here.
  let newBatch = [];

  async function fetchData() {
    const response = await fetch(
      `https://api.openbrewerydb.org/breweries?by_city=los_angeles&page=${page}`
    );
    newBatch = await response.json();
    console.log(newBatch);
  }

  onMount(() => {
    // load first batch onMount
    fetchData();
  });

  $: data = [...data, ...newBatch];
</script>

<h1>식당 리스트 + 검색창</h1>
<p>식당 리스트는 페이코 식권 식당에서 일부만 발췌...</p>
<h1 class="text-3xl font-bold">Hello world!</h1>

검색:<input bind:value={searchTerm} />
{searchTerm}

<div class="container">
  {#each filteredList as item}
    <ListItem {...item} />
  {/each}
</div>

<style>
  .container {
    min-height: 200px;
  }

  main {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  ul {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    width: 100%;
    max-width: 400px;
    max-height: 400px;
    background-color: white;
    overflow-x: scroll;
    list-style: none;
    padding: 0;
  }

  li {
    padding: 15px;
    box-sizing: border-box;
    transition: 0.2s all;
    font-size: 14px;
  }

  li:hover {
    background-color: #eeeeee;
  }
</style>
