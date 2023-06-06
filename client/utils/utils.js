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
}