'use strict';
async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    try {
      if (!response) throw new Error();
      try {
        if (response.ok !== true) throw new Error();
        console.log(await response.json());
      } catch (e) {
        try {
          console.log(
            `Endpoint exists but cannot return page contents, error code (page status): ${
              response.status
            }. Full page response is ${response.json()}.`,
            e
          );
        } catch (e) {
          console.log(
            `Endpoint exists but cannot return page, nor can log see response.`
          );
        }
      }
    } catch (e) {
      console.log('Fetch succeeded but got no response.', e);
    }
  } catch (e) {
    console.log('Endpoint does not exist or fetch failed.', e);
  }
}
getUsers();
