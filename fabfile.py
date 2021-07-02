from fabric.api import *

#host
env.hosts = ['157.230.218.35','142.93.13.144']

# Credenciales
env.user = "root"
env.password = "sa2K21!r"

def remover_anterior():
    #dtengo el servicio
    sudo("docker-compose -p FASE_1 stop")

    #lo elimino
    sudo("docker-compose -p FASE_1 rm -f")

 
def deploy():
    remover_anterior()
    sudo("rm docker-compose.yml")
    put("./docker-compose.yml","./",use_sudo=True)
    sudo("docker-compose pull")
    sudo("docker-compose -p FASE_1  up -d --restart always")
    