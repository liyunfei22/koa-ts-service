import HomeService from '../service/home-service';
// import logger from ''
class HomeController {
  private service: HomeService = new HomeService();

  hello = async (ctx: { body: unknown }) => {
    ctx.body = await this.service.hello();
  };
}

export default new HomeController();
