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
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-with': 'XMLHttpRequest',
      },
    };
  }
  return fetch(url, fetchOptions);
}

export default postData;
