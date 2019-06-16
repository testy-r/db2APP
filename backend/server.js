const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PlanetRoutes = require('./routes/PLANET');
const AtmosphaereRoutes = require('./routes/Atmosphaere');
const MondRoutes = require('./routes/MOND');
const PlanetensystemRoutes = require('./routes/PLANETENSYSTEM');
const SternRoutes = require('./routes/Stern');
const StoffRoutes = require('./routes/Stoff');
const ZwergplanetRoutes = require('./routes/ZWERGPLANET');
const functions = require('./routes/function');

const db = require('./database');
const cors = require('cors');




app.use(cors());
app.use(bodyParser.json());
app.use(PlanetRoutes);
app.use(AtmosphaereRoutes);
app.use(MondRoutes);
app.use(PlanetensystemRoutes);
app.use(SternRoutes);
app.use(StoffRoutes);
app.use(ZwergplanetRoutes);
app.use(functions);



app.listen(9001, () => {
    console.log('server is up');

});
