async function postData(url, data, customHeader = null) {
  let fetchOptions;
  if (customHeader) {
    fetchOptions = {
      method: 'POST',
      body: data,
      headers: customHeader,
    };
  } else {
    fetchOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-with': 'XMLHttpRequest',
      },
    };
  }
  return fetch(url, fetchOptions);
}

export default postData;
