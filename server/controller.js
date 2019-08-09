module.exports = {
    register: async (req,res) => {
        console.log(req.body)
        const db = req.app.get('db')
        const { username, user_password } = req.body
        const newUser = await db.add_user({username, user_password})

        res.status(200).send(newUser)
    },
    login: async (req,res) => {
        console.log(req.body)
        const db = req.app.get('db')
        const { username, user_password } = req.body
        const user = await db.select_user({username, user_password})
        res.status(200).send(user)
    }
}