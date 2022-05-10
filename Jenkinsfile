pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                cleanWs()
                git branch: 'dev', url: 'https://github.com/siwawong12/Soft-dev.git'
            }
        }
        stage('Download Dependencies') {
            steps {
                dir("backend"){
                    bat 'npm install'
                }
            }
            steps {
                dir("frontend"){
                    bat 'npm install'
                }
            }
        }
    }
}