
export class HomeView {

  render(homeTemplateText, latestArticleTemplateText, promotionalProductsTemplateText, latestArticles, promotionalProducts) {
    // Compilar los templates
    const homeTemplate = Handlebars.compile(homeTemplateText);
    const latestArticleTemplate = Handlebars.compile(latestArticleTemplateText);
    const promotionalProductsTemplate = Handlebars.compile(promotionalProductsTemplateText);

    // Renderizar los datos en los templates
    const latestArticleHtml = latestArticleTemplate({ articles: latestArticles });
    const promotionalProductsHtml = promotionalProductsTemplate({ products: promotionalProducts });

    // Renderizar la sección Home
    const homeHtml = homeTemplate({
      sections: [
        { sectionTemplate: latestArticleHtml },
        { sectionTemplate: promotionalProductsHtml }
      ]
    });

    // Mostrar el contenido renderizado en el contenedor correspondiente
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = homeHtml;
  }
}
