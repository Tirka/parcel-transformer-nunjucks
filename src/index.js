import { Transformer } from "@parcel/plugin";
import nunjucks from "nunjucks";

export default new Transformer({
  async loadConfig({ config, logger }) {
    logger.info({
      message: "running `loadConfig`"
    });

    config.invalidateOnBuild();

    const config = await config.getConfig(".nunjucksrc");

    logger.info({
      message: `message for logger: ${JSON.stringify(config, 2, null)}`
    });

    return {
      name: "hello"
    };
  },
  async transform({ asset, config }) {
    return [asset];
  },
});
