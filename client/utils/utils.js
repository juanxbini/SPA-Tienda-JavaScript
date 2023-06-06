export class Utils {

    async fetchTemplate(url) {
        return fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Error fetching template: ${response.status}`);
            }
            return response.text();
          })
          .catch(error => {
            console.error('Template fetch error:', error);
          });
      }

    async fetchData(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error.message);
        throw error;
      }
    }
}