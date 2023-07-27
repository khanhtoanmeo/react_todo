async function updateFetch(url, data) {
  const res = await fetch(url, {
    body: JSON.stringify(data),
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default updateFetch;
