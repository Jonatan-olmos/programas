module.exports ={
    index :(req, res) => {
        return res.render('index', ({title : 'programas'}) )

    },
    calculadora : (req,res) => {
        return res.render ('calculadora/calculadora')
    }
}