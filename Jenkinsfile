pipeline {

    agent any
    stages {
		stage('Clone Git Repo'){
            steps{
                git 'https://github.com/mikaelyurubeli/react-cypress.git'
		    }
		}

        stage('Build') {
            steps{
                echo "Building......"
            }
        }

        stage('Testing') {
            steps {
                bat "npm run cypressrun"
            }
        }

        stage('Deploying') {
            steps{
                echo "Deploying......"
            }
        }
        
		stage('Publish HTML Report'){
            steps{
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports', reportFiles: 'report.html', reportName: 'HTML Report', reportTitles: ''])
            }
		}
    }
}