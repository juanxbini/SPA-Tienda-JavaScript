
export class HomeView {
  render(homeTemplateText, latestArticleTemplateText, promotionalProductsTemplateText, latestArticles, promotionalProducts) {
    // Compilar los templates
    const homeTemplate = Handlebars.compile(homeTemplateText);
    const latestArticleTemplate = Handlebars.compile(latestArticleTemplateText);
    const promotionalProductsTemplate = Handlebars.compile(promotionalProductsTemplateText);

    // Registrar los partials
    Handlebars.registerPartial('latestArticle', latestArticleTemplate);
    Handlebars.registerPartial('promotionalProducts', promotionalProductsTemplate);

    const contentContainer = document.getElementById('content');

    // Esperar a que ambas promesas se resuelvan
    Promise.all([latestArticles, promotionalProducts]).then(([latestArticlesData, promotionalProductsData]) => {
      // Renderizar los datos en las plantillas
      const latestArticleHtml = latestArticleTemplate({ articles: latestArticlesData });
      const promotionalProductsHtml = promotionalProductsTemplate({ products: promotionalProductsData });

      // Renderizar la sección Home
      const homeHtml = homeTemplate();

      // Mostrar el contenido renderizado en el contenedor correspondiente
      contentContainer.innerHTML = homeHtml;
      contentContainer.querySelector('.latest-articles').innerHTML = latestArticleHtml;
      contentContainer.querySelector('.promotional-products').innerHTML = promotionalProductsHtml;
    });
  }
}
