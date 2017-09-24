# Routes
# Usuario
  * /usuarios/:idUsuario -- GET
  * /usuarios -- POST
# Concurso
  * /concursos --GET
  * /concursos/usuario/:usuario_id --GET
  * /concursos/:id --GET
  * /concursos/usuario/:usuario_id/:id --GET
  * /concursos/usuario/:usuario_id --POST
  * /concursos/usuario/:usuario_id/:id --UPDATE
  * /concursos/usuario/:usuario_id/:id --DELETE
# Video
  * /videos -- GET
  * /videos/:idvideo -- GET
  * /videos/concurso/:concurso_id --GET
  * /videos/concurso/:concurso_id --POST
  * /videos/estado/:estado -- GET 
