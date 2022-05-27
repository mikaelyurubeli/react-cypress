pipeline {

    agent any

    parameters {
        choice(name: 'BROWSER', choices: ['crhome', 'edge', 'firefox'], desrciption: "Choose the browser where you want to execute your scripts")
    }

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Build') {
            echo "Building......"
        }

        stage('Testing') {
            steps {
                bat "npm run cypressrun --browser ${BROWSER}"
            }
        }

        stage('Deploying') {
            echo "Deploying......"
        }
        
		stage('Publish HTML Report'){
				steps{
					publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/mochareports', reportFiles: 'report.html', reportName: 'HTML Report', reportTitles: ''])
				}
		}
    }
}