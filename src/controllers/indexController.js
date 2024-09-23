module.exports ={
    index :(req, res) => {
        return res.render('index', ({title : 'programas'}) )

    },
    xp:(req, res) => {
        return res.render('xp', ({title : 'xp'}) )

    },  pruebas:(req, res) => {
        return res.render('pruebas', ({title : 'pruebas'}) )

    },
    calculadora : (req,res) => {
        return res.render ('aplicaciones/calculadora', ({title : 'calculadora'}))
    },

    clima : (req,res) => {
        return res.render ('aplicaciones/clima', ({title : 'clima'}))
    },
    reloj : (req,res) => {
        return res.render ('aplicaciones/reloj', ({title : 'reloj'}))
    },
    chatgpt : (req,res) => {
        return res.render ('aplicaciones/chatgpt', ({title : 'chatgpt'}))
    }, 
    piano : (req,res) => {
        return res.render ('aplicaciones/piano', ({title : 'piano'}))
    },
    conversorMonedas : (req,res) => {
        return res.render ('aplicaciones/conversorMonedas', ({title : 'conversorMonedas'}))
    }
    
}