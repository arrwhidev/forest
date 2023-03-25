const Game = require('./Game');
const Forest = require('./Forest');
const World = require('./World');
const DayManager = require('./DayManager');
const SeasonManager = require('./SeasonManager');

const world = new World();
const dayManager = new DayManager();
const seasonManager = new SeasonManager(dayManager);
world.addWorldObject(dayManager);
world.addWorldObject(seasonManager);

const game = new Game((dt, ctx) => {
    world.update(dt);
    world.render(ctx);
});
game.start();

/**
 * 
 * Taxonomy:
 *  Seed > Sprout > Sapling > Young Tree > Mature Tree > Snag
 * 
 *  Seeds require certain nutrients
 *  Mature Trees have fruit/seeds/flowers in specific seasons
 *  
 * Oak
 *  Conditions
 *      Best time to start is Autumn
 *      Needs sunlight
 *      By Spring, there should be a sprout
 *      1-2 years until "young tree"
 *      5 years for a full tree
 *      Most oak trees wont produce good crop of acorns until 50 years old
 *      Can live for 1000 years
 *  Seed = Acorn
 * 
 */