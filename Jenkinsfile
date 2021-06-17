pipeline {
    agent any
    tools {nodejs "node"} 
    stages {
        stage('Build-Servicios') { 

            stage("usuario"){
                steps{
                    echo 'Usuario1'    
                }
            }

            stage("usuario2"){
                steps{
                    echo 'Usuario2'
                }
            }
        }
        stage('Test-Servicios') { 
            steps {
                // 
                echo 'Testing'
            }
        }
        stage('Release') { 
            steps {
                // 
                echo ''
            }
        }

        stage('Deploy'){

        }
    }
}