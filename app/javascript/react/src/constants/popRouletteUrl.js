let popRouletteUrl;

switch (process.env.NODE_ENV) {
  case 'production':
    popRouletteUrl = 'https://pop-roulette.herokuapp.com'
    break;
  default:
    popRouletteUrl = 'http://localhost:3000'
}

export default popRouletteUrl;
