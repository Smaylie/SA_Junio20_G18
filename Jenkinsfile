pipeline {
    agent any
    tools {nodejs "node"} 
    stages {
        parallel{

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

            stage('Build noseque') { 
                steps {
                    // 
                    echo 'Testing'
                }
            }
            stage('Build simon') { 
                steps {
                    // 
                    echo ''
                }
            }
        }
    }
}