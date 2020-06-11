import express from 'express';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import Template from './../template';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';

const app = express();
app.use(express.json()); //use body parser if there are errors in this line
app.use(express.urlencoded({ extended: true })); //use body parser if there are errors in this line
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use('/', userRoutes);
app.use('/', authRoutes);

/* install body parser if there are errors */

app.get('/', (req, res) => {
	res.status(200).send(Template());
});

app.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		res.status(401).json({ error: err.name + ': ' + err.message });
	}
});

export default app;
