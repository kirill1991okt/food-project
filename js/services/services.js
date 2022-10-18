// Отправка данных с помощью fetch
const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json',
    },
  });

  return await response.json();
};

// Получение данных с помощь fetch
const getResource = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  }

  return await response.json();
};

export { postData, getResource };
