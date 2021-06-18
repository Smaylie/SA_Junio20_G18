pipeline{
    agent any
    tools {nodejs "node"}

    stages{
        stage("Build"){
            steps{
                echo "Ahora vamos a iniciar con el pipeline para servicio de usuario"
                echo "======== Iniciando Build ========"
                sh "cd services"
                sh "ls"
                sh "cd Servicio-Usuario"
                sh "npm install"
            }
            post{
                always{
                    echo "======== Terminando Build ========"
                }
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
                always{
                    echo "======== Terminando Tests ========"   
                }
            }
        }

        stage("Release"){
            steps{
                echo "======== Iniciando Release ========"
                echo "aqui deberia empaquetar"
            }
            post{
                always{
                    echo "======== Terminando Release ========"
                }
            }
        }

        stage("Deploy"){
            steps{
                echo "======== Iniciando Deploy ========"
                echo "aqui deberia hacer el deploy con fabric"
            }
            post{
                always{
                    echo "======== Terminando Deploy ========"   
                }
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