export async function sendData(data, url) {
  console.log('sendData');
  try {
    const response = await fetch(url, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'GET', // 'POST'
      // body: data,
    });
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}
