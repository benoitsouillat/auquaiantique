const sqlLogin = "benoit";
const sqlPassword = "password";

module.exports = (req, res, next) => {
    console.log(req);
    if (req.method === 'POST' && req.path === '/login')
    {
        if (req.body.login === sqlLogin && req.body.password === sqlPassword)
        {
            res.status(200).json({token: 'testabc'});
        }
        else {
            res.status(400).json({message: 'Mauvais Mot de Passe'});
        }
    }
    else {
        next();
    }
}