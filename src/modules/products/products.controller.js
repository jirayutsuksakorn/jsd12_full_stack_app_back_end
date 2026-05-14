// สมมติข้อมูลชั่วคราว
let products = [
    { id: 1, name: "Keyboard", price: 1500 },
    { id: 2, name: "Mouse", price: 800 }
];

export const getAllProducts = (req, res) => {
    res.json(products);
};

export const createProduct = (req, res) => {
    const newProduct = { id: Date.now(), ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
};