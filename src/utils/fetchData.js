async function fetchData({ url, method, data = {} }) {
  const res = await fetch(url, {
    body: JSON.stringify(data),
    method,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default fetchData;
