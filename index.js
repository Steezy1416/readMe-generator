const inquirer = require("inquirer")

const userInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
            validate: userInput => {
                if(userInput){return true}
                else{
                    console.log("Please enter your GitHub username:")
                }
            }
        },
        {
            type: "input",
            name: "repoName",
            message: "Please enter the name of your repository:",
            validate: userRepo => {
                if(userRepo){return true}
                else{
                    console.log("Please enter the name of your repository:")
                }
            }
        }
    ])
}

const projectInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "project-title",
            message: "What is the title of your project?",
            validate: userTitle => {
                if(userTitle){return true}
                else{
                    console.log("Please enter your project title:")
                    return false
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description for your project:",
            validate: descripttionInput => {
                if(descripttionInput){return true}
                else{
                    console.log("Please enter a description for your project:")
                    return false
                }
            }
        },
        {
            type: "confirm",
            name: "installationConfirm",
            message: "Would you like to include an installation section?",
            default: true
        },
        {
            type: "input",
            name: "installation",
            message: "Please enter a description on how to install your project:",
            when: ({installationConfirm}) => installationConfirm
        },
        {
            type: "confirm",
            name: "usageConfirm",
            message: "Would you like to include a usage section?",
            default: true
        },
        {
            type: "input",
            name: "usage",
            message: "Please enter a description on how to use your project:",
            when: ({usageConfirm}) => usageConfirm
        },
        {
            type: "list",
            name: "license",
            message: "Please select which license you would like for your project:",
            choices: ["None", "MIT License", "Apache License 2.0"]
        },
        {
            type: "confirm",
            name: "contributeConfirm",
            message: "Would you like to include how to contribute section?",
            default: true
        },
        {
            type: "input",
            name: "contribute",
            message: "Please enter a description on how to contribute to your project:",
            when: ({contributeConfirm}) => contributeConfirm
        },
        {
            type: "confirm",
            name: "contactConfirm",
            message: "Would you like to include a contact section?",
            default: true
        },
        {
            type: "input",
            name: "contact",
            message: "Please enter a description on how to contact you:",
            when: ({contactConfirm}) => contactConfirm
        },

    ])
}

userInfo()
.then(projectInfo)

