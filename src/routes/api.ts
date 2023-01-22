import { Router } from "express";
import * as apiController from '../controllers/apiController';

const router = Router();



router.get('./ping', apiController.ping);
router.get('./randon', apiController.random);
router.get('/nome/:nome', apiController.nome);

//post
router.post('/frases', apiController.createPhrase);



/*
ISSO FOI LA PATA O CONTROLLLER

router.get('/ping', (req, res) =>{
    res.json({pong: true});
});

//NUMERO ALEATORIO
router.get('/randon', (req, res) => {
 let nRand: number = Math.floor( Math.random()*10);
 res.json({number: nRand});
});

//NOMES como paramentro
router.get('/nome/:nome', (req, res) => {
    let nome: string = req.params.nome;
    res.json({nome: nome});
});
*/

export default router;