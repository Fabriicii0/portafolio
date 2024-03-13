
import indexPageContext from './indexPage';
import prodsPageContext from './prodsPage';

const pageContext = {
    "/index.html": indexPageContext,
}

const globalContext = {
    "title": "Menganito"
}

const getContext = (contextKey) => {
    const _pageContext = pageContext[contextKey] || {};
    return Object.assign({}, globalContext, _pageContext);
}

export default getContext;