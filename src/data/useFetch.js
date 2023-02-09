export const getData = (url, setData) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data));
};

export const postData = async (url, data) => {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const patchData = (url, data) => {
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const deleteData = (url, id) => {
  fetch(`${url}/${id}`, {
    method: "DELETE",
  });
};
