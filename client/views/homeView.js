
export class HomeView {

  render(homeTemplateText, latestArticleTemplateText, promotionalProductsTemplateText, latestArticles, promotionalProducts) {
    // Compilar los templates
    // Compilar los templates
    console.log('FUNCION RENDER')
    const homeTemplate = Handlebars.compile(homeTemplateText);
    const latestArticleTemplate = Handlebars.compile(latestArticleTemplateText);
    const promotionalProductsTemplate = Handlebars.compile(promotionalProductsTemplateText);

    // Renderizar los datos en los templates
    const latestArticleHtml = latestArticleTemplate({ articles: latestArticles });
    const promotionalProductsHtml = promotionalProductsTemplate({ products: promotionalProducts });
    console.log('home t', homeTemplate)
    console.log('latest t', latestArticleTemplate)
    console.log(promotionalProductsTemplate)
    // Renderizar la sección Home
    const homeHtml = homeTemplate({
      sections: [
        { sectionTemplate: latestArticleHtml },
        { sectionTemplate: promotionalProductsHtml }
      ]
    });
    console.log('homehtml', homeHtml)
    // Mostrar el contenido renderizado en el contenedor correspondiente
    const contentContainer = document.getElementById('content');
    console.log(contentContainer)
    contentContainer.innerHTML = homeHtml;
  }
}
