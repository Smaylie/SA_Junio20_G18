pipeline{
    agent any
    stages{
        stage("Deploy"){
            steps{
                echo "Iniciando deploy de docker compose con un archivo de fabric"
                sh "fab deploy"
            }
            post{
                always{
                    echo "Saliendo del deployment"
                }
            }
        }
    }
}