import app from './app';
import sequelize from './config/database';

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
})(); 
app.get('/', (req, res) => {
  res.send('✅ API is working!:${PORT}');
});
