const toc = ["## Table of Contents", ""]

const generateLicense = license => {
    return `![Licence](https://img.shields.io/badge/Licence-${license}-lightblue?style=for-the-badge&logo=GitHub)`
}

const generateInstall = installation => {
    if(installation){

        toc.push("* [Installation](#installation)")
        return `
## Installation
        
${installation}
        
---`
    }
    else{

        return ""
    }
}

const generateUsage = usage => {
    if(usage){
        toc.push("* [Usage](#usage)")
        return `
## Usage
        
${usage}
        
---`
    }
    else{
        return ""
    }
}

const generateContribution = contribute => {
    if(contribute){
        toc.push("* [Contribution](#contribution)")
        return `
## Contribution
        
${contribute}
        
---`
    }
    else{
        return ""
    }
}

const generateTest = test => {
    if(test){
        toc.push("* [Tests](#tests)")
        return `
## Tests
        
${test}
        
---`
    }
    else{
        return ""
    }
}

const generateQuestion = userInfo => {
    if(userInfo.question === "Both"){
        toc.push("* [Contact](#contact)")
        return `
## Contact
        
If you have any questions you contact me by...
        
1. Email me at ${userInfo.email}
1. Go to my GitHub [account](https://github.com/${userInfo.username})
        
---`
    }
    else if(userInfo.question === "Email") {
        toc.push("* [Contact](#contact)")
        return `
## Contact Me
        
If you have any questions you can email me at ${userInfo.email}
        
---`
    }
    else if(userInfo.question === "GitHub Profile") {
        toc.push("* [Contact](#contact)")
        return `
## Contact Me
        
If you have any questions you can talk to me me at [account](https://github.com/${userInfo.username})
        
---`

    }
    else {
        return ""
    }
}

const generateTOC = () => {
    
    return toc.join("\n")
}

module.exports = pageTemplate => {

    const {username, email, projectTitle, description, installation, usage, license, contribute, test, question} = pageTemplate

    const userInfo = {
        username, email, question
    }

    generateInstall(installation)
    generateUsage(usage)
    generateContribution(contribute)
    generateTest(test)
    generateQuestion(userInfo)

    return `# ${projectTitle}

${generateLicense(license)}
    
## Description
    
${description}
    
---

${generateTOC()}

---
    
${generateInstall(installation)}
${generateUsage(usage)}
${generateContribution(contribute)}
${generateTest(test)}
${generateQuestion(userInfo)}`
     
}