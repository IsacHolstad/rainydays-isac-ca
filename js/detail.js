const queryString = document.location.search;
const params = new URLSearchParams(queryString)

const id = params.get('id')
const lastApi = `https://rainydaysjackets.flywheelsites.com/wp-json/wc/store/products/${id}