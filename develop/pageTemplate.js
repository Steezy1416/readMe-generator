//stores which elements will be in the table of contents
const toc = ["## Table of Contents", ""]

//creates license badge based on the user license input
const generateLicense = license => {
    return `![Licence](https://img.shields.io/badge/Licence-${license}-lightblue?style=for-the-badge&logo=GitHub)`
}

//generates the installation section based on user input
const generateInstall = installation => {
    if(installation){
        //if there is data then it will push markdown syntax in the table of contents array
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

//generates the usage section based on user input
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

//generated contribution section based on user input
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

//generated the test section based on user input
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

//generates based on user input on which ways they would want to be contacted for questions
const generateQuestion = userInfo => {
    //if statements for each option the user can pick on how they want to be contacted
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

//generates table of contents based on what elements are inside the toc array
const generateTOC = () => {
    
    return toc.join("\n")
}

module.exports = pageTemplate => {
    //this destructure the data from index.js so the data can be called more easily
    const {username, email, projectTitle, description, installation, usage, license, contribute, test, question} = pageTemplate
    // stores data that will be needed for the questions section in a array
    const userInfo = {
        username, email, question
    }
    //calls the functions to an array holding information on the table of contents gets updated
    generateInstall(installation)
    generateUsage(usage)
    generateContribution(contribute)
    generateTest(test)
    generateQuestion(userInfo)

    //formats the data for the readme and calls functions to get the data of what it should return or display
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