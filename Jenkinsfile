pipeline {
    agent any
    tools {nodejs "node"}

    node("Este es un dummy"){
        stage('Build') { 
            steps {
                // 
                echo 'Build'
            }
        }
    }

    node("Este es un dummy2"){
        stage('Build2') { 
            steps {
                // 
                echo 'Build2'
            }
        }
    }
}