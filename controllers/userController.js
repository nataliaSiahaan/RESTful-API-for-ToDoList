const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

// Register Membuat user baru 
exports.register = async (req, res) => {
    const { name, email, password } = req.body;  // Mengambil data dari permintaan
    try {
        const hashedPassword = await bcrypt.hash(password, 10);  // Mengacak password
        const user = await User.create({ name, email, password: hashedPassword });  // Menyimpan user di database
        res.status(201).json({ message: 'User created successfully.' });  // Berhasil mendaftarkan user
    } catch (err) {
        res.status(400).json({ message: err.message });  // Jika ada error
    }
};


  

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Cek apakah pengguna ada
    const user = await User.findOne({ where: { email } });
    console.log('User Found:', user); // Cetak pengguna yang ditemukan

    if (!user) return res.status(400).json({ message: 'Invalid email or password.' });// Jika email tidak ditemukan

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password.' });// Jika password tidak ditemukan

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
