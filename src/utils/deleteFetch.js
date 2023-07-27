async function deleteFetch(url) {
  const res = await fetch(url, {
    method: "delete",
  });
  return res.json();
}

export default deleteFetch;
