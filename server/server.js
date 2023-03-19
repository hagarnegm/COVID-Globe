const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const { auth, requiresAuth } = require('express-openid-connect');
const logs = require('./routes/logs');

// import { fileURLToPath } from "url";


// Middleware Configurations
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

const PORT = process.env.PORT || 6000;

//Auth0 Congigurations
const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: `http://localhost:${PORT}`,
  clientID: '6hst2fn4BsEveFmSmSu6XiZr32lE4mQK',
  issuerBaseURL: 'https://dev-mkna5rlaeic1sdic.eu.auth0.com',
  secret: '1120802bda44f6d6daa1aa3e394ce8d3b9b8b7dde7de562075e4889b10517244'
};

// The `auth` router attaches /login, /logout
// and /callback routes to the baseURL
app.use(auth(config));

// req.oidc.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(
    req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
  )
});

app.use('/logs', requiresAuth(), logs);

// The /profile route will show the user profile as JSON
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});


app.get('/logout', (req, res) => {
  res.send(
    req.oidc.logout()
  );
});

app.listen(PORT, function() {
  console.log(`Listening on http://localhost:${PORT}`);
});