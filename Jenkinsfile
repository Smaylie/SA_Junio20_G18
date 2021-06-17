pipeline {
    agent any
    tools {nodejs "node"}
    node ('Servicio de usuarios'){
        stages {
            stage('Build') { 
                steps {
                    // 
                    echo 'Build'
                    sh 'ls'
                }
            }
            stage('Test') { 
                steps {
                    // 
                    echo 'Testing'
                }
            }
            stage('Deploy') { 
                steps {
                    // 
                    echo 'Deploying 3... 2... 1...'
                }
            }
        }
    } 
}