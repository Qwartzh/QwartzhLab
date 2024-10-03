 const homeController = {

    index(req, res) {
        res.render('home');
    },

    typo(req, res) {
        res.render('typo');
    }

};

export {homeController};