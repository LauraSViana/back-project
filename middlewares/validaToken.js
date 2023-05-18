
const validation = (req, res, next) => {
  
  const isValidToken = () => {
    //aqui teria toda uma lógica de validação 
    return true;
  }

  if (isValidToken()) {
    next();
  }

  res.status(401).send('Usuário não autenticado');
};

module.exports = validation;