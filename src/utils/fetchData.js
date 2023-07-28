const BASE_URL = 'http://localhost:8888/api/'
//todo sửa lại mấy chỗ call api hộ anh nhé , anh nghĩ viết như này sẽ ổn hơn , nếu cần sau mình có thể chuyển base url sang file env để mình dễ config chẳng hạn
async function fetchData({ url = BASE_URL, method, data = {} ,isFetchApi=true}) {
  const fetchUrl = isFetchApi ? BASE_URL + url : url
  const res = await fetch(fetchUrl, {
    body: JSON.stringify(data),
    method,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default fetchData;
