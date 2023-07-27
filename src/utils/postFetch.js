async function postFetch(url, data) {
  const res = await fetch(url, {
    body: JSON.stringify(data),
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default postFetch;
