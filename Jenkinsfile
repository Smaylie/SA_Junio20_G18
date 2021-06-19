pipeline{
    agent any
    stages{
        stage("Deploy"){
            steps{
                echo "Iniciando deploy de docker compose con un archivo de fabric"
                sh "fab check"
            }
            post{
                always{
                    echo "Saliendo del deployment"
                }
            }
        }
    }
}