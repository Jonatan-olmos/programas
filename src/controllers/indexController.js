module.exports ={
    index :(req, res) => {
        return res.render('index', ({title : 'programas'}) )

    },
    calculadora : (req,res) => {
        return res.render ('calculadora/calculadora', ({title : 'calculadora'}))
    },

    clima : (req,res) => {
        return res.render ('clima/clima', ({title : 'clima'}))
    }
}