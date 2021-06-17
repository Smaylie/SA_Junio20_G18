pipeline {
    agent any
    tools {nodejs "node"}

    node("Este es un dummy"){
        stages {
            stage('Build') { 
                steps {
                    // 
                    echo 'Build'
                }
            }
        }
    }

    node("Este es un dummy2"){
        stages {
            stage('Build2') { 
                steps {
                    // 
                    echo 'Build2'
                }
            }
        }
    }
}