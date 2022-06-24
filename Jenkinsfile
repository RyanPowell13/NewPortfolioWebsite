pipeline {
  environment {
    imagename = "ryanpowell/webapp"
    registryCredential = 'docker'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          git branch: 'main', 'https://github.com/RyanPowell13/NewPortfolioWebsite.git'
        }
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build imagename
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push("$BUILD_NUMBER")
             dockerImage.push('latest')
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $imagename:$BUILD_NUMBER"
         sh "docker rmi $imagename:latest"
 
      }
    }
  }
}
