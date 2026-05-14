import { Router } from "express";
import users from "../../fakedata/fakeUsers.js";
export const router = Router();

router.get("/", (req, res) => {
    res.json(users);
});

router.post("/", (req, res) => {
    // ดึง password มาด้วยเพื่อให้โครงสร้างเหมือนกับใน fakeUsers.js
    const { username, email, password } = req.body || {};

    if (!username || !email || !password) {
        return res.status(400).json({ error: "username, email, and password are required" });
    }

    const nextId = String(
        (users.reduce((max, u) => Math.max(max, Number(u.id)), 0) || 0) + 1
    );

    // สร้าง object ให้มี field ครบเหมือนใน fakeUsers.js
    const newUser = {
        id: nextId,
        username: username,
        email: email,
        password: password
    };

    users.push(newUser);
    return res.status(201).json(newUser);
});

router.put("/:id", (req, res) => {

    const user = users.find((u) => u.id === req.params.id);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: "username, email, and password are required" });
    }

    user.username = username;
    user.email = email;
    user.password = password;

    res.status(200).json(user);

});
