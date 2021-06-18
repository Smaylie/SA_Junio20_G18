pipeline{
    agent any
    tools {nodejs "node"}

    stages{
        stage("Build"){
            steps{
                echo "Ahora vamos a iniciar con el pipeline para servicio de usuario"
                echo "======== Iniciando Build ========"
                sh "cd services"
                sh "cd Servicio-Usuario"
                sh "npm install"
            }
            post{
                echo "======== Terminando Build ========"
            }
        }

        stage("Testing"){
            steps{
                echo "======== Iniciando Tests ========"
                sh "cd services"
                sh "cd Servicio-Usuario"
                sh "npm test"
            }
            post{
                echo "======== Terminando Tests ========"
            }
        }

        stage("Release"){
            steps{
                echo "======== Iniciando Release ========"
                echo "aqui deberia empaquetar"
            }
            post{
                echo "======== Terminando Release ========"
            }
        }

        stage("Deploy"){
            steps{
                echo "======== Iniciando Deploy ========"
                echo "aqui deberia hacer el deploy con fabric"
            }
            post{
                echo "======== Terminando Deploy ========"
            }
        }

    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}