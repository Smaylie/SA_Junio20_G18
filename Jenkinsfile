pipeline {
    agent any
    tools {nodejs "node"} 
    stages {
        stage('Build-Servicios') { 
            stages{
                stage("usuario"){
                    steps{
                        echo 'Usuario1'    
                    }
                }

                stage("usuario2"){
                    steps{
                        echo 'Usuario2'
                        cd "hola"
                    }
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
    }
}